"use client";
import Image from "next/image";
import YourOrder from "@/components/checkout/YourOrder";
import { AppContext } from "@/components/context/Context";
import { manrope } from "@/ui/fonts";
import { useContext, useState } from "react";
import cx from "classnames";
import BtnMercadoPago from "../../../components/mercadopago/BtnMercadoPago";
import Link from "next/link";
import { clearCart } from "@/utils/cart/cartUtils";
import PasoaPaso from "@/components/stepbystep/PasoaPaso";
import { Header } from "@/components/home/Header";
import MarqueeCheckout from "@/components/home/MarqueeCheckout";

const PagoMercadoPagoPage = () => {
  const [cart, setCart] = useContext(AppContext);
  const [temporalCarrito, setTemporalCarrito] = useState(AppContext);
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  /* const [idOrder, setIdOrder] = useState(null);
  const [requestError, setRequestError] = useState(null);
 */

  const limpiarLocalStorage = async () => {
    const cartCleared = await clearCart(setCart, () => {});

    setIsOrderProcessing(false);

    if (!cartCleared?.error) {
    } else {
      console.error("Error al limpiar el carrito:", cartCleared.error);
    }
  };

  return (
      <div>
        <MarqueeCheckout />
            <div className="PaginaPago px-4 lg:px-[100px]">
        <div className="relative my-7 h-auto w-full">
          <div className="absolute left-0 top-[25%] flex h-auto w-[450px] px-[100px]">
            <Link href="/cart" className="">
              <div className="flex items-center justify-center gap-2">
                <img
                  className="hidden h-auto w-[30px] lg:block"
                  src="/arrow-narrow-left-svgrepo-com.svg"
                />
                <span className="woo-next-cart-checkout-txt font-bold">
                  Volver a la tienda
                </span>
              </div>
            </Link>
          </div>
          <Image
            placeholder="empty"
            alt="logo minca"
            className="Image log MINCA m-auto"
            src="/logo.png"
            width={300}
            height={260}
          />
        </div>
        <PasoaPaso inactivo1="bg-slate-400" inactivo3="bg-slate-400" />
        {/* Order & Payments*/}
        <div className="grid grid-cols-2">
          {/* Btn mercado pago */}
          <div className="woo-next-place-order-btn-wrap my-10">
          <h2 className="mb-4 text-xl font-medium">Metodo de pago</h2>
            <button onClick={limpiarLocalStorage}>
              <BtnMercadoPago
                preciopagar={
                  cart?.totalPrice
                    ? cart?.totalPrice
                    : temporalCarrito?.totalPrice
                }
              />
            </button>
          </div>
          {/*  */}
          <div className="your-orders h-fit w-full rounded-md bg-[#F0F1EB] p-8">
              {/*	Order*/}
              <h2 className="mb-4 text-xl font-medium">Resumen del pedido</h2>
              <hr className="mb-3"></hr>

              <YourOrder cart={cart ? cart : temporalCarrito} />
              {/*Metodo de envio*/}
              
            </div>
        </div>
            </div>
      </div>
  );
};

export default PagoMercadoPagoPage;
