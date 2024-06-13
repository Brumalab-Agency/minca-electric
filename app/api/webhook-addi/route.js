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
    console.log(request.headers)
    const data = await request.json();
    console.log(data)
    const body = {
        orderId: data.id_order,
        applicationId: data.applicationId,
        approvedAmoun: data.approvedAmount,
        currency: "COP",
        status: data.status,
        statusTimestamp: data.statusTimestamp,
      }
    if (body.status === 'APPROVED') {
      const response = await axios.post(process.env.SERVER_ADDI_URL, body, {
        headers: {
          "Content-type": "application/json",
        },
      });
      // const input = data.metadata.input;
      // const cart = data.metadata.cart;

      const dataWoocommerce = {
        status: "completed"
      };
      const idOrderWoocomerce = body.orderId;
        
      await api.put(`orders/${idOrderWoocomerce}`, dataWoocommerce);
      // await sendEmail(input, cart, idOrderWoocomerce);
      }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Error en el webhook:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}