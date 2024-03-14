"use client"
import Image from "next/image";
import Link from "next/link";
import { Menu } from "../menu/Menu";
import { Menumovil } from "../menu/Menumovil";
import { AppContext } from "../context/Context";
import { useContext, useState } from "react";

export const Header = () => {
  const [cart, setCart] = useContext(AppContext);
  return (
    <div className="flex items-center justify-between px-4 py-6 lg:justify-normal lg:gap-12 lg:px-12">
      <div className="header-left flex h-auto w-[158px] items-center justify-between lg:flex-grow-0">
        <Menumovil />
        <Link href="/">
          <Image
            placeholder="empty"
            src="/logo.png"
            width={117}
            height={19}
            alt="Imagen representativa de caracteristicas del producto"
          />
        </Link>
      </div>
      <div className="hidden flex-grow lg:flex">
        <Menu />
      </div>
      <div className="header-right items-center justify-between gap-4 lg:flex">
        <Link
          href="/testdrive"
          className="hidden text-base font-semibold lg:flex"
        >
          Prueba una MINCA
        </Link>
        <button className="mr-4 hidden h-[52px] w-[135px] rounded-[62px] bg-[#111] text-base text-white lg:block">
          <Link href="/contacto">Contacto</Link>
        </button>
        <Image
          placeholder="empty"
          className="lg:hidden"
          src="/icon_ecommerce.png"
          width={96}
          height={24}
          alt="Imagen representativa de caracteristicas del producto"
        />
        <Image
          placeholder="empty"
          className="hidden lg:block" 
          src="/MenuPC/icon_ecommerce_pc.png"
          width={62}
          height={24}
          alt="Imagen representativa de caracteristicas del producto"
        />
        <Link href="/cart">
          <span className="ml-1">
            Bag{cart?.totalQty ? `(${cart?.totalQty})` : null}
          </span>
        </Link>
      </div>
    </div>
  );
};
