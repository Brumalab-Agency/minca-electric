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
    const authorizationHeader = request.headers.get('authorization');
    console.log(authorizationHeader)


    if (data.status === 'APPROVED') {
      const response = await fetch(process.env.SERVER_ADDI_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorizationHeader,
        },
        body: data,
      });
      console.log(response)

      if (response.status === 401) {
        return NextResponse.json({ error: 'Invalid credentials, request not authorized' }, { status: 401 });
      }

      if (response.status === 500) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
      }
      // const input = data.metadata.input;
      // const cart = data.metadata.cart;

      const dataWoocommerce = {
        status: "completed"
      };
      const idOrderWoocomerce = body.orderId;
        
      await api.put(`orders/${idOrderWoocomerce}`, dataWoocommerce);
      // await sendEmail(input, cart, idOrderWoocomerce);
      return NextResponse.json({ body: data }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Payment not approved' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error en el webhook:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}