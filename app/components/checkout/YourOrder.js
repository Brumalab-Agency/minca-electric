import CheckoutCartItem from "./fomr-elements/CheckoutCartItem";

const YourOrder = ( { cart } ) => {
	
	return (
		<>
			{ cart ? (
				<>
					{/*Product Listing*/}
					<table className="checkout-cart table table-hover w-full mb-10">
						<thead>
						<tr className="woo-next-cart-head-container text-left">
							<th className="woo-next-cart-heading-el hidden lg:block" scope="col"/>
							<th className="woo-next-cart-heading-el" scope="col">Productos</th>
							<th className="woo-next-cart-heading-el lg:hidden" scope="col"></th>
							<th className="woo-next-cart-heading-el text-right" scope="col">Total</th>
						</tr>
						</thead>
						<tbody>
						{ cart?.cartItems?.length && (
							cart.cartItems.map( ( item, index ) => (
								<CheckoutCartItem key={ item?.productId ?? index } item={ item } />
							) )
						) }
						{/*Total*/}
						<td><br></br></td>
						<tr className="total">
							<td className="hidden lg:table-cell	"/>
							<td className="woo-next-checkout-total font-normal text-xl">Total</td>
							<td className="woo-next-checkout-total font-normal text-xl lg:hidden"></td>
							<td className="woo-next-checkout-total font-bold text-xl text-right">{ cart?.cartItems?.[ 0 ]?.currency ?? '' }{ cart?.totalPrice ?? '' }</td>
						</tr>
						</tbody>
					</table>
				</>
			) : '' }
		</>
	)
};

export default YourOrder;