"use client";

import { Suspense } from "react";
import { SkeletonCarrusel } from "@/components/carruseles/SkeletonCarrusel";
import { manrope, ubuntu } from "../../ui/fonts";

import Link from "next/link";

export function ComponentTallerJaveriana() {
  return (
    <div className="carrusel w-full bg-[#F0F1EB] lg:h-[665px] lg:px-0">
      <Suspense fallback={<SkeletonCarrusel />}>
        {/* PC */}

        {/* Taller Chico */}
        <section className="flex h-full w-full">
          <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#F0F1EB] text-[#111] lg:grid ">
            <div className="">
              <div className="flex gap-4 ">
                <div className="columna-img mb-[5px] flex h-auto w-[60px] flex-col justify-end gap-6">
                  <div className="mb-[40px]">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/servicioTecnico/icon_taller.png"
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
                      taller
                    </h1>
                    <h2
                      className={`${manrope.className} mb-[27px] text-left text-[26px] font-medium uppercase`}
                    >
                      javeriana
                    </h2>
                  </div>
                  <div>
                    <div className="">
                      <p className={`${ubuntu.className} text-base`}>
                      Carrera 7 # 45-10 <br></br>Bogotá, Colombia
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className={`${ubuntu.className} text-base`}>
                        Lunes a viernes: 07:00 a.m. - 05:00 p.m.
                      </p>
                      <p className={`${ubuntu.className} text-base`}>
                        Sábados: 08:00 a.m. - 03:00 p.m.
                      </p>
                      {/* {<p className={`${ubuntu.className} text-base`}>
                          Domingos: 11:00 a.m. - 05:00 p.m.
                        </p>} */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto ml-[60px] mt-6">
              <Link href="/talleres/tallerJaveriana" className="border-2 border-[#111] bg-[#111] text-white lg:px-[52px] lg:py-[12px] rounded-[52px]">Agendar Mantenimiento</Link>
              </div>
            </div>
          </div>
          <div className="grid h-full w-full place-items-center bg-[url(/talleres/taller-javeriana.jpg)] bg-cover bg-bottom">
            {/* La imagen es un backGround */}
          </div>
        </section>
      </Suspense>
      <div>
      </div>
    </div>
  );
}
