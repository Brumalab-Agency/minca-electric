"use client";

import { useEffect, useContext, useState } from "react";
import { AppContext } from "../context/Context";
import Link from "next/link";
import CartItem from "./CarItem";
import { clearCart } from "@/utils/cart/cartUtils";
import { manrope, ubuntu } from "@/ui/fonts";
import { applyDiscount, getDiscountRate } from "@/utils/coupons/applyDiscount";

const CarItemsContainer = () => {
  const [cart, setCart] = useContext(AppContext);
  const { cartItems, totalPrice, totalQty } = cart || {};
  const [isClearCartProcessing, setClearCartProcessing] = useState(false);
  const [couponError, setCouponError] = useState(null);
  const [uses, setUses] = useState(0);
  const [priceWithoutDiscount, setPriceWithoutDiscount] = useState(totalPrice);
  const [couponRate, setCouponRate] = useState("");
  const difference = priceWithoutDiscount - totalPrice || undefined;


  // Retrieve coupon usage state from localStorage
  useEffect(() => {
    //cartItems.data.name = cartItems.data.name.replace(/ Azul,| Negro,/, '');
    if (!isClearCartProcessing && cartItems) {
      const updatedCartItems = cartItems.map(item => {
        return {
          ...item,
          data: {
            ...item.data,
            name: item.data.name.replace(' Azul,', '')
          }
        };
      });
      
      setCart(prevCart => ({
        ...prevCart,
        cartItems: updatedCartItems
      }));
    }
    const storedUses = localStorage.getItem("couponUses");
    if (storedUses) {
      setUses(parseInt(storedUses, 10));
    }
  }, [cartItems, setCart]);

  const handleCouponsDiscount = async () => {
    const code = document.getElementById("code").value;
    try {
      if (uses === 0) {
        /* Calculo descuento  */
        const discountRate = await getDiscountRate(code);
        setCouponRate(discountRate);
        setPriceWithoutDiscount(totalPrice);
        const newCart = await applyDiscount(code, cart);
        if (newCart.cartItems) {
          setCart(newCart);
          setUses(1);
          localStorage.setItem("couponUses", 1); // Save coupon usage state to localStorage
          setCouponError("Cupon aplicado");
          localStorage.setItem("couponRate", discountRate);
          localStorage.setItem("difference", priceWithoutDiscount - totalPrice);
        } else {
          setCouponError("Cupon solo valido para accesorios");
        }
      } else {
        setCouponError("Cupon ya utlizado");
      }
    } catch (error) {
      setCouponError("Código de cupón no válido");
    }
  };

  // Clear the cart and reset coupon usage state
  const handleClearCart = async (event) => {
    event.stopPropagation();

    if (isClearCartProcessing) {
      return;
    }

    await clearCart(setCart, setClearCartProcessing);
    setUses(0); // Reset the coupon usage state
    localStorage.removeItem("couponUses"); // Remove coupon usage state from localStorage
  };

  const separadorDeMiles = (numero) => {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  };

  return (
    <div
      className={`${manrope.className} CarItemsContainer p-4 lg:px-[100px] lg:pb-[100px]`}
    >
      <h2 className="mb-[20px] text-[24px] font-semibold lg:text-[40px] ">
        Resumen de compra
      </h2>
      <div className="content-wrap-cart ">
        {cart ? (
          <div className="grid grid-cols-1 gap-4  lg:grid-cols-8">
            {/*Cart Items*/}
            {
              <div className="woo-next-cart-table mb-md-0 mb-5 w-full rounded-[20px] border border-black/10 p-5 lg:col-span-5">
                {cartItems.length &&
                  cartItems.map((item) => (
                    <div>
                      <CartItem
                        key={item.product_id}
                        item={item}
                        products={cartItems}
                        setCart={setCart}
                      />
                    </div>
                  ))}
              </div>
            }

            {/*Cart Total*/}
            <div
              className={` woo-next-cart-total-container border-1 rounded-[20px] border border-black/10 p-5 lg:col-span-3 lg:min-w-max `}
            >
              <h2
                className={`${manrope.className} text-base font-bold lg:text-[24px]`}
              >
                Carrito Total
              </h2>
              {/* subtotal */}
              <div className="mb-4 mt-4 flex items-center justify-between">
                <p
                  className={`${ubuntu.className} col-span-2 mb-0 p-2 text-base text-black/60 lg:text-[20px]`}
                >
                  Subtotal
                </p>
                <p
                  className={`${manrope.className} col-span-1 mb-0 p-2 text-base font-bold lg:text-[20px]`}
                >
                  {cartItems?.[0]?.currency ?? ""}
                  {separadorDeMiles(
                    uses === 1 ? priceWithoutDiscount : totalPrice,
                  )}
                </p>
              </div>
              {/* descuento */}
              {uses !== 0 && priceWithoutDiscount - totalPrice !== 0 && (
                <div className="mb-4 mt-4 flex items-center justify-between">
                  <p
                    className={`${ubuntu.className} col-span-2 mb-0 p-2 text-base text-black/60 lg:text-[20px]`}
                  >
                    Descuento (-{parseInt(couponRate, 10)}%)
                  </p>
                  <p
                    className={`${manrope.className} col-span-1 mb-0 p-2 text-base font-bold text-[#F33] lg:text-[20px]`}
                  >
                    - {cartItems?.[0]?.currency ?? ""}
                    {separadorDeMiles(difference)}
                    {localStorage.setItem(
                      "difference",
                      parseInt(difference, 10),
                    )}
                  </p>
                </div>
              )}
              {/* Total */}
              <div className="mb-4 mt-4 flex items-center justify-between">
                <p
                  className={`${ubuntu.className} col-span-2 mb-0 p-2 text-base text-black/60 lg:text-[20px]`}
                >
                  Total
                </p>
                <p
                  className={`${manrope.className} col-span-1 mb-0 p-2 text-[20px] font-bold lg:text-[24px]`}
                >
                  {cartItems?.[0]?.currency ?? ""}
                  {separadorDeMiles(totalPrice)}
                </p>
              </div>
              {/* *** */}
              <div className="flex flex-col justify-between">
                {/* Coupon Error */}
                {couponError && (
                  <p className="text-sm text-red-500">{couponError}</p>
                )}
                {/* Cupon */}
                <div className="cupon my-[24px] flex items-center justify-between gap-4 ">
                  <div className="relative flex h-auto w-full grow items-center">
                    <img
                      className="absolute left-4 h-auto w-[15px] lg:left-[4%] lg:top-[25%] lg:w-[24px]"
                      src="/carrito/ticket-descuento.svg"
                      alt="arrow-right"
                    />
                    <input
                      type="text"
                      id="code"
                      placeholder="Añadir código de promoción"
                      className="h-[47px] w-full rounded-[62px] border-none bg-[#F0F0F0] px-[16px] py-[12px] pl-[40px] text-[10px] focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm lg:h-[50px]"
                    />
                  </div>

                  <button
                    className="h-auto w-[119px] rounded-[62px] bg-[#111] px-[16px] py-[12px] text-[14px] text-white lg:text-base"
                    onClick={handleCouponsDiscount}
                  >
                    Aplicar
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  {/*Clear entire cart*/}
                  <div className="clear-cart">
                    <button
                      className="mb-2 mr-2 h-[48px] rounded-[62px] border border-gray-300 bg-white px-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-600 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5 "
                      onClick={(event) => handleClearCart(event)}
                      disabled={isClearCartProcessing}
                    >
                      <span className="woo-next-cart">
                        {!isClearCartProcessing
                          ? "Limpiar carrito"
                          : "Limpiando carrito..."}
                      </span>
                    </button>
                  </div>
                  {/*Checkout*/}
                  <Link href="/checkout" className="grow">
                    <button className="mb-2 mr-2 h-[48px] w-full rounded-[62px] bg-[#111] text-center text-sm font-medium text-white duration-500 hover:bg-black/70 focus:text-white focus:ring-4 lg:px-5 lg:py-2.5">
                      <div className="flex items-center justify-center gap-2">
                        <span className="woo-next-cart-checkout-txt">
                          Iniciar proceso de pago
                        </span>
                        <img
                          className="hidden lg:block"
                          src="/carrito/flecha-btn-carrito.png"
                        />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="my-14">
            <h2>No hay articulos en el carrito</h2>
            <Link href="/">
              <button className="mb-2 mr-2 mt-6 h-[48px] rounded-[62px] bg-black px-5 py-2.5 text-center text-sm font-medium text-white duration-500 hover:bg-black/70">
                <span className="woo-next-cart-checkout-txt">
                  Volver al inicio
                </span>
                <i className="fas fa-long-arrow-alt-right" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarItemsContainer;
