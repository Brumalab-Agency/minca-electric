import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3',
});

export async function GET(req) {
  const { orderId } = req.query;

  try {
    // Fetch order details using the WooCommerce API
    const response = await api.get(`orders/${orderId}`);

    if (response.status === 200) {
      const orderData = response.data;
      // You can customize how you want to handle the order data here
      return NextResponse.json(orderData);
    } else {
      // Handle error if order retrieval fails
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
  } catch (error) {
    // Handle any unexpected errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
