
import useShowroomStore from "@/store/orden.store";
import CheckoutCartItem from "./fomr-elements/CheckoutCartItem";
import { useEffect } from "react";


const YourOrderPayment = ({ cart }) => {

  const shippingPrice = sessionStorage.getItem("shippingPrice");
  const totalPrice = sessionStorage.getItem("price")

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
                 {/* Shipping */}
              <td>
                <br></br>
              </td>
              <tr className="total">
                <td className="hidden lg:table-cell	" />
                <td className="woo-next-checkout-total text-xl font-normal">
                  Envio
                </td>
                <td className="woo-next-checkout-total text-xl font-normal lg:hidden"></td>
                <td className="woo-next-checkout-total text-right">
                  {cart?.cartItems?.[0]?.currency ?? ""}
                  {shippingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") ?? 0}
                </td>
              </tr>
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
                  {cart?.cartItems?.[0]?.currency ?? ""}
                  {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") ?? 0}
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

export default YourOrderPayment;
