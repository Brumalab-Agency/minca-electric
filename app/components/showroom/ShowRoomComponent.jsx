"use client";
import { manrope, ubuntu } from "../../ui/fonts";
import { CardShowRoomMovil } from "./CardShowRoomMovil";
import { BotonRelativo } from "../botones/BotonRelativo";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";

export const ShowRoomComponent = () => {
  return (
    <>
      <div className="carrusel w-full bg-[#111] lg:h-[665px] lg:px-0">
        {/* PC */}
        <Carousel
          autoplay={false}
          loop={true}
          autoplayDelay={5000}
          navigation={false}
          className="carrusel-showRoom-home relative hidden overflow-x-hidden bg-[#111] lg:flex"
        >
          {/* Showrrom Chico */}
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
              <div className="">
                <div className="flex gap-4 ">
                  <div className="columna-img mb-[15px] flex h-auto w-[60px] flex-col justify-end gap-6">
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
                          Cra. 11a #94a-56
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
                <div className="ml-[60px] mt-6 flex flex-col items-center justify-center">
                  <Link
                    href="/talleres"
                    className={`${ubuntu.className} border-1 my-3 grid h-[52px] w-full  place-items-center rounded-[62px] border border-white bg-[#111] text-[16px] text-white  lg:w-[290px]`}
                  >
                    Agendar Test Drive
                  </Link>
                  <div className="item flex w-full justify-center text-center text-[14px] underline">
                    <Link
                      target="_blank"
                      href="https://www.google.com/maps?ll=4.680087,-74.048458&z=15&t=m&hl=es&gl=US&mapclient=embed&q=Cl.+95+%2313+55,+Edif+Pavillon,+Bogot%C3%A1"
                    >
                      Ver ubicación en Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  Showrrom Javeriana */}
          <section className="flex h-full w-full">
            <div className="ladoIzquierdo grid h-full w-full place-items-center">
              {/* La imagen es un backGround */}
              <img
                className="h-[665px] w-full object-cover object-top"
                src="/sedes/Showroom Javeriana - Minca electric.jpg"
                alt="icono de herramientas"
              />
            </div>
            <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#111] text-white lg:grid ">
              <div className="">
                <div className="flex gap-4 ">
                  <div className="columna-img mb-[15px] flex h-auto w-[60px] flex-col justify-end gap-6">
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
                          Carrera 7 # 45-10
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
                <div className="ml-[60px] mt-6 flex flex-col items-center justify-center">
                  <Link
                    href="/talleres"
                    className={`${ubuntu.className} border-1 my-3 grid h-[52px] w-full  place-items-center rounded-[62px] border border-white bg-[#111] text-[16px] text-white  lg:w-[290px]`}
                  >
                    Agendar Test Drive
                  </Link>
                  <div className="item flex w-full justify-center text-center text-[14px] underline">
                    <Link
                      target="_blank"
                      href="https://www.google.com/maps?ll=4.631667,-74.064041&z=15&t=m&hl=es&gl=US&mapclient=embed&q=Cra.+7+%2345-10+Localidad+de+Chapinero+Bogot%C3%A1,+Cundinamarca"
                    >
                      Ver ubicación en Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Showrrom  Cedritos */}
          <section className="flex h-full w-full">
            <div className="ladoIzquierdo grid h-full w-full place-items-center">
              {/* La imagen es un backGround */}
              <img
                className="h-[665px] w-full object-cover object-top"
                src="/sedes/Showroom Cedritos - Minca electric.jpg"
                alt="icono de herramientas"
              />
            </div>
            <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#111] text-white lg:grid ">
              <div className="">
                <div className="flex gap-4 ">
                  <div className="columna-img mb-[15px] flex h-auto w-[60px] flex-col justify-end gap-6">
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
                        Cedritos
                      </h2>
                    </div>
                    <div>
                      <div className="">
                        <p className={`${ubuntu.className} text-base`}>
                          Av. Cra. 19#143A-08
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
                <div className="ml-[60px] mt-6 flex flex-col items-center justify-center">
                  <Link
                    href="/talleres"
                    className={`${ubuntu.className} border-1 my-3 grid h-[52px] w-full  place-items-center rounded-[62px] border border-white bg-[#111] text-[16px] text-white  lg:w-[290px]`}
                  >
                    Agendar Test Drive
                  </Link>
                  <div className="item flex w-full justify-center text-center text-[14px] underline">
                    <Link
                      target="_blank"
                      href="https://www.google.com/maps?ll=4.725377,-74.045735&z=15&t=m&hl=es&gl=US&mapclient=embed&q=Av.+Cra+19+%23143a-8+Bogot%C3%A1"
                    >
                      Ver ubicación en Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Taller Chico */}
          <section className="flex h-full w-full">
            <div className="ladoIzquierdo grid h-full w-full place-items-center">
              {/* La imagen es un backGround */}
              <img
                className="h-[665px] w-full object-cover object-top"
                src="/sedes/Servicio técnico Chicó - Minca electric.jpg"
                alt="icono de herramientas"
              />
            </div>
            <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#111] text-white lg:grid ">
              <div className="">
                <div className="flex gap-4 ">
                  <div className="columna-img flex h-auto w-[60px] flex-col justify-end gap-4">
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
                        taller
                      </h1>
                      <h2
                        className={`${manrope.className} mb-[27px] text-left text-[26px] font-medium uppercase`}
                      >
                        Chico
                      </h2>
                    </div>
                    <div>
                      <div className="">
                        <p className={`${ubuntu.className} text-base`}>
                          Calle 95 #13-55
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className={`${ubuntu.className} text-base`}>
                          Lunes a viernes: 07:00 a.m. - 05:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Sábados: 08:00 a.m. - 03:00 p.m.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[60px] mt-6 flex flex-col items-center justify-center">
                  <Link
                    href="/talleres"
                    className={`${ubuntu.className} border-1 my-3 grid h-[52px] w-full  place-items-center rounded-[62px] border border-white bg-[#111] text-[16px] text-white  lg:w-[290px]`}
                  >
                    Agendar Mantenimiento
                  </Link>
                  <div className="item flex w-full justify-center text-center text-[14px] underline">
                    <Link
                      target="_blank"
                      href="https://www.google.com/maps?ll=4.680087,-74.048458&z=15&t=m&hl=es&gl=US&mapclient=embed&q=Cl.+95+%2313+55,+Edif+Pavillon,+Bogot%C3%A1"
                    >
                      Ver ubicación en Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Taller Javeriana */}
          <section className="flex h-full w-full">
            <div className="ladoIzquierdo grid h-full w-full place-items-center">
              {/* La imagen es un backGround */}
              <img
                className="h-[665px] w-full object-cover object-top"
                src="/sedes/Servicio técnico Javeriana - Minca electric.jpg"
                alt="icono de herramientas"
              />
            </div>
            <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#111] text-white lg:grid ">
              <div className="">
                <div className="flex gap-4 ">
                  <div className="columna-img flex h-auto w-[60px] flex-col justify-end gap-4">
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
                        taller
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
                          Carrera 7 # 45-10
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className={`${ubuntu.className} text-base`}>
                          Lunes a viernes: 07:00 a.m. - 05:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Sábados: 08:00 a.m. - 03:00 p.m.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[60px] mt-6 flex flex-col items-center justify-center">
                  <Link
                    href="/talleres"
                    className={`${ubuntu.className} border-1 my-3 grid h-[52px] w-full  place-items-center rounded-[62px] border border-white bg-[#111] text-[16px] text-white  lg:w-[290px]`}
                  >
                    Agendar Mantenimiento
                  </Link>
                  <div className="item flex w-full justify-center text-center text-[14px] underline">
                    <Link
                      target="_blank"
                      href="https://www.google.com/maps?ll=4.631667,-74.064041&z=15&t=m&hl=es&gl=US&mapclient=embed&q=Cra.+7+%2345-10+Localidad+de+Chapinero+Bogot%C3%A1,+Cundinamarca"
                    >
                      Ver ubicación en Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel>
      </div>
      <CardShowRoomMovil
      titulo="chicó"
        btn="Agendar TestDrive"
        icono="/showroom_icon.png"
        url="/talleres/tallerChico"
      />
      <CardShowRoomMovil
        titulo="javeriana"
        btn="Agendar TestDrive"
        icono="/showroom_icon.png"
        clase="bg-[#F0F1EB]"
        url="/talleres/tallerJaveriana"
      />
      {/* <CardShowRoomMovil btn="Agendar TestDrive" icono="/showroom_icon.png" url="#"/> */}
    </>
  );
};
