import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_SECRET_KEY,
  
});

export async function POST(request) {
  try {
    const body = await request.json();
    const preferenceData = {
      items: [
        {
          title: body.title,
          quantity: Number(body.quantity), 
          unit_price: Number(body.price),
          currency_id: 'COP',
        },
      ],
      back_urls: {
        success: 'https://mincaelectric.com/ ',
        failure: 'https://mincaelectric.com/ ',
        pending: 'https://mincaelectric.com/ ',
      },
      auto_return: 'approved',
    };

    const preference = new Preference(client);
    const result = await preference.create({ body: preferenceData });
    return NextResponse.json({ id: result.id });
  } catch (error) {
    console.error('Error creating payment preference:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}
