"use client";

import { Suspense } from "react";
import { Carousel } from "@material-tailwind/react";
import { SkeletonCarrusel } from "@/components/carruseles/SkeletonCarrusel";
import { manrope, ubuntu } from "../../ui/fonts";

export function CarruselSingleProduct() {
  return (
    <div className="carrusel w-full h-[696px] lg:h-[618px] lg:px-[100px]">
      <Suspense fallback={<SkeletonCarrusel />}>
        {/* PC */}
        <Carousel
          autoplay={false}
          loop={true}
          autoplayDelay={5000}
          navigation={false}
          className="hidden lg:flex carrusel-sigle-product relative overflow-x-hidden bg-[#F4F5F0]"
        >
          <section className="flex w-full h-full">
              <div className="w-full h-full grid place-items-center">
                <div className="">
                    <h1 className={`${manrope.className} w-[330px] h-auto font-bold text-[42px] uppercase leading-[52px]`}>
                    Ergonomía y durabilidad
                    </h1>
                    <p className={`${ubuntu.classname} w-[445px] h-[140px] text-base leading-[25px] mt-4`}>
                    Cada una de nuestras Scooters están diseñadas para que sientas comodidad, libertad y seguridad en tus trayectos.
                     Sin complicaciones y con un equipo de profesionales dispuesto a ayudarte todos los días.
                    </p>
                </div>
              </div>
              <div className="w-full h-full flex justify-end items-center">
              <img
                src="/sigleProduct/scooter-single-product.png"
                alt="scooter"
                className="w-[520px] h-auto object-contain mr-[8%] mb-28"
              />
              </div>
          </section>
          <section className="flex w-full h-full">
              <div className="w-full h-full grid place-items-center">
                <div className="">
                    <h1 className={`${manrope.className} w-[330px] h-auto font-bold text-[42px] uppercase leading-[45px]`}>
                    Ergonomía y durabilidad
                    </h1>
                    <p className={`${ubuntu.classname} w-[445px] h-[140px] text-base leading-[25px] mt-4`}>
                    Cada una de nuestras Scooters están diseñadas para que sientas comodidad, libertad y seguridad en tus trayectos.
                     Sin complicaciones y con un equipo de profesionales dispuesto a ayudarte todos los días.
                    </p>
                </div>
              </div>
              <div className="w-full h-full flex justify-end items-center bg-orange-200Cambia de ruta">
              <img
                src="/sigleProduct/scooter-single-product.png"
                alt="scooter"
                className="w-[520px] h-auto object-contain mr-[8%] mb-28"
              />
              </div>
          </section>
        </Carousel>
        {/* Movil */}
        <Carousel
          autoplay={false}
          loop={true}
          prevArrow={false}
          nextArrow={false}
          autoplayDelay={5000}
          className="lg:hidden carrusel-sigle-product-movil relative overflow-x-hidden bg-[#F4F5F0]"
        >
          <section className="w-full h-full px-4">
              <div className="w-full h-auto lg:h-full grid place-items-center">
                <div className="">
                    <h1 className={`${manrope.className} w-full h-auto font-light text-[40px] leading-[50px] mt-[46px]`}>
                    Ergonomía <br></br>y <b className="font-extrabold">durabilidad</b>
                    </h1>
                    <p className={`${ubuntu.classname} w-full h-[140px] text-[15px] leading-[20px] mt-6`}>
                    Cada una de nuestras Scooters están diseñadas para que sientas comodidad, libertad y seguridad en tus trayectos.
                    <br></br>
                    <br></br>
                    Sin complicaciones y con un equipo de profesionales dispuesto a ayudarte todos los días.
                    </p>
                </div>
              </div>
              <div className="w-full h-auto lg:h-full flex justify-center items-center">
              <img
                src="/sigleProduct/scooter-single-product.png"
                alt="scooter"
                className="w-[275px] h-auto object-contain"
              />
              </div>
          </section>
          <section className="w-full h-full px-4">
              <div className="w-full h-auto lg:h-full grid place-items-center">
                <div className="">
                    <h1 className={`${manrope.className} w-full h-auto font-light text-[40px] leading-[50px] mt-[46px]`}>
                    Ergonomía <br></br>y <b className="font-extrabold">durabilidad</b>
                    </h1>
                    <p className={`${ubuntu.classname} w-full h-[140px] text-[15px] leading-[20px] mt-6`}>
                    Cada una de nuestras Scooters están diseñadas para que sientas comodidad, libertad y seguridad en tus trayectos.
                    <br></br>
                    <br></br>
                    Sin complicaciones y con un equipo de profesionales dispuesto a ayudarte todos los días.
                    </p>
                </div>
              </div>
              <div className="w-full h-auto lg:h-full flex justify-center items-center">
              <img
                src="/sigleProduct/scooter-single-product.png"
                alt="scooter"
                className="w-[275px] h-auto object-contain"
              />
              </div>
          </section>
          <section className="w-full h-full px-4">
              <div className="w-full h-auto lg:h-full grid place-items-center">
                <div className="">
                    <h1 className={`${manrope.className} w-full h-auto font-light text-[40px] leading-[50px] mt-[46px]`}>
                    Ergonomía <br></br>y <b className="font-extrabold">durabilidad</b>
                    </h1>
                    <p className={`${ubuntu.classname} w-full h-[140px] text-[15px] leading-[20px] mt-6`}>
                    Cada una de nuestras Scooters están diseñadas para que sientas comodidad, libertad y seguridad en tus trayectos.
                    <br></br>
                    <br></br>
                    Sin complicaciones y con un equipo de profesionales dispuesto a ayudarte todos los días.
                    </p>
                </div>
              </div>
              <div className="w-full h-auto lg:h-full flex justify-center items-center">
              <img
                src="/sigleProduct/scooter-single-product.png"
                alt="scooter"
                className="w-[275px] h-auto object-contain"
              />
              </div>
          </section>
        </Carousel>
      </Suspense>
    </div>
  );
}
