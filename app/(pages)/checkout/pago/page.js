"use client";
import Image from "next/image";
import YourOrder from "@/components/checkout/YourOrder";
import { AppContext } from "@/components/context/Context";
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useState } from "react";
import cx from "classnames";
import BtnMercadoPago from "../../../components/mercadopago/BtnMercadoPago";
import Link from "next/link";
import { clearCart } from "@/utils/cart/cartUtils";
import PasoaPaso from "@/components/stepbystep/PasoaPaso";
import { Header } from "@/components/home/Header";
import MarqueeCheckout from "@/components/home/MarqueeCheckout";
import { handleOtherPaymentMethodCheckout } from "@/utils/checkout/utilsCheckout";
import { manrope } from "@/ui/fonts";

const PagoMercadoPagoPage = () => {
  const [cart, setCart] = useContext(AppContext);
  const [temporalCarrito, setTemporalCarrito] = useState(AppContext);
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  const [requestError, setRequestError] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const idOrder = searchParams.get('idOrder');

 

  const limpiarLocalStorage = async () => {
    const cartCleared = await clearCart(setCart, () => {});

    setIsOrderProcessing(false);

    if (!cartCleared?.error) {
    } else {
      console.error("Error al limpiar el carrito:", cartCleared.error);
    }
  };

  const createOrderId = async() => {
    const createdOrderData = await handleOtherPaymentMethodCheckout(
      input,
      cart?.cartItems,
      setRequestError,
      setCart,
      setIsOrderProcessing,
      setCreatedOrderData,
    );
    setIdOrder(createdOrderData.orderId);
  }

  

  return (
      <div>
        <MarqueeCheckout />
            <div className="PaginaPago px-4 lg:px-[100px]">
        <div className="relative my-7 h-auto w-full">
          <div className="absolute left-0 top-[25%] flex h-auto w-[450px]">
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
          <div className="woo-next-place-order-btn-wrap my-10 pr-14">
          <h2 className={` ${manrope.className} font-bold text-[24px] my-2`}>Metodo de pago</h2>
          <p className={` ${manrope.className} font-normal text-[20px] mb-5`}>Todas las transacciones son seguras y están encriptadas.</p>
          <hr className="border-[1px] border-[#111] stroke-black"></hr>
            <button onClick={limpiarLocalStorage}>
              <BtnMercadoPago
                preciopagar={
                  cart?.totalPrice
                    ? cart?.totalPrice
                    : temporalCarrito?.totalPrice
                }
                idOrder={idOrder}
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
