"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "../menu/Menu";
import { Menumovil } from "../menu/Menumovil";
import { AppContext } from "../context/Context";
import gsap from "gsap";
import {
  useRef,
  useEffect,
  useContext,
  useState,
} from "react";
import { useLenis } from "@studio-freight/react-lenis";
import MostarMarquee from "./MostarMarquee";
import { MenuNegro } from "../menu/MenuNegro";

export const Header = () => {
  const [cart, setCart] = useContext(AppContext);
  const lenis = useLenis(({ scroll }) => {});

  const [isMobile, setIsMobile] = useState(false);

  const whiteMenuRef = useRef(null);
  const blackMenuRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const whiteMenu = whiteMenuRef.current;
    const blackMenu = blackMenuRef.current;
    const svg = svgRef.current;

    gsap.set(blackMenu, { autoAlpha: 0 });

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        gsap.to(whiteMenu, { autoAlpha: 0, duration: 0.3 });
        gsap.set(whiteMenu, { display: "none" });
        gsap.to(blackMenu, { autoAlpha: 1, duration: 0.1 });
        gsap.to(svg, { display: "block", position: "absolute", right: "45px", duration: 0.5 });
      } else {
        gsap.to(whiteMenu, { autoAlpha: 1, duration: 0.3 });
        gsap.to(blackMenu, { autoAlpha: 0, duration: 0.1 });
        
      }
    };

    const handleScrollUp = () => {
      const scrollTop = window.scrollY;

      if (scrollTop === 0) {
        gsap.to(whiteMenu, { autoAlpha: 1, duration: 0.1 });
        gsap.set(whiteMenu, { display: "flex" });
        gsap.to(blackMenu, { autoAlpha: 0, duration: 0.1 });
        gsap.to(svg, { right: "0px", duration: 0.5 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollUp);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollUp);
    };
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
    <div className="z-50 h-auto w-full lg:fixed top-0">
      <MostarMarquee />
      {/* Menu fondo blanco */}
      <div
        ref={whiteMenuRef}
        className="white-menu relative flex items-center justify-between bg-white px-4 py-4 lg:justify-normal lg:gap-4 lg:px-[100px]"
      >
        <div className="header-left flex h-auto w-[115px] items-center justify-between lg:flex-grow-0">
          <Link href="/">
            <Image
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
        <div className="header-right flex items-center justify-between gap-4">
          {/* Carrito de compras */}
          <Link href="/cart" className="carrito-movil relative hidden lg:block">
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
          <button className="z-10 mr-4 hidden h-[52px] w-[135px] rounded-[62px] bg-[#111] text-base text-white lg:block">
            <Link href="/testdrive">Test Drive</Link>
          </button>
          {!isMobile && (
            <button
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
        {/* <div
          ref={bgMenu}
          className="nav-bg absolute left-0 top-0 -z-10 h-full w-full"
        ></div> */}
      </div>
      {/* Fin menu fondo blanco */}

      {/* Menu fondo negro */}
      <div
        ref={blackMenuRef}
        className="black-menu relative hidden lg:flex items-center justify-between bg-[#111] px-4 py-3 lg:justify-normal lg:gap-4 lg:px-[100px]"
      >
        <div className="header-left flex h-auto w-[115px] items-center justify-between lg:flex-grow-0">
          <Link href="/">
            <Image
              className="LogoMincaNegro"
              placeholder="empty"
              src="/logo.png"
              style={{
                filter:
                  "invert(100%) sepia(0%) saturate(7500%) hue-rotate(67deg) brightness(109%) contrast(109%)",
              }}
              width={117}
              height={19}
              alt="Imagen representativa de caracteristicas del producto"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-grow">
          <MenuNegro />
        </div>
        <div className="header-right flex items-center justify-between gap-4">
          {/* Carrito de compras */}
          <Link href="/cart" className="carrito-movil relative hidden lg:block">
            <Image
              placeholder="empty"
              className="imagen-carrito"
              src="/carrito/carritomenu.svg" //<--- Movil
              style={{
                filter:
                  "invert(100%) sepia(0%) saturate(7500%) hue-rotate(67deg) brightness(109%) contrast(109%)",
              }}
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
          <p className="hidden text-white lg:block">|</p>
          {/* Btn Contacto */}
          <Link
            href="/contacto"
            className="hidden text-base font-semibold text-white lg:flex"
          >
            Contacto
          </Link>
          <button className="z-10 mr-4 hidden h-[52px] w-[135px] rounded-[62px] bg-[#fff] text-base text-[#111] lg:block">
            <Link href="/testdrive">Test Drive</Link>
          </button>
          {!isMobile && (
            <button
            ref={svgRef}
              className="hidden"
              onClick={() => lenis.scrollTo("#up", { lerp: 1 })}
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
        {/* <div
          ref={bgMenu}
          className="nav-bg absolute left-0 top-0 -z-10 h-full w-full"
        ></div> */}
      </div>
      {/* Fin menu fondo negro */}
    </div>
  );
};
