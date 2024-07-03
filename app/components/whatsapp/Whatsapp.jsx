"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Whatsapp = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const generateWhatsAppLink = () => {
    const message = encodeURIComponent("Hola, quiero más información");
    return `https://wa.me/+573222102466?text=${message}`;
  };

  // Define the handler function
  const handleClick = (url) => {
    return (e) => {
      e.preventDefault(); // Prevent default link behavior
      gtag_report_conversion(url);
    };
  };

  const whatsappLink = generateWhatsAppLink();

  return (
    <div
      className={`Whatsapp w-full h-auto flex justify-end items-center px-2 lg:px-10 relative z-50 ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <Link href={whatsappLink} passHref target="_blank">
        <Image
          alt="scooter"
          className="rounded-[10px] fixed lg:bottom-6 bottom-2 lg:right-6 right-4 lg:w-[50px] 2xl:w-[70px] w-[40px] h-auto transition-opacity duration-1000"
          src="/redesSociales/btn_watsapp_rojo.svg"
          width={100}
          height={100}
          onClick={handleClick(whatsappLink)}
        />
      </Link>
  </div>
  );
};

export default Whatsapp;
