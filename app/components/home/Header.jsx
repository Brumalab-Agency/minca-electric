"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "../menu/Menu";
import { Menumovil } from "../menu/Menumovil";
import { AppContext } from "../context/Context";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useEffect, useContext, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { TimelineLite } from "gsap/gsap-core";
import MostarMarquee from "./MostarMarquee";

export const Header = () => {
  const [cart, setCart] = useContext(AppContext);
  const lenis = useLenis(({ scroll }) => {});

  
  const [isMobile, setIsMobile] = useState(false);

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
  const gap = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(bgMenu.current, {
      backgroundColor: "#111",
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top+=40px",
        end: "+=1",
        toggleActions: "play none none reverse",
        scrub: true,
        markers: false,
      },
    });

    /* const tl = new TimelineLite({
      onStartParams: ['start'],
      onComplete:
    }) */

    tl.to(bgMenu.current, {
      opacity: 1,
    });

    tl.to(svg.current, {
      display: "none",
      duration: 3,
      x: -150,
      delay: 5,
    });

    /* tl.to(menu.current, {
      marginTop: "-38px",
    }); */

    tl.to(imgLogo.current, {
      filter:
        "invert(100%) sepia(0%) saturate(7500%) hue-rotate(67deg) brightness(109%) contrast(109%)",
      width: "350px"
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
   
    tl.to(gap.current, {
      gap: "16px",
    });

    const tlSVG = gsap.timeline({
      scrollTrigger: {
        start: "top+=130px",
        end: "+=1",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    });

    tlSVG.to(svg.current, { display: "block", position: "absolute", right: "50px", opacity: 1, x: 0 });
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div ref={menu} className="z-50 h-auto w-full lg:fixed">
      <MostarMarquee />
      <div
        ref={gap}
        className="relative flex items-center justify-between px-4 py-4 lg:justify-normal lg:gap-4 lg:px-[100px]"
      >
        <div className="header-left flex h-auto w-[115px] items-center justify-between lg:flex-grow-0">
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
            className="mr-4 hidden h-[52px] w-[135px] rounded-[62px] bg-[#111] text-base text-white lg:block z-10"
          >
            <Link href="/testdrive">Test Drive</Link>
          </button>
          {!isMobile && (
            <button
              ref={svg}
              className="hidden"
              onClick={() => lenis.scrollTo("#up", { lerp: 0.07 })}
            >
              <img className="svgIcon" src="/menusticky/iconUp.svg" alt="up" />
            </button>
          )}
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
