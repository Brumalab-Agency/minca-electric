"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "../menu/Menu";
import { Menumovil } from "../menu/Menumovil";
import { AppContext } from "../context/Context";
import { useContext, useState } from "react";

export const Header = () => {
  const [cart, setCart] = useContext(AppContext);
  return (
    <div className="flex items-center justify-between px-4 py-6 lg:justify-normal lg:gap-12 lg:px-[100px]">
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
      <div className="header-right flex items-center justify-between gap-4">
        <Link
          href="/testdrive"
          className="hidden text-base font-semibold lg:flex"
        >
          Prueba una MINCA
        </Link>
        <button className="mr-4 hidden h-[52px] w-[135px] rounded-[62px] bg-[#111] text-base text-white lg:block">
          <Link href="/contacto">Contacto</Link>
        </button>
        {/* Carrito de compras */}

        <Link href="/cart" className="carrito-movil relative lg:block hidden">
          <Image
            placeholder="empty"
            className="imagen-carrito"
            src="/carrito/carritomenu.svg" //<--- Movil
            width={24}
            height={24}
            alt="carrito de compras"
          />
          {cart?.totalQty > 0 && ( // Verifica si hay productos en el carrito
            <span className="absolute bottom-[13px] left-[11px] rounded-[50%] bg-red-500 px-[8px] py-[3px] text-[10px] text-white">
              {cart?.totalQty}
            </span>
          )}
        </Link>

        <div className="">
          <Link href="/cart" className="carrito-movil relative block lg:hidden">
            <Image
              placeholder="empty"
              className="imagen-carrito"
              src="/carrito/carritomenu.svg" //<--- Movil
              width={24}
              height={24}
              alt="carrito de compras"
            />
            {cart?.totalQty > 0 && ( // Verifica si hay productos en el carrito
              <span className="absolute bottom-[13px] left-[11px] rounded-[50%] bg-red-500 px-[8px] py-[3px] text-[10px] text-white">
                {cart?.totalQty}
              </span>
            )}
          </Link>
        </div>

        {/* Avatar usuario */}
        <Image
          placeholder="empty"
          className="hidden lg:block" //<--- PC
          src="/carrito/usuariomenu.svg"
          width={24}
          height={24}
          alt="Imagen representativa de caracteristicas del producto"
        />
        <Image
          placeholder="empty"
          className="block lg:hidden" //<--- Movil
          src="/carrito/usuariomenu.svg"
          width={24}
          height={24}
          alt="Imagen representativa de caracteristicas del producto"
        />
      </div>
    </div>
  );
};
