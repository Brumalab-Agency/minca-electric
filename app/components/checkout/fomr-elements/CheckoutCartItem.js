import Image from "next/image";
import { isEmpty } from "lodash";

const CheckoutCartItem = ({ item }) => {

  const productImg = item?.data?.images?.[0] ?? "";

  const separadorDeMiles = (numero) => {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  };

  return (
    <tr className="woo-next-cart-item" key={item?.productId ?? ""}>
      <td className="woo-next-cart-element">
        <figure>
          <Image
            width="150"
            height="150"
            alt={productImg?.name}
            src={productImg?.src}
          />
        </figure>
        <td className="woo-next-cart-element text-[10px] lg:hidden">
          {item?.data?.name ?? ""}
        </td>
      </td>
      <td className="woo-next-cart-element hidden lg:table-cell">
        {item?.data?.name ?? ""}
      </td>
      <td className="woo-next-cart-element sub-total lg:hidden lg:text-left"></td>
      <td className="woo-next-cart-element sub-total text-right relative w-[250px]">
        {separadorDeMiles(item?.currency ?? "")}
        {separadorDeMiles(item?.line_subtotal ?? "")}
        <div className="absolute right-0">
			{item?.product_id === 952 ? (
			  <small className="text-[8px]">
				(incluye $190.000 Impuesto 5% estimado para Colombia)
			  </small>
			) : item?.product_id === 435 ? (
			  <small className="text-[8px]">
				(incluye $214.286 Impuesto 5% estimado para Colombia)
			  </small>
			) : null}
		</div>
      </td>
    </tr>
  );
};

export default CheckoutCartItem;
