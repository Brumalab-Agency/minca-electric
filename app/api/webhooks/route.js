import axios from 'axios';
import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { sendEmail } from '@/utils/email/sendEmail';

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3',
});

export async function GET(request) {
  return NextResponse.json({ message: 'Soy el servidor webhook' });
}

export async function POST(request) {
  try {
    console.log("Execution made", request.url)
    const url = new URL(request.url);
    const topic = url.searchParams.get('topic');
    const id = url.searchParams.get('id');
    if (topic === 'payment' && id) {
      const response = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${process.env.MERCADOPAGO_SECRET_KEY}`,
        },
      });
      const payment = response.data;
      const input = payment.metadata.input;
      const cart = payment.metadata.cart;

      if(payment.status === 'approved') {
        const data = {
          status: "completed"
        };

        const idOrderWoocomerce = payment.metadata.id_complete;

        const sheets = {
          "Metodo de pago": "Mercado Pago",
          "Estado": "Aprobado",
        }

        fetch(`https://sheetdb.io/api/v1/zimjq5k5azwjz/OC/${idOrderWoocomerce}`, {
          method: "PATCH",
          headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
          },
          body: JSON.stringify(sheets)
        })
        .then(response => response.json())
        .then(data => console.log("Response from SheetDB:", data))
        .catch(error => console.error("Error:", error));
        
        await api.put(`orders/${idOrderWoocomerce}`, data);
        await sendEmail(input, cart, idOrderWoocomerce);
      }
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Error en el webhook:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}