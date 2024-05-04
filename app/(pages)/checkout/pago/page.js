"use client";
import Image from "next/image";
import YourOrder from "@/components/checkout/YourOrder";
import { AppContext } from "@/components/context/Context";
import { useRouter, useSearchParams } from "next/navigation";
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
import CardMercadoPago from "@/components/pagoPage/CardMercadoPago";

const PagoMercadoPagoPage = () => {
  const [cart, setCart] = useContext(AppContext);
  const [temporalCarrito, setTemporalCarrito] = useState(AppContext);
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  const [requestError, setRequestError] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const idOrder = searchParams.get("idOrder");

  const limpiarLocalStorage = async () => {
    const cartCleared = await clearCart(setCart, () => {});

    setIsOrderProcessing(false);

    if (!cartCleared?.error) {
    } else {
      console.error("Error al limpiar el carrito:", cartCleared.error);
    }
  };

  const createOrderId = async () => {
    const createdOrderData = await handleOtherPaymentMethodCheckout(
      input,
      cart?.cartItems,
      setRequestError,
      setCart,
      setIsOrderProcessing,
      setCreatedOrderData,
    );
    setIdOrder(createdOrderData.orderId);
  };

  return (
    <div>
      <MarqueeCheckout />
      <div className="PaginaPago px-4 lg:px-[100px]">
        <div className="relative h-auto w-full lg:my-7">
          <div className="left-0 top-[25%] mt-6 flex w-full h-10 lg:absolute lg:mt-0 lg:h-auto lg:w-[450px]">
            <Link href="/cart" className="">
              <div className="flex items-center justify-center gap-2 ">
                <img
                  className="h-auto w-[30px] lg:block"
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
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Btn mercado pago */}
          <div className="woo-next-place-order-btn-wrap my-10 lg:pr-14">
            <h2 className={` ${manrope.className} my-2 text-[24px] font-bold`}>
              Metodo de pago
            </h2>
            <p className={` ${manrope.className} mb-5 text-[20px] font-normal`}>
              Todas las transacciones son seguras y están encriptadas.
            </p>
            <hr className="mb-10 border-[1px] border-[#111] stroke-black"></hr>
            <div>
              <CardMercadoPago />
              <p
                className={` ${manrope.className} my-9 h-auto text-base font-medium lg:w-[484px]`}
              >
                Luego de hacer clic en “Finalizar el pedido”, serás redirigido a
                Checkout Mercado Pago para completar tu compra de forma segura.
              </p>
            </div>
            <button className="w-full h-auto lg:w-[300px]" onClick={limpiarLocalStorage}>
              <BtnMercadoPago
                preciopagar={
                  cart?.totalPrice
                    ? cart?.totalPrice
                    : temporalCarrito?.totalPrice
                }
                idOrder={idOrder}
              />
            </button>
            <div className="lg:mt-36 mt-6">
              <p>Tipos de pago admitidos:</p>
              <img src="/mercado pago .png" />
            </div>
          </div>
          {/*  */}
          <div className="your-orders h-fit w-full rounded-md bg-[#F0F1EB] p-8 order-first lg:order-none">
            {/*	Order*/}
            <h2 className="mb-4 text-xl font-medium">Resumen del pedido</h2>
            <hr className="mb-3"></hr>

            <YourOrder cart={cart ? cart : temporalCarrito}/>
            {/*Metodo de envio*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagoMercadoPagoPage;
