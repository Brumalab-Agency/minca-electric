import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: "TEST-3450730727437485-031023-acc26050bc5b6a47dca9a4cab02259e8-1722898408",
} );

export async function GET(request) {
  return NextResponse.json({ message: 'Soy el servidor' });
}

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
        success: 'https://cms-headless-nextjs-wordpress.vercel.app/',
        failure: 'https://cms-headless-nextjs-wordpress.vercel.app/',
        pending: 'https://cms-headless-nextjs-wordpress.vercel.app/',
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