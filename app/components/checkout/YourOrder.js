import CheckoutCartItem from "./fomr-elements/CheckoutCartItem";
import { useEffect, useState } from "react";

const YourOrder = ({ cart, department, showroom }) => {
  // accessories list
  // Change it for a reequest with the scotters name////////
  const scooters = [
    "Scooter Eléctrico Minca 350W",
    "Scooter Eléctrico MINCA‎ 500W‎",
    "Scooter Eléctrico MINCA‎ 800W‎",
    "Scooter Eléctrico MINCA 1600W‎"
  ];
  const [shippingAmount, setShippingAmount] = useState(0);
  const [definitiveTotal, setTotal] = useState(cart.totalPrice);
  const difference = localStorage.getItem("difference");
  const discountRate = localStorage.getItem("couponRate");
  useEffect(() => {
    const applyShippingAmount = () => {
      let total = cart.totalPrice;
      let newShippingAmount = 0;
      if (!department || showroom) {
        newShippingAmount = 0;
      }
      else if (cart.cartItems.some(item => scooters.includes(item.data.name))) {
        if (department === "Bogotá") {
          newShippingAmount = 30000;
        } else {
          newShippingAmount = 90000;
        }
      } else if (department === "Bogotá") {
        newShippingAmount = 10000;
      } else {
        newShippingAmount = 30000;
      }
      total += newShippingAmount;
      setShippingAmount(newShippingAmount);
      setTotal(total);
      department = ""
    };

    applyShippingAmount();
  }, [cart, showroom, department, definitiveTotal]); // Add department as a dependency

  sessionStorage.setItem("price", definitiveTotal);
  sessionStorage.setItem("shippingPrice", shippingAmount);
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
                  {cart?.cartItems?.[0]?.currency ?? "$"}
                  {shippingAmount !== undefined && shippingAmount !== null
                    ? shippingAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    : 0}
                </td>
              </tr>
              {/* Discount rate */}
              <td>
                <br></br>
              </td>
              <tr className="total">
                <td className="hidden lg:table-cell	" />
                <td className="woo-next-checkout-total text-xl font-normal">
                  Descuento (-{parseInt(discountRate, 10) || 0}%)
                </td>
                <td className="woo-next-checkout-total text-xl font-normal lg:hidden"></td>
                <td className="woo-next-checkout-total text-right">
                  -{cart?.cartItems?.[0]?.currency ?? "$"}
                  {difference !== undefined && difference !== null
                    ? difference.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    : 0}
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
                  {definitiveTotal !== undefined && definitiveTotal !== null
                    ? definitiveTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    : 0}
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
