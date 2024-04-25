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
        success: false,
        coupons: [],
    };

    try {
        const response = await api.get('coupons');
        const couponsData = response.data;
        responseData.success = true;
        responseData.coupons = couponsData;
    } catch (error) {
        responseData.error = error.message;
        return NextResponse.json(responseData, { status: 500 });
    }

    return NextResponse.json(responseData);
}
