import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { isEmpty } from 'lodash';

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3',
});

export async function POST(req) {
  const responseData = {
    id: 0,
    code: "",
  };

  const body = await req.json();

  if (isEmpty(body)) {
    responseData.error = 'Required data not sent';
    return NextResponse.json(responseData, { status: 400 });
  }

  try {
    console.log('Request Body:', body); // Log request payload

    const response = await api.post('coupons', body);
    console.log(response)
    console.log('WooCommerce API Response:', response.data); // Log WooCommerce API response

    if (response.status === 201) {
      const { data } = response;
      responseData.success = true;
      responseData.couponCode = data.code; // Assuming the coupon code is returned in the response
    } else {
      responseData.error = 'Error creating coupon';
    }

    console.log('Response Data:', responseData); // Log response data
    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error creating coupon:', error); // Log error message
    responseData.error = error.message;
    return NextResponse.json(responseData, { status: 500 });
  }
}