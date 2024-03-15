import Image from 'next/image';
import { isEmpty } from 'lodash';

const CheckoutCartItem = ( { item } ) => {
	
	const productImg = item?.data?.images?.[0] ?? '';
	
	return (
		<tr className="woo-next-cart-item" key={ item?.productId ?? '' }>
			<td className="woo-next-cart-element">
				<figure >
					<Image
						width="150"
						height="150"
						alt={productImg?.name}
						src={productImg?.src} // use normal <img> attributes as props
					/>
				</figure>
				<td className="woo-next-cart-element lg:hidden text-[10px]">{ item?.data?.name ?? '' }</td>
			</td>
			<td className="woo-next-cart-element hidden lg:table-cell">{ item?.data?.name ?? '' }</td>
			<td className="woo-next-cart-element sub-total lg:text-left lg:hidden"></td>
			<td className="woo-next-cart-element sub-total text-right">{item?.currency ?? ''}{item?.line_subtotal ?? ''}</td>
		</tr>
	)
};

export default CheckoutCartItem;