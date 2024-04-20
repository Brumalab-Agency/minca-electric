import { isArray, isEmpty } from 'lodash';
import { createTheOrder, getCreateOrderData } from './order';
import { clearCart } from '../cart/cartUtils';
import axios from 'axios';
import { WOOCOMMERCE_STATES_ENDPOINT } from '../cart/constants/endpoint';
import { NextResponse } from 'next/server';

/**
 * Handle Other Payment Method checkout.
 *
 */
export const handleOtherPaymentMethodCheckout = async ( input, products, setRequestError, setCart, setIsOrderProcessing, setCreatedOrderData ) => {
	setIsOrderProcessing( true );
	const orderData = getCreateOrderData( input, products);

	const customerOrderData = await createTheOrder( orderData, setRequestError, '' );
	
	/* const cartCleared = await clearCart( setCart, () => {
	} ); */
	setIsOrderProcessing( false );
	
	if (!isEmpty(customerOrderData?.orderId)) {
		setCreatedOrderData(customerOrderData);
		return customerOrderData;
	  } else {
		setRequestError('Clear cart failed');
		return null;
	  }
	
};

/**
 * Handle Stripe checkout.
 *
 * 1. Create Formatted Order data.
 * 2. Create Order using Next.js create-order endpoint.
 * 3. Clear the cart session.
 * 4. On success set show stripe form to true
 */
/* export const handleStripeCheckout = async ( input, products, setRequestError, setCart, setIsProcessing, setCreatedOrderData ) => {
	setIsProcessing( true );
	const orderData = getCreateOrderData( input, products );
	const customerOrderData = await createTheOrder( orderData, setRequestError, '' );
	const cartCleared = await clearCart( setCart, () => {
	
	} );
	setIsProcessing( false );
	
	if ( isEmpty( customerOrderData?.orderId ) || cartCleared?.error ) {
		setRequestError( 'Clear cart failed' );
		return null;
	}
	
	// Si hay éxito, se muestra el formulario de STRIPE.
	setCreatedOrderData( customerOrderData );
	await createCheckoutSessionAndRedirect( products, input, customerOrderData?.orderId );
	
	return customerOrderData;
}; */

/**
 * Create Checkout Session and redirect.
 * @param products
 * @param input
 * @param orderId
 * @return {Promise<void>}
 */
/* const createCheckoutSessionAndRedirect = async ( products, input, orderId ) => {
	const sessionData = {
		success_url: window.location.origin,
		cancel_url: window.location.href,
		customer_email: input.billingDifferentThanShipping ? input?.billing?.email : input?.shipping?.email,
		line_items: getStripeLineItems( products ),
		metadata: getMetaData( input, orderId ),
		payment_method_types: [ 'card' ],
		mode: 'payment',
	};

	let session = {};
	try {
		session = await createCheckoutSession( sessionData );
	} catch ( err ) {
		console.log( 'createCheckout session error', err );
	}
	try {
		const stripe = await loadStripe( process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY );
		if ( stripe ) {

			stripe.redirectToCheckout( { sessionId: session.id } );


		}
	} catch ( error ) {
		console.log( error );
	}
}; */

/**
 * Get Stripe Line Items
 *
 
 */
/* const getStripeLineItems = ( products ) => {
	
	if ( isEmpty( products ) && ! isArray( products ) ) {
		return [];
	}
	
	return products.map( product => {
		return {
			quantity: product?.quantity ?? 0,
			name: product?.data?.name ?? '',
			images: [ product?.data?.images?.[ 0 ]?.src ?? '' ?? '' ],
			amount: Math.round( ( product?.line_subtotal ?? 0 ) * 100 ),
			currency: 'usd',
		};
	} );
}; */

/**
 * Get meta data.
 *
 * @param input
 * @param {String} orderId Order Id.
 *
 * @returns {{shipping: string, orderId: String, billing: string}}
 */
export const getMetaData = ( input, orderId ) => {
	return {
		billing: JSON.stringify( input?.billing ),
		shipping: JSON.stringify( input.billingDifferentThanShipping ? input?.billing?.email : input?.shipping?.email ),
		orderId,
	};
	
	// @TODO
	// if ( customerId ) {
	//     metadata.customerId = customerId;
	// }
	
};

/**
 * Handle Billing Different Than Shipping.
 *
 * @param input
 * @param setInput
 * @param target
 */
export const handleBillingDifferentThanShipping = ( input, setInput, target ) => {
	const newState = { ...input, [ target.name ]: ! input.billingDifferentThanShipping };
	setInput( newState );
};

/**
 * Handle Create Account.
 *
 * @param input
 * @param setInput
 * @param target
 */
export const handleCreateAccount = ( input, setInput, target ) => {
	const newState = { ...input, [ target.name ]: ! input.createAccount };
	setInput( newState );
};

/**
 * Set states for the country.
 *
 */
export const setStatesForCountry = async ( target, setTheStates, setIsFetchingStates ) => {
	if ( 'country' === target.name ) {
		setIsFetchingStates( true );
		const countryCode = target[ target.selectedIndex ].getAttribute( 'data-countrycode' );
		const states = await getStates( countryCode );
		setTheStates( states || [] );
		setIsFetchingStates( false );
	}
};

/**
 * Get states
 *
 * @param {String} countryCode Country code
 *
 * @returns {Promise<*[]>}
 */


export const getStates = async ( countryCode = '' ) => {
	
	if ( ! countryCode ) {
		return [];
	}
	
	const { data } = await axios.get( WOOCOMMERCE_STATES_ENDPOINT, { params: { countryCode } } );
	
	return data?.states ?? [];
};

/* async function getOrderDetails(orderId) {
    const response = {
        shipping: {},
        billing: {},
    };

    try {
        const request = await fetch(`/api/get-order?orderId=${orderId}`);

        if (!request.ok) {
            throw new Error('Failed to fetch order details');
        }

        const result = await request.json();

        // Assuming the API response structure contains the order details
        response.success = true;
        response.orderDetails = {
            id: result?.orderDetails?.id ?? '',
            status: result?.orderDetails?.status ?? '',
            // Extract shipping and billing details from the response if available
            shipping: result?.orderDetails?.shipping ?? {},
            billing: result?.orderDetails?.billing ?? {},
            // Add more details as needed
        };
    } catch (error) {
        response.error = error.message;
    }

    return response;
} */



export async function getOrderStatus(id) {
    const orderId = id;
    const responseData = {};

    if (!orderId) {
        responseData.error = 'Order ID is required';
        return NextResponse.json(responseData, { status: 400 });
    }

    try {
        // Make an HTTP request to the route where getOrderDetails is implemented
        const response = await fetch(`/api/order?orderId=${orderId}`);
        const orderData = await response.json();

        if (response.ok) {
            responseData.success = true;
            responseData.orderStatus = orderData.orderDetails.status;
        } else {
            responseData.error = 'Error fetching order details';
            return NextResponse.json(responseData, { status: response.status });
        }
    } catch (error) {
        responseData.error = error.message;
        return NextResponse.json(responseData, { status: 500 });
    }

    return NextResponse.json(responseData);
}
