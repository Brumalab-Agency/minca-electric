"use client"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import PasoaPaso from "@/components/stepbystep/PasoaPaso";
import { sendEmail } from "@/utils/email/sendEmail";
import { getOrderStatus } from '@/utils/checkout/utilsCheckout';

const GraciasCompraPage = () => {
  // Delete this and prove the other way to send the amil from the request to webhook
  const [idOrder, setIdOrder] = useState();
  const [data, setData] = useState();
  const [products, setProducts] = useState();

  if (typeof window !== 'undefined') {
    // Check if idOrder is not already set in sessionStorage
    const storedData = sessionStorage.getItem("data")
    const storedProducts = sessionStorage.getItem("products");
    const storedIdOrder = sessionStorage.getItem("idOrder");
    if (storedIdOrder && storedIdOrder !== idOrder) {
      setIdOrder(storedIdOrder);
      setData(storedData);
      setProducts(storedProducts)
    }
  }
  
  

  useEffect(() => {
    const sendEmailFunction = async () => {
      try {
        if (idOrder) {
          const status = await getOrderStatus(idOrder); // Await the result of getOrderStatus
          if (status === "completed") {
            await sendEmail(data, products);
            sessionStorage.clear();
          }
        } else {
          console.log("No order ID available yet.");
        }
      } catch (error) {
        console.error('Error fetching order status: ', error);
      }
    };
  
    sendEmailFunction(); // Call sendEmailFunction once when the component mounts
  }, []);

  return (
    <div className="px-4 lg:px-[100px]">
      <div className="relative my-7 h-auto w-full">
          <div className="absolute left-0 top-[25%] flex h-auto w-[450px]">
            <Link href="/" className="">
              <div className="flex items-center justify-center gap-2">
                <img
                  className="hidden h-auto w-[30px] lg:block"
                  src="/arrow-narrow-left-svgrepo-com.svg"
                />
                <span className="woo-next-cart-checkout-txt font-bold">
                  Volver a la la web
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
       <PasoaPaso inactivo1="bg-slate-400" inactivo2="bg-slate-400" />
      <div className="text-center text-[64px]">
        Gracias por tu Compra
      </div>
    </div>
  );
};

export default GraciasCompraPage;
