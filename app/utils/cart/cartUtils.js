import { getSession, storeSession } from '../session';
import { getApiCartConfig } from '../api';
import axios from 'axios';
import { CART_ENDPOINT } from './constants/endpoint';
import { isEmpty, isArray } from 'lodash';


export const addToCart = ( productId, qty = 1, setCart, setIsAddedToCart, setLoading ) => {
	const storedSession = getSession();
	const addOrViewCartConfig = getApiCartConfig();
	
	setLoading(true);
	
	axios.post( CART_ENDPOINT, {
			product_id: productId,
			quantity: qty,
		},
		addOrViewCartConfig,
	)
		.then( ( res ) => {
			
			if ( isEmpty( storedSession ) ) {
				storeSession( res?.headers?.[ 'x-wc-session' ] );
			}
			setIsAddedToCart(true);
			setLoading(false);
			viewCart( setCart );
		} )
		.catch( err => {
			console.log( 'err', err );
		} );
};

/**
 * View Cart Request Handler
 *
 */

export const viewCart = ( setCart, setProcessing = () => {} ) => {
	
	const addOrViewCartConfig = getApiCartConfig();
	
	axios.get( CART_ENDPOINT, addOrViewCartConfig )
		.then( ( res ) => {
			const formattedCartData = getFormattedCartData( res?.data ?? [] )
			setCart( formattedCartData );
			setProcessing(false);
		} )
		.catch( err => {
			console.log( 'err', err );
			setProcessing(false);
		} );
};


/**
 * Update Cart Request Handler
 */

 export const updateCart = ( cartKey, qty = 1, setCart, setUpdatingProduct ) => {
	
	const addOrViewCartConfig = getApiCartConfig();
	
	setUpdatingProduct(true);
	
	axios.put( `${CART_ENDPOINT}${cartKey}`, {
		quantity: qty,
	}, addOrViewCartConfig )
		.then( ( res ) => {
			viewCart( setCart, setUpdatingProduct );
		} )
		.catch( err => {
			console.log( 'err', err );
			setUpdatingProduct(false);
		} );
};


export const deleteCartItem = ( cartKey, setCart, setRemovingProduct ) => {
	
	const addOrViewCartConfig = getApiCartConfig();
	
	setRemovingProduct(true);
	
	axios.delete( `${CART_ENDPOINT}${cartKey}`, addOrViewCartConfig )
		.then( ( res ) => {
			viewCart( setCart, setRemovingProduct );
		} )
		.catch( err => {
			console.log( 'err', err );
			setRemovingProduct(false);
		} );
}; 

/**
 * Clear Cart Request Handler
 */

export const clearCart = async ( setCart, setClearCartProcessing ) => {
	
	setClearCartProcessing(true);
	
	const addOrViewCartConfig = getApiCartConfig();
	
	try {
		const response = await axios.delete( CART_ENDPOINT, addOrViewCartConfig );
		viewCart( setCart, setClearCartProcessing );
	} catch ( err ) {
		console.log( 'err', err );
		setClearCartProcessing(false);
	}
};


/**
 * Get Formatted Cart Data.
 */

const getFormattedCartData = ( cartData ) => {
	if ( ! cartData.length ) {
		return null;
	}
	const cartTotal = calculateCartQtyAndPrice( cartData || [] );
	return {
		cartItems: cartData || [],
		...cartTotal,
	};
};


/**
 * Calculate Cart Qty And Price.
 */

const calculateCartQtyAndPrice = ( cartItems ) => {
	const qtyAndPrice = {
		totalQty: 0,
		totalPrice: 0,
	}
	
	if ( !isArray(cartItems) || !cartItems?.length ) {
		return qtyAndPrice;
	}
	
	cartItems.forEach( (item, index) => {
		qtyAndPrice.totalQty += item?.quantity ?? 0;
		qtyAndPrice.totalPrice += item?.line_total ?? 0;
	} )
	
	return qtyAndPrice;
}