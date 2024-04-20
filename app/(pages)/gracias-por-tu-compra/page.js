"use client"
import Link from "next/link"
import Image from "next/image"
import PasoaPaso from "@/components/stepbystep/PasoaPaso";
import { useEffect, useState } from "react";
import { sendEmail } from "@/utils/email/sendEmail";
import { getOrderStatus } from '@/utils/checkout/utilsCheckout';
import { useSearchParams } from 'next/navigation';

const GraciasCompraPage = () => {
  const [orderStatus, setOrderStatus] = useState();
  const searchParams = useSearchParams();
  const idOrder = searchParams.get('idOrder');
  console.log(idOrder)

  useEffect(() => {
    // Fetch the order status when the component mounts
    const fetchOrderStatus = async () => {
      try {
        // Assuming orderId is retrieved from the URL or passed as a prop
        const response = await getOrderStatus(idOrder);
        setOrderStatus(response.orderStatus);
      } catch (error) {
        console.error('Error fetching order status: ', error);
      }
    };

    fetchOrderStatus();
  }, [idOrder]);

  useEffect(() => {
    // If the order status is "completed", send the email
    if (orderStatus === 'Completado' && idOrder) {
      sendEmail(idOrder);
    }
  }, [orderStatus, idOrder]);
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
