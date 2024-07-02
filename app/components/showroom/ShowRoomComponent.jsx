"use client";

import { manrope, ubuntu } from "../../ui/fonts";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";
import { CarrouselMovileShowroom } from "../home/CarrouselMovileShowroom";

export const ShowRoomComponent = () => {
  return (
    <>
      <div className="carrusel w-full bg-[#111] lg:h-[665px] lg:px-0">
        {/* PC */}
        <Carousel
          autoplay={true}
          loop={true}
          autoplayDelay={3000}
          navigation={false}
          className="carrusel-showRoom-home relative hidden overflow-x-hidden bg-[#111] lg:flex"
        >
          {/* Showroom Chico */}
          <section className="flex h-full w-full">
            <div className="ladoIzquierdo grid h-full w-full place-items-center">
              {/* La imagen es un backGround */}
              <img
                className="h-[665px] w-full object-cover object-top"
                src="/sedes/Showroom Chicó - Minca electric.jpg"
                alt="icono de herramientas"
              />
            </div>
            <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#111] text-white lg:grid ">
              <div>
                <div className="flex gap-4">
                  <div className="columna-img mb-[15px] flex h-auto w-[60px] flex-col justify-end gap-6">
                    <div>
                      <img
                        className="h-[50px] w-[50px]"
                        src="/map.png"
                        alt="pointer map"
                      />
                    </div>
                    <div>
                      <img
                        className="h-[50px] w-[50px]"
                        src="/calendario.png"
                        alt="icono calendario"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className={`${ubuntu.className} text-left text-base`}>
                        Visita nuestras sedes Minca:
                      </p>
                      <h1
                        className={`${manrope.className} mt-[50px] text-left text-[42px] font-bold uppercase`}
                      >
                        showroom
                      </h1>
                      <h2
                        className={`${manrope.className} mb-[27px] text-left text-[26px] font-medium uppercase`}
                      >
                        chicó
                      </h2>
                    </div>
                    <div>
                      <div>
                        <p className={`${ubuntu.className} text-base`}>
                          Cra. 11a #94a-56
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className={`${ubuntu.className} text-base`}>
                          Lunes a viernes: 11:00 a.m. - 08:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Sábados: 09:00 a.m. - 08:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Domingos: 11:00 a.m. - 06:00 p.m.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[60px] mt-6 flex flex-col items-center justify-center">
                  <Link
                    href="/testdrive/showroomchico"
                    className={`${ubuntu.className} border-1 my-3 grid h-[52px] w-full  place-items-center rounded-[62px] border border-white bg-[#111] text-[16px] text-white lg:w-[290px]`}
                  >
                    Agendar Test Drive
                  </Link>
                  <div className="item flex w-full justify-center text-center text-[14px] underline">
                    <Link
                      target="_blank"
                      href="https://maps.app.goo.gl/2wDShqWLvxBDL4fB9"
                    >
                      Ver ubicación en Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Otros Showrooms omitidos para brevedad */}
        </Carousel>
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <CarrouselMovileShowroom />
      </div>
    </>
  );
};
