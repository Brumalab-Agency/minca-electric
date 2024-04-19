import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { isEmpty } from 'lodash';
import CheckoutForm from "@/components/checkout/CheckoutForm";

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3',
});

export async function POST(req) {
  const responseData = {
    success: false,
    orderId: '',
    total: '',
    currency: '',
    error: '',
  };

  const body = await req.json();

  if (isEmpty(body)) {
    responseData.error = 'Required data not sent';
    return NextResponse.json(responseData, { status: 400 });
  }

  /* const data = body;
  data.status = 'pending';
  data.set_paid = false;*/

  // Get the custom fields
  inputFields = CheckoutForm.extractCustomCheckoutFields();
  
  const customFields = {
    shipping: {
      ...newFields
    },
    billing: {
      ...newFields
    }
  };

  // Merge the data object with custome fields
  const data = {
    ...body,
    shipping: {
      ...body.shipping,
      ...newFields
    },
    billing: {
      ...body.billing,
      ...newFields
    },
    status: 'pending',
    set_paid: false,
  };

  console.log(data)


  try {
	const response = await api.post('orders', data);


	if (response.status === 201) {
		const { data } = response;
		responseData.success = true;
		
		if (data.number) {
			responseData.orderId = data.number;
	  }
  
	  if (data.total) {
		responseData.total = data.total;
	  }
  
	  if (data.currency) {
		responseData.currency = data.currency;
	  }

	  if (data.payment_url) {
		responseData.paymentUrl = data.payment_url;

	  }
	} else {
	  responseData.error = 'Error creating order';
	}
  
	return NextResponse.json(responseData);
  } catch (error) {

	responseData.error = error.message;
	return NextResponse.json(responseData, { status: 500 });
  }
}