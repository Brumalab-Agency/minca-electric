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
          autoplay={true}
          loop={true}
          autoplayDelay={3000}
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
                          Lunes a viernes: 11:00 a.m. - 08:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Sábados: 09:00 a.m. - 08:00 p.m.
                        </p>
                        {
                          <p className={`${ubuntu.className} text-base`}>
                            Domingos: 11:00 a.m. - 06:00 p.m.
                          </p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[60px] mt-6 flex flex-col items-center justify-center">
                  <Link
                    href="/testdrive/showroomchico"
                    className={`${ubuntu.className} border-1 my-3 grid h-[52px] w-full  place-items-center rounded-[62px] border border-white bg-[#111] text-[16px] text-white  lg:w-[290px]`}
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
                          Lunes a viernes: 11:00 a.m. - 08:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Sábados: 09:00 a.m. - 08:00 p.m.
                        </p>
                        {
                          <p className={`${ubuntu.className} text-base`}>
                            Domingos: 11:00 a.m. - 06:00 p.m.
                          </p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[60px] mt-6 flex flex-col items-center justify-center">
                  <Link
                    href="/testdrive/showroomjaveriana"
                    className={`${ubuntu.className} border-1 my-3 grid h-[52px] w-full  place-items-center rounded-[62px] border border-white bg-[#111] text-[16px] text-white  lg:w-[290px]`}
                  >
                    Agendar Test Drive
                  </Link>
                  <div className="item flex w-full justify-center text-center text-[14px] underline">
                    <Link
                      target="_blank"
                      href="https://maps.app.goo.gl/9gKCxcucQG86NJFt6"
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
                src="/sedes/Showroom Cedritos - Minca electric.png"
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
                          Lunes a viernes: 11:00 a.m. - 08:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Sábados: 09:00 a.m. - 08:00 p.m.
                        </p>
                        {
                          <p className={`${ubuntu.className} text-base`}>
                            Domingos: 11:00 a.m. - 06:00 p.m.
                          </p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[60px] mt-6 flex flex-col items-center justify-center">
                  <Link
                    href="/testdrive/showroomcedritos"
                    className={`${ubuntu.className} border-1 my-3 grid h-[52px] w-full  place-items-center rounded-[62px] border border-white bg-[#111] text-[16px] text-white  lg:w-[290px]`}
                  >
                    Agendar Test Drive
                  </Link>
                  <div className="item flex w-full justify-center text-center text-[14px] underline">
                    <Link
                      target="_blank"
                      href="https://maps.app.goo.gl/Jxb663iCvnFNSLg89"
                    >
                      Ver ubicación en Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Showrrom  Gran Estación */}
          <section className="flex h-full w-full">
            <div className="ladoIzquierdo grid h-full w-full place-items-center">
              {/* La imagen es un backGround */}
              <img
                className="h-[665px] w-full object-cover object-top"
                src="/sedes/Showroom Gran Estación - Minca electric.jpg"
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
                        Gran Estación
                      </h2>
                    </div>
                    <div>
                      <div className="">
                        <p className={`${ubuntu.className} text-base`}>
                          Centro Comercial Gran Estacion
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Isla, 2-02, Bogotá
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className={`${ubuntu.className} text-base`}>
                          Lunes a viernes: 11:00 a.m. - 08:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Sábados: 09:00 a.m. - 08:00 p.m.
                        </p>
                        {
                          <p className={`${ubuntu.className} text-base`}>
                            Domingos: 11:00 a.m. - 06:00 p.m.
                          </p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[60px] mt-6 flex flex-col items-center justify-center">
                  {/* <Link
                    href="/talleres"
                    className={`${ubuntu.className} border-1 my-3 grid h-[52px] w-full  place-items-center rounded-[62px] border border-white bg-[#111] text-[16px] text-white  lg:w-[290px]`}
                  >
                    Agendar Test Drive
                  </Link> */}
                  <div className="item flex w-full justify-center text-center text-[14px] underline">
                    <Link
                      target="_blank"
                      href="https://maps.app.goo.gl/MWC7qMyC6tiivvEe7"
                    >
                      Ver ubicación en Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Showrrom  Avenida Chile */}
          <section className="flex h-full w-full">
            <div className="ladoIzquierdo grid h-full w-full place-items-center">
              {/* La imagen es un backGround */}
              <img
                className="h-[665px] w-full object-cover object-top"
                src="/sedes/Showroom Avenida Chile - Minca electric.jpg"
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
                        Avenida Chile
                      </h2>
                    </div>
                    <div>
                      <div className="">
                        <p className={`${ubuntu.className} text-base`}>
                          Calle 72 # 25-10,
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Bogotá
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className={`${ubuntu.className} text-base`}>
                          Lunes a viernes: 11:00 a.m. - 08:00 p.m.
                        </p>
                        <p className={`${ubuntu.className} text-base`}>
                          Sábados: 09:00 a.m. - 08:00 p.m.
                        </p>
                        {
                          <p className={`${ubuntu.className} text-base`}>
                            Domingos: 11:00 a.m. - 06:00 p.m.
                          </p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-[60px] mt-6 flex flex-col items-center justify-center">
                  <Link
                    href="/testdrive/showroomavenidachile"
                    className={`${ubuntu.className} border-1 my-3 grid h-[52px] w-full  place-items-center rounded-[62px] border border-white bg-[#111] text-[16px] text-white  lg:w-[290px]`}
                  >
                    Agendar Test Drive
                  </Link>
                  <div className="item flex w-full justify-center text-center text-[14px] underline">
                    <Link
                      target="_blank"
                      href="https://maps.app.goo.gl/gyNEg69D1ArdESR2A"
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
        src="/sedes/Showroom Chicó - Minca electric.jpg"
        tipo="Showroom"
        titulo="chicó"
        btn="Agendar TestDrive"
        icono="/showroom_icon.png"
        url="/testdrive/showroomchico"
        direccion="Cra. 11a #94a-56"
        ciudad="Bogotá, Colombia"
        entreSemana="Lunes a viernes: 11:00 a.m. - 08:00 p.m."
        sabado="Sábados: 09:00 a.m. - 08:00 p.m."
        domingo="Domingos: 11:00 a.m. - 06:00 p.m."
      />
      <CardShowRoomMovil
        src="/sedes/Showroom Javeriana - Minca electric.jpg"
        tipo="Showroom"
        titulo="javeriana"
        btn="Agendar TestDrive"
        icono="/showroom_icon.png"
        clase="bg-[#F0F1EB]"
        url="/testdrive/showroomjaveriana"
        direccion="Carrera 7 # 45-10"
        ciudad="Bogotá, Colombia"
        entreSemana="Lunes a viernes: 11:00 a.m. - 08:00 p.m."
        sabado="Sábados: 09:00 a.m. - 08:00 p.m."
        domingo="Domingos: 11:00 a.m. - 06:00 p.m."
      />
      <CardShowRoomMovil
        src="/sedes/Showroom Cedritos - Minca electric.png"
        tipo="Showroom"
        titulo="cedritos"
        btn="Agendar TestDrive"
        icono="/showroom_icon.png"
        clase="bg-[#F0F1EB]"
        url="/testdrive/showroomcedritos"
        direccion="Av. Cra. 19#143A-08"
        ciudad="Bogotá, Colombia"
        entreSemana="Lunes a viernes: 11:00 a.m. - 08:00 p.m."
        sabado="Sábados: 09:00 a.m. - 08:00 p.m."
        domingo="Domingos: 11:00 a.m. - 06:00 p.m."
      />
      <CardShowRoomMovil
        src="/sedes/Showroom Gran Estación - Minca electric.jpg"
        tipo="Showroom"
        titulo="Gran Estación"
        btn="Agendar Test Drive"
        icono="/showroom_icon.png"
        clase="bg-[#F0F1EB]"
        url="#"
        // { url="/testdrive/showroomcedritos"*/}
        direccion="Centro Comercial Gran Estacion Isla, 2-02,"
        ciudad="Bogotá, Colombia"
        entreSemana="Lunes a viernes: 11:00 a.m. - 08:00 p.m."
        sabado="Sábados: 09:00 a.m. - 08:00 p.m."
        domingo="Domingos: 11:00 a.m. - 06:00 p.m."
      />
      <CardShowRoomMovil
        src="/sedes/Showroom Avenida Chile - Minca electric.jpg"
        tipo="Showroom"
        titulo="Avenida Chile"
        btn="Agendar Test Drive"
        icono="/showroom_icon.png"
        clase="bg-[#F0F1EB]"
        url="/testdrive/showroomavenidachile"
        direccion="Calle 72 # 25-10,"
        ciudad="Bogotá, Colombia"
        entreSemana="Lunes a viernes: 11:00 a.m. - 08:00 p.m."
        sabado="Sábados: 09:00 a.m. - 08:00 p.m."
        domingo="Domingos: 11:00 a.m. - 06:00 p.m."
      />
      {/* <CardShowRoomMovil btn="Agendar TestDrive" icono="/showroom_icon.png" url="#"/> */}
    </>
  );
};
