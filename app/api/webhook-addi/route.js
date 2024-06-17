import axios from 'axios';
import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { sendEmail } from '@/utils/email/sendEmail';
import useEmailData from '@/store/dataorder.store';

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
    const data = await request.json();
    const authorizationHeader = request.headers.get('authorization');
    if (data.status === 'APPROVED') {
      if (authorizationHeader !== process.env.AUTH_ADDI_WEBHOOK) {
        return NextResponse.json({ error: 'Invalid credentials, request not authorized' }, { status: 401 });
      }

      const input = useEmailData((state) => state.clientData);
      const cart = useEmailData((state) => state.products);
      console.log(input)
      console.log(cart)

      const dataWoocommerce = {
        status: "completed"
      };
      const idOrderWoocomerce = data.orderId;
      await api.put(`orders/${idOrderWoocomerce}`, dataWoocommerce);
      await sendEmail(input, cart, idOrderWoocomerce);
      return NextResponse.json({ body: data }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Payment not approved' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error en el webhook:', error);
    return NextResponse.json({ error: 'Failed Request' }, { status: 500 });
  }
}