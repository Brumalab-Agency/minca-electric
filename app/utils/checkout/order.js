/**
 * Get line items for create order
 *
 */
import { isArray, isEmpty } from 'lodash';

export const getCreateOrderLineItems = ( products ) => {
	
	if ( isEmpty( products ) || ! isArray( products ) ) {
		return [];
	}
	
	return products?.map(
		( { product_id, quantity } ) => {
			return {
				quantity,
				product_id,
				// variation_id: '', // @TODO to be added.
			};
		},
	);
};

/**
 * Get Formatted create order data.
 *
 * @param order
 * @param products
 * @return {{shipping: {country: *, city: *, phone: *, address_1: (string|*), address_2: (string|*), postcode: (string|*), last_name: (string|*), company: *, state: *, first_name: (string|*), email: *}, payment_method_title: string, line_items: (*[]|*), payment_method: string, billing: {country: *, city: *, phone: *, address_1: (string|*), address_2: (string|*), postcode: (string|*), last_name: (string|*), company: *, state: *, first_name: (string|*), email: *}}}
 */
export const getCreateOrderData = ( order, products ) => {
	// Set the billing Data to shipping, if applicable.
	const billingData = order.billingDifferentThanShipping ? order.billing : order.shipping;
	
	// Checkout data.
	return {
		shipping: {
			first_name: order?.shipping?.Nombre,
			last_name: order?.shipping?.Apellido,
			address_1: order?.shipping?.Direccion1,
			address_2: order?.shipping?.Direccion2,
			city: order?.shipping?.Ciudad,
			country: order?.shipping?.country,
			state: order?.shipping?.state,
			postcode: order?.shipping?.Codigopostal,
			email: order?.shipping?.Email,
			phone: order?.shipping?.Telefono,
			company: order?.shipping?.Empresa,
			numero_identificacion: order?.shipping?.NumeroIdentificacion,
		},
		billing: {
			first_name: billingData?.Nombre,
			last_name: billingData?.Apellido,
			numero_identificacion: billingData?.NumeroIdentificacion,
			address_1: billingData?.Direccion1,
			address_2: billingData?.Direccion2,
			city: billingData?.Ciudad,
			country: billingData?.country,
			state: billingData?.state,
			postcode: billingData?.Codigopostal,
			email: billingData?.Email,
			phone: billingData?.Telefono,
			company: billingData?.Empresa,
		},
		payment_method: order?.paymentMethod,
		payment_method_title: order?.paymentMethod,
		line_items: getCreateOrderLineItems( products ),
	};
};

/**
 * Create order.
 * @returns {Promise<{orderId: null, error: string}>}
 */
export const createTheOrder = async ( orderData, setOrderFailedError, previousRequestError ) => {
	let response = {
		orderId: null,
		total: '',
		currency: '',
		error: '',
	};
	
	// Don't proceed if previous request has error.
	if ( previousRequestError ) {
		response.error = previousRequestError;
		return response;
	}
	
	setOrderFailedError( '' );
	
	try {
		const request = await fetch( '/api/create-order', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( orderData ),
		} );
		
		const result = await request.json();
		if ( result.error ) {
			response.error = result.error;
			setOrderFailedError( 'Algo salió mal. Error al crear el pedido. Inténtalo de nuevo' );
		}
		response.orderId = result?.orderId ?? '';
		response.total = result.total ?? '';
		response.currency = result.currency ?? '';
		response.paymentUrl = result.paymentUrl ?? '';
		
	} catch ( error ) {
		// @TODO to be handled later.
		console.warn( 'Handle create order error', error?.message );
	}
	
	return response;
};