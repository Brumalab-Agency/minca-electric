import Image from "next/image";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { WOOCOMMERCE_COUNTRIES_ENDPOINT } from "@/utils/cart/constants/endpoint";
import axios from "axios";
import Link from "next/link";

export const Checkout = async () => {
  const { data: countries } = await axios.get(WOOCOMMERCE_COUNTRIES_ENDPOINT);

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
