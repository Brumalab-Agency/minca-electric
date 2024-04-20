// pages/api/order.js

import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: 'wc/v3',
});

async function getOrderDetails(orderId) {
    try {
        const response = await api.get(`orders/${orderId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching order details');
    }
}

export async function GET(req) {
    const orderId = req.query.orderId;
    const responseData = {
        shipping: {
            first_name: "",
            last_name: "",
            address_1: "",
            address_2: "",
            city: "",
            country: "",
            state: "",
            postcode: "",
            email: "",
            phone: "",
            company: "",
            numero_identificacion: "",
            name_receiver: "",
            phone_receiver: "",
        },
        billing: {
            first_name: "",
            last_name: "",
            numero_identificacion: "",
            address_1: "",
            address_2: "",
            city: "",
            country: "",
            state: "",
            postcode: "",
            email: "",
            phone: "",
            company: "",
            name_receiver: "",
            phone_peceiver: "",
        },
    }

    if (!orderId) {
        responseData.error = 'Order ID is required';
        return NextResponse.json(responseData, { status: 400 });
    }

    try {
        // Fetch order details using getOrderDetails function
        const orderData = await getOrderDetails(orderId);
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
