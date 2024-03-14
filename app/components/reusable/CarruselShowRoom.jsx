"use client";

import { Suspense } from "react";
import { Carousel } from "@material-tailwind/react";
import { SkeletonCarrusel } from "@/components/carruseles/SkeletonCarrusel";
import { manrope, ubuntu } from "../../ui/fonts";
import { BotonRelativo } from "../botones/BotonRelativo";
import { MultipleShowRooms } from "./MultipleShowRooms";

export function CarruselShowRoom() {
  return (
    <div className="carrusel lg:h-[665px] w-full bg-[#F0F1EB] lg:px-0">
      <Suspense fallback={<SkeletonCarrusel />}>
        {/* PC */}
        <Carousel
          autoplay={false}
          loop={true}
          autoplayDelay={5000}
          navigation={false}
          className="carrusel-showRoom relative hidden overflow-x-hidden bg-[#F0F1EB] lg:flex"
        >
          <section className="flex h-full w-full">
            <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#F0F1EB] text-[#111] lg:grid ">
              <div className="">
                <div className="flex gap-4 ">
                  <div className="columna-img mb-[25px] flex h-auto w-[60px] flex-col justify-end gap-6">
                    <div className="mb-[40px]">
                      <img
                        className="h-[50px] w-[50px]"
                        src="/showroom_icon.png"
                        alt="icono de herramientas"
                      />
                    </div>
                    <div className="">
                      <img
                        className="h-[50px] w-[50px]"
                        src="/map.png"
                        alt="pointer map"
                      />
                    </div>
                    <div className="">
                      <img
                        className="h-[50px] w-[50px]"
                        src="/calendario.png"
                        alt="icono calendario"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <p className={`${ubuntu.className} text-left text-base`}>
                        Visita nuestras sedes Minca:
                      </p>
                      <h1
                        className={`${manrope.className} mt-[50px] text-left text-[42px] font-bold uppercase`}
                      >
                        showroom
                      </h1>
                      <h2
                        className={`${manrope.className} text-left text-[26px] font-medium mb-[27px] uppercase`}
                      >
                        chicó
                      </h2>
                    </div>
                    <div>
                      <div className="">
                        <p className={`${ubuntu.className} text-base`}>
                        Cra. 11a #94a-56, Localidad de Chapinero, <br></br> Bogotá, Colombia
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className={`${ubuntu.className} text-base`}>
                          Lunes a viernes: 10:00 a.m. - 07:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Sábados: 10:00 a.m. - 06:00 p.m.
                        </p>
                        {<p className={`${ubuntu.className} text-base`}>
                          Domingos: 11:00 a.m. - 05:00 p.m.
                        </p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto ml-[60px] mt-6">
                <BotonRelativo
                    param="Agendar Mantenimiento"
                    clases="border-2 border-[#111] bg-[#F0F1EB] lg:w-[342px] lg:h-[56px]"
                  />
                </div>
              </div>
            </div>

            <div className="ladoIzquierdo grid h-full w-full place-items-center">
              {/* La imagen es un backGround */}
            </div>
          </section>
          <section className="flex h-full w-full">
            <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#F0F1EB] text-[#111] lg:grid ">
              <div className="">
                <div className="flex gap-4 ">
                  <div className="columna-img mb-[25px] flex h-auto w-[60px] flex-col justify-end gap-6">
                    <div className="mb-[40px]">
                      <img
                        className="h-[50px] w-[50px]"
                        src="/showroom_icon.png"
                        alt="icono de herramientas"
                      />
                    </div>
                    <div className="">
                      <img
                        className="h-[50px] w-[50px]"
                        src="/map.png"
                        alt="pointer map"
                      />
                    </div>
                    <div className="">
                      <img
                        className="h-[50px] w-[50px]"
                        src="/calendario.png"
                        alt="icono calendario"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <p className={`${ubuntu.className} text-left text-base`}>
                        Visita nuestras sedes Minca:
                      </p>
                      <h1
                        className={`${manrope.className} mt-[50px] text-left text-[42px] font-bold uppercase`}
                      >
                        showroom
                      </h1>
                      <h2
                        className={`${manrope.className} text-left text-[26px] font-medium mb-[27px] uppercase`}
                      >
                        chicó
                      </h2>
                    </div>
                    <div>
                      <div className="">
                        <p className={`${ubuntu.className} text-base`}>
                        Cra. 11a #94a-56, Localidad de Chapinero, <br></br> Bogotá, Colombia
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className={`${ubuntu.className} text-base`}>
                          Lunes a viernes: 10:00 a.m. - 07:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Sábados: 10:00 a.m. - 06:00 p.m.
                        </p>
                        {<p className={`${ubuntu.className} text-base`}>
                          Domingos: 11:00 a.m. - 05:00 p.m.
                        </p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto ml-[60px] mt-6">
                <BotonRelativo
                    param="Agendar Mantenimiento"
                    clases="border-2 border-[#111] bg-[#F0F1EB] lg:w-[342px] lg:h-[56px]"
                  />
                </div>
              </div>
            </div>

            <div className="ladoIzquierdo grid h-full w-full place-items-center">
              {/* La imagen es un backGround */}
            </div>
          </section>
        </Carousel>
      </Suspense>
      <div>
      <MultipleShowRooms/>
      </div>
    </div>
  );
}
