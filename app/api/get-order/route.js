import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: 'wc/v3',
});

export async function GET(req) {
    const responseData = {
        id: 0,
        shipping: {
            first_name: '',
            last_name: '',
            address_1: '',
            address_2: '',
            city: '',
            country: '',
            state: '',
            postcode: '',
            email: '',
            phone: '',
            company: '',
            numero_identificacion: '',
            name_receiver: '',
            phone_receiver: '',
        },
        billing: {
            first_name: '',
            last_name: '',
            numero_identificacion: '',
            address_1: '',
            address_2: '',
            city: '',
            country: '',
            state: '',
            postcode: '',
            email: '',
            phone: '',
            company: '',
            name_receiver: '',
            phone_peceiver: '',
        },
        status: ''
    }
    
    /* const orderId = await req.query.orderId;
    console.log(req.query, "route get function") */

    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get('orderId');


    if (!orderId) {
        responseData.error = 'Order ID is required';
        return NextResponse.json(responseData, { status: 400 });
    }

    try {
        const response = await api.get(`orders/${orderId}`);
        const orderData = response.data;
        responseData.success = true;
        responseData.orderDetails = {
            id: orderData.id,
            status: orderData.status,
            shipping: orderData.shipping,
            billing: orderData.billing,
            // Add more details as needed
        };
    } catch (error) {
        responseData.error = error.message;
        return NextResponse.json(responseData, { status: 500 });
    }

    return NextResponse.json(responseData);
}
