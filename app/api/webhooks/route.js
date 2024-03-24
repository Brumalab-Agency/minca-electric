import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Webhook body:', body); 
    return true;
  } catch (error) {
    console.error('Error en el webhook:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}

