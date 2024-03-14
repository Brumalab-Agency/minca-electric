import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3',
});

export async function GET(request) {
  const responseData = {
    success: false,
    products: [],
  };

  const { searchParams } = new URL(request.url);
  const perPage = searchParams.get('perPage');

  try {
    const { data } = await api.get('products', {
      per_page: perPage || 50,
    });

    responseData.success = true;
    responseData.products = data;

    return NextResponse.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    return NextResponse.json(responseData, { status: 500 });
  }
}