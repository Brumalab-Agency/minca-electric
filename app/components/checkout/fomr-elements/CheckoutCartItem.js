import Image from 'next/image';
import { isEmpty } from 'lodash';

const CheckoutCartItem = ( { item } ) => {
	
	const productImg = item?.data?.images?.[0] ?? '';

	const separadorDeMiles = (numero) => {
		let partesNumero = numero.toString().split(".");
		partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		return partesNumero.join(".");
	  };
	
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
			<td className="woo-next-cart-element sub-total text-right">{separadorDeMiles(item?.currency ?? '')}{separadorDeMiles(item?.line_subtotal ?? '')}</td>
		</tr>
	)
};

export default CheckoutCartItem;