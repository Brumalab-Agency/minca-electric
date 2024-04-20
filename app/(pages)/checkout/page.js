import Image from "next/image";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { WOOCOMMERCE_COUNTRIES_ENDPOINT } from "@/utils/cart/constants/endpoint";
import axios from "axios";
import Link from "next/link";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import PasoaPaso from "@/components/stepbystep/PasoaPaso";
import MarqueeCheckout from "@/components/home/MarqueeCheckout";

export const Checkout = async () => {
  const { data: countries } = await axios.get(WOOCOMMERCE_COUNTRIES_ENDPOINT);
  initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
    locale: "es-CO",
  });
  return (
    <div className="CheckOutPage">
      <MarqueeCheckout/>
      <div className="h-auto lg:w-full relative my-7">
      <div className="flex h-auto w-full lg:w-[450px] px-[100px] absolute left-0 top-[25%]">
        <Link href="/cart" className="">
          <div className="flex items-center justify-center gap-2">
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
          className="Image log MINCA m-auto hidden lg:block"
          src="/logo.png"
          width={300}
          height={260}
        />
      </div>
      <div className="LogoMovil block lg:hidden">
      <Image
          placeholder="empty"
          alt="logo minca"
          className="Image log MINCA m-auto  mt-[70px] mb-[30px]"
          src="/logo.png"
          width={300}
          height={260}
        />
      </div>
      <PasoaPaso inactivo3="bg-slate-400" inactivo2="bg-slate-400" />
      
      <CheckoutForm countriesData={countries} />
      <Footer />
    </div>
  );
};

export default Checkout;