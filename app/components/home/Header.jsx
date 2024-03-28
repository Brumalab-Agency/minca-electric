"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "../menu/Menu";
import { Menumovil } from "../menu/Menumovil";
import { AppContext } from "../context/Context";
import { useContext, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";

export const Header = () => {
  const [cart, setCart] = useContext(AppContext);
  const lenis = useLenis(({ scroll }) => {});

  const bgMenu = useRef(null);
  const menu = useRef(null);
  const imgLogo = useRef(null);
  const imgCarrito = useRef(null);
  const whiteText = useRef(null);
  const button = useRef(null);
  const navegacion = useRef(null);
  const anclaProductos = useRef(null);
  const anclasRest = useRef(null);
  const anclaBlog = useRef(null);
  const svg = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(bgMenu.current, {
      backgroundColor: "#000",
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top+=40px",
        end: "+=1",
        toggleActions: "play none none reverse",
        scrub: true,
        markers: true
      },
    });

    tl.to(bgMenu.current, {
      opacity: 1,
    });

    tl.to(svg.current, {
      duration: 3,
      y: -150,
      delay: 5,
    });

    tl.to(menu.current, {
      marginTop: "-38px",
    });
    tl.to(imgLogo.current, {
      filter:
        "invert(100%) sepia(0%) saturate(7500%) hue-rotate(67deg) brightness(109%) contrast(109%)",
    });
    tl.to(imgCarrito.current, {
      filter:
        "invert(100%) sepia(0%) saturate(7500%) hue-rotate(67deg) brightness(109%) contrast(109%)",
    });
    tl.to(whiteText.current, {
      color: "white",
    });
    tl.to(button.current, {
      background: "white",
      color: "black",
    });
    tl.to(navegacion.current, {
      background: "black",
    });
    tl.to(anclaProductos.current, {
      color: "white",
    });
    tl.to(anclasRest.current, {
      color: "white",
    });
    tl.to(anclaBlog.current, {
      color: "white",
    });

    const tlSVG = gsap.timeline({
      scrollTrigger: {
        start: "top+=130px",
        end: "+=1",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    });

    tlSVG.to(svg.current, { opacity: 1, y: 0, delay: 5 });
  }, []);

  return (
    <div ref={menu} className="z-50 h-auto w-full lg:fixed">
      <div className="relative flex items-center justify-between px-4 py-6 lg:justify-normal lg:gap-12 lg:px-[100px]">
        <div className="header-left flex h-auto w-[158px] items-center justify-between lg:flex-grow-0">
          <Link href="/">
            <Image
              ref={imgLogo}
              className="LogoMincaNegro"
              placeholder="empty"
              src="/logo.png"
              width={117}
              height={19}
              alt="Imagen representativa de caracteristicas del producto"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-grow">
          <Menu />
        </div>
        <div
          ref={whiteText}
          className="header-right flex items-center justify-between gap-4"
        >
          {/* Carrito de compras */}
          <Link href="/cart" className="carrito-movil relative hidden lg:block">
            <Image
              ref={imgCarrito}
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
          <div className="carritoComprasMovil flex items-center justify-between gap-6">
            <Link
              href="/cart"
              className="carrito-movil relative block lg:hidden"
            >
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
            <img
              className="h-[20px] w-[3px] rounded-[52px] lg:hidden"
              src="/Incon_megamenu/separador_menu_movil.png"
            />
            <Menumovil />
          </div>
          <p className="hidden lg:block">|</p>
          {/* Btn Contacto */}
          <Link
            href="/contacto"
            className="hidden text-base font-semibold lg:flex"
          >
            Contacto
          </Link>
          <button
            ref={button}
            className="mr-4 hidden h-[52px] w-[135px] rounded-[62px] bg-[#111] text-base text-white lg:block"
          >
            <Link href="/testdrive">Test Drive</Link>
          </button>
          <button onClick={() => lenis.scrollTo("#up", { lerp: 0.07 })}>
            <img
              ref={svg}
              className="svgIcon hidden lg:block"
              src="/menusticky/iconUp.svg"
              alt="up"
            />
          </button>
          {/* Avatar usuario */}
          {/* <Image
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
            /> */}
        </div>
        <div
          ref={bgMenu}
          className="nav-bg absolute left-0 top-0 -z-10 h-full w-full"
        ></div>
      </div>
    </div>
  );
};
