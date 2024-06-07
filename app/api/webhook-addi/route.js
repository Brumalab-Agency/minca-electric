import axios from 'axios';
import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { sendEmail } from '@/utils/email/sendEmail';


export async function GET(request) {
  return NextResponse.json({ message: 'Soy el servidor webhook' });
}

export async function POST(request) {
  try {
    const data = request.json();
    const AuthToken = data.AuthToken
    const body = {
        orderId: data.id_order,
        applicationId: data.applicationId,
        approvedAmoun: approvedAmount,
        currency: "COP",
        status: data.status,
      }
    if (body.status === 'APPROVED' && id) {
      const response = await axios.post(process.env.SERVER_ADDI_URL, body, {
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${AuthToken}`,
        },
      });
      const input = data.metadata.input;
      const cart = data.metadata.cart;

      if(response.status === 'APPROVED') {
        const data = {
          status: "completed"
        };
        const idOrderWoocomerce = payment.metadata.id_complete;
        
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