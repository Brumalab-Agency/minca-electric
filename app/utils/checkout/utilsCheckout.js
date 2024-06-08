import { isArray, isEmpty } from 'lodash';
import { createTheOrder, getCreateOrderData } from './order';
import { clearCart } from '../cart/cartUtils';
import axios from 'axios';
import { WOOCOMMERCE_STATES_ENDPOINT } from '../cart/constants/endpoint';
import { NextResponse } from 'next/server';
import { APP_ENDPOINT, AUTH_ENDPOINT } from './constants/endpoints';

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

// When you're done with restructure of the sending email delete this
export async function getOrderDetails(orderId) {
    const url = `/api/get-order?orderId=${orderId}`;

    try {
        //const response = await axios.get(url);
		const response = await axios.get(url)

        if (response.status !== 200) {
            return
        }

        return response.data.orderDetails;
    } catch (error) {
        return
    }
}

export async function getOrderStatus(id) {
    const orderId = id;
	let responseData = "";

    if (!orderId) {
        responseData.error = 'Order ID is required';
        return NextResponse.json(responseData, { status: 400 });
    }

    try {
        // Make an HTTP request to the route where getOrderDetails is implemented
        const response = await getOrderDetails(orderId);
		responseData = response.status;
    } catch (error) {
        return
    }

    return responseData;
}

export async function getAccessToken(clientId, clientSecret) {
    const response = await fetch(AUTH_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
			audience: "https://api.staging.addi.com",
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'client_credentials'
        })
    });

    const data = await response.json();
    return data.access_token;
}