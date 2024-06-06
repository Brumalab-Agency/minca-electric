import { APP_ENDPOINT } from '@/utils/checkout/constants/endpoints';
import { getAccessToken } from '@/utils/checkout/utilsCheckout';
import { NextResponse } from 'next/server';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

export async function GET(request) {
    return NextResponse.json({ message: 'Addi payment server' });
}

export async function POST(request) {
    try {
        const body = await request.json();

        const paymentData = {
            orderId: body.orderId,
            totalAmount: body.totalAmount,
            shippingAmount: body.shippingAmount,
            currency: body.currency,
            items: body.items,
            client: body.client,
            allyUrlRedirection: body.allyUrlRedirection,
        };

        // Get access token
        const accessToken = await getAccessToken(CLIENT_ID, CLIENT_SECRET);

        // Make payment request
        const response = await fetch(APP_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(paymentData)
        });

        console.log(response)
    

        return NextResponse.redirect(response.url, 301);
    } catch (error) {
        console.error('Error creating payment request:', error);
        return NextResponse.json({ error: 'Error' }, { status: 500 });
    }
}
