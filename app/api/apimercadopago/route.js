import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_SECRET_KEY,
});

export async function GET(request) {
  return NextResponse.json({ message: 'Soy el servidor' });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const metadata = {
      id_complete: body.idComplete,
      input: body.inputData,
      cart: body.cartData,
    };

    // Serialize metadata object to a string

    const preferenceData = {
      items: [
        {
          title: body.title,
          quantity: Number(body.quantity),
          unit_price: Number(body.price),
          currency_id: "COP",
        },
      ],
      back_urls: {
        success: "https://www.mincaelectric.com/gracias-por-tu-compra",
        failure: "https://www.mincaelectric.com/error-en-tu-compra",
        pending: "https://www.mincaelectric.com/intentalo-mas-tarde",
      },
      auto_return: "approved",
      // No subir esto en los cambios
      notification_url:
        "https://g2ci6uygwogyqzngb42v4mtqzq.srv.us/api/webhooks",
      metadata: metadata,
    };

    const preference = new Preference(client);
    const result = await preference.create({ body: preferenceData });
    return NextResponse.json({ id: result.id });
  } catch (error) {
    console.error('Error creating payment preference:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}
