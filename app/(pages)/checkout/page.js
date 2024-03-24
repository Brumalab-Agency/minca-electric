import Image from "next/image";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { WOOCOMMERCE_COUNTRIES_ENDPOINT } from "@/utils/cart/constants/endpoint";
import axios from "axios";
import Link from "next/link";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export const Checkout = async () => {
  const { data: countries } = await axios.get(WOOCOMMERCE_COUNTRIES_ENDPOINT);
  initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
    locale: "es-CO",
  });
  return (
    <div className="px-[48px] pb-[100px]">
      <div className="my-10">
        <Link href="/cart">
          <Image
                  placeholder="empty"
                  alt="logo minca"
                  className="Image log MINCA"
                  src="/logo.png"
                  width={390}
                  height={400}
                />
        </Link>
      </div>
      <CheckoutForm countriesData={countries} />
    </div>
  );
};

export default Checkout;
