"use client";
import { manrope, ubuntu } from "../../ui/fonts";
import { CardShowRoomMovil } from "./CardShowRoomMovil";
import { BotonRelativo } from "../botones/BotonRelativo";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";

export const ShowRoomComponent = () => {
  return (
    <>
      <div className="carrusel w-full bg-[#000000] lg:h-[665px] lg:px-0">
        {/* PC */}
        <Carousel
          autoplay={false}
          loop={true}
          autoplayDelay={5000}
          navigation={false}
          className="carrusel-showRoom-home relative hidden overflow-x-hidden bg-[#000000] lg:flex"
        >
          <section className="flex h-full w-full">
            <div className="ladoIzquierdo grid h-full w-full place-items-center">
              {/* La imagen es un backGround */}
            </div>
            <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#000000] text-white lg:grid ">
              <div className="">
                <div className="flex gap-4 ">
                  <div className="columna-img mb-[25px] flex h-auto w-[60px] flex-col justify-end gap-6">
                    {/* <div className="mb-[40px]">
                      <img
                        className="h-[50px] w-[50px]"
                        src="/showroom_icon.png"
                        alt="icono de herramientas"
                      />
                    </div> */}
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
                        className={`${manrope.className} mb-[27px] text-left text-[26px] font-medium uppercase`}
                      >
                        chicó
                      </h2>
                    </div>
                    <div>
                      <div className="">
                        <p className={`${ubuntu.className} text-base`}>
                          Cra. 11a #94a-56, Localidad de Chapinero, <br></br>{" "}
                          Bogotá, Colombia
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className={`${ubuntu.className} text-base`}>
                          Lunes a viernes: 10:00 a.m. - 07:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Sábados: 10:00 a.m. - 06:00 p.m.
                        </p>
                        {
                          <p className={`${ubuntu.className} text-base`}>
                            Domingos: 11:00 a.m. - 05:00 p.m.
                          </p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto ml-[60px] mt-6">
                  <Link
                    href="/showrooms"
                    className={`${ubuntu.className} border border-1 border-white my-3 grid  h-[52px] w-full place-items-center rounded-[62px] bg-[#111] text-[16px] text-white  lg:w-[290px]`}
                  >
                    Agendar Mantenimiento
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="flex h-full w-full">
            <div className="ladoIzquierdo grid h-full w-full place-items-center">
              {/* La imagen es un backGround */}
            </div>
            <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#000000] text-white lg:grid ">
              <div className="">
                <div className="flex gap-4 ">
                  <div className="columna-img mb-[25px] flex h-auto w-[60px] flex-col justify-end gap-6">
                    {/* <div className="mb-[40px]">
                      <img
                        className="h-[50px] w-[50px]"
                        src="/showroom_icon.png"
                        alt="icono de herramientas"
                      />
                    </div> */}
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
                        className={`${manrope.className} mb-[27px] text-left text-[26px] font-medium uppercase`}
                      >
                        Javeriana
                      </h2>
                    </div>
                    <div>
                      <div className="">
                        <p className={`${ubuntu.className} text-base`}>
                          Cra. 11a #94a-56, Localidad de Chapinero, <br></br>{" "}
                          Bogotá, Colombia
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className={`${ubuntu.className} text-base`}>
                          Lunes a viernes: 10:00 a.m. - 07:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Sábados: 10:00 a.m. - 06:00 p.m.
                        </p>
                        {
                          <p className={`${ubuntu.className} text-base`}>
                            Domingos: 11:00 a.m. - 05:00 p.m.
                          </p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto ml-[60px] mt-6">
                  <Link
                    href="/showrooms"
                    className={`${ubuntu.className} border border-1 border-white my-3 grid  h-[52px] w-full place-items-center rounded-[62px] bg-[#111] text-[16px] text-white  lg:w-[290px]`}
                  >
                    Agendar Mantenimiento
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Carousel>
      </div>
      <CardShowRoomMovil btn="Agendar TestDrive" icono="/showroom_icon.png" />
      <CardShowRoomMovil
        btn="Agendar TestDrive"
        icono="/showroom_icon.png"
        clase="bg-[#F0F1EB]"
      />
      <CardShowRoomMovil btn="Agendar TestDrive" icono="/showroom_icon.png" />
    </>
  );
};
