import useShowroomStore from "@/store/orden.store";
import CheckoutCartItem from "./fomr-elements/CheckoutCartItem";


const YourOrder = ({ cart }) => {
  const shippingCharge = useShowroomStore((state) => state.shippingCharge);

  const separadorDeMiles = (numero) => {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  };
  

  return (
    <>
      {cart ? (
        <>
          {/*Product Listing*/}
          <table className="checkout-cart table-hover mb-10 table w-full">
            <thead>
              <tr className="woo-next-cart-head-container text-left">
                <th
                  className="woo-next-cart-heading-el hidden lg:block"
                  scope="col"
                />
                <th className="woo-next-cart-heading-el" scope="col">
                  Productos
                </th>
                <th
                  className="woo-next-cart-heading-el lg:hidden"
                  scope="col"
                ></th>
                <th className="woo-next-cart-heading-el text-right" scope="col">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cart?.cartItems?.length &&
                cart.cartItems.map((item, index) => (
                  <CheckoutCartItem
                    key={item?.productId ?? index}
                    item={item}
                  />
                ))}
              {/*Total*/}
              <td>
                <br></br>
              </td>
              <tr className="total">
                <td className="hidden lg:table-cell	" />
                <td className="woo-next-checkout-total text-xl font-normal">
                  Total
                </td>
                
                <td className="woo-next-checkout-total text-xl font-normal lg:hidden"></td>
                <td className="woo-next-checkout-total text-right text-xl font-bold">
                  {separadorDeMiles(cart?.cartItems?.[0]?.currency ?? "")}
                  {separadorDeMiles(cart?.totalPrice + shippingCharge ?? "")}
                </td>
              </tr>
              {/* 				<tr>
					<td>Otro campo</td>
				</tr> */}
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default YourOrder;
