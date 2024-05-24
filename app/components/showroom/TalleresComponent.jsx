"use client";
import { manrope, ubuntu } from "../../ui/fonts";
import { CardShowRoomMovil } from "./CardShowRoomMovil";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

export const TalleresComponent = () => {
  return (
    <>
      <div className="carrusel w-full bg-[#F0F1EB] lg:h-[665px] lg:px-0">
        {/* PC */}
        <Carousel
          autoplay={true}
          loop={true}
          autoplayDelay={5000}
          navigation={false}
          className="carrusel-showRoom-home relative overflow-x-hidden bg-[#fff] lg:flex"
        >
          {/* Slide 1 */}
          <div className="flex h-full w-full justify-center gap-6">
            {/* Taller Chico */}
            <div className="flex flex-col items-center justify-center 2xl:w-[500px]">
              <Image
                alt="scooter"
                className="h-auto rounded-[10px] lg:w-[360px] 2xl:w-[500px]"
                src="/talleres/taller-chico.jpg"
                width={300}
                height={300}
              />
              <h2 className="mt-4 text-[28px] font-bold">Taller Chicó</h2>
              <Link
                href="/talleres/tallerChico"
                className={`${ubuntu.className} my-3 grid h-[52px] w-full place-items-center rounded-[62px] bg-[#111] text-[16px] text-white lg:w-[210px]`}
              >
                Agendar
              </Link>
            </div>
            {/* Taller Javeriana */}
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="scooter"
                className="h-auto rounded-[10px] lg:w-[360px] 2xl:w-[500px]"
                src="/talleres/taller-javeriana.jpg"
                width={300}
                height={300}
              />
              <h2 className="mt-4 text-[28px] font-bold">Taller Javeriana</h2>
              <Link
                href="/talleres/tallerJaveriana"
                className={`${ubuntu.className} my-3  grid h-[52px] w-full place-items-center rounded-[62px] bg-[#111] text-[16px] text-white lg:w-[210px]`}
              >
                Agendar
              </Link>
            </div>
            {/* Taller Cedritos */}
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="scooter"
                className="h-auto rounded-[10px] lg:w-[360px] 2xl:w-[500px]"
                src="/talleres/taller-cedritos.jpg"
                width={300}
                height={300}
              />
              <h2 className="mt-4 text-[28px] font-bold">Taller Cedritos</h2>
              <Link
                href="/talleres/tallerCedritos"
                className={`${ubuntu.className} my-3 block h-[52px] w-full place-items-center rounded-[62px] bg-[#111] text-[16px] text-white lg:grid lg:w-[210px]`}
              >
                Agendar
              </Link>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex h-full w-full justify-center gap-6">
            {/* Taller Chico */}
            <div className="flex flex-col items-center justify-center 2xl:w-[500px]">
              <Image
                alt="scooter"
                className="h-auto rounded-[10px] lg:w-[360px] 2xl:w-[500px]"
                src="/talleres/Taller-avenida-chile.png"
                width={300}
                height={300}
              />
              <h2 className="mt-4 text-[28px] font-bold">Avenida Chile</h2>
              <Link
                href="/talleres/tallerAvenidaChile"
                className={`${ubuntu.className} my-3 grid h-[52px] w-full place-items-center rounded-[62px] bg-[#111] text-[16px] text-white lg:w-[210px]`}
              >
                Agendar
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};
