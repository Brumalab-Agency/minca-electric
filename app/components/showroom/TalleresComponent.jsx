"use client";
import React, { useState, useEffect, useRef } from "react";
import { Separador } from "@/(pages)/separador/Separador";
import { TProductVariant } from "@/components/titulos/TProductVariant";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { CarrouselMovileTalleres } from "../home/CarrouselTalleres";

export const TalleresComponent = () => {
  const [carouselApi, setCarouselApi] = useState(null);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const talleres = [
    {
      name: "Taller Chicó",
      image: "/talleres/taller-chico.jpg",
      link: "/talleres/tallerChico",
    },
    {
      name: "Taller Javeriana",
      image: "/talleres/taller-javeriana.jpg",
      link: "/talleres/tallerJaveriana",
    },
    {
      name: "Taller Cedritos",
      image: "/talleres/taller-cedritos.jpg",
      link: "/talleres/tallerCedritos",
    },
    {
      name: "Avenida Chile",
      image: "/talleres/Taller-avenida-chile.png",
      link: "/talleres/tallerAvenidaChile",
    },
  ];

  useEffect(() => {
    const handleAutoSlide = () => {
      if (carouselApi) {
        carouselApi.scrollNext();
      }
    };

    intervalRef.current = setInterval(handleAutoSlide, 5000);

    return () => clearInterval(intervalRef.current);
  }, [carouselApi]);

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      if (carouselApi) {
        carouselApi.scrollNext();
      }
    }, 5000);
  };

  return (
    <div className=" carrusel w-full lg:h-[665px] lg:px-0">
      <div
        className="carrusel mb-[65px] hidden w-full px-40 lg:block lg:h-[665px] lg:px-0 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hidden px-[100px] text-center lg:block">
          <h1 className="mt-[55px] text-left text-[62px] font-bold">
            Talleres
          </h1>
          <p className="m-auto text-left text-[20px] text-[#111] 2xl:text-[28px]">
            Encuentra el Mantenimiento Perfecto para Tu Scooter y Garantiza su
            Rendimiento. <br />
            ¡Programa tu Mantenimiento Ahora!
          </p>
        </div>
        <div className="">
          <div className="py-4 lg:h-[710px] lg:w-auto">
            <div className="relative h-auto w-full">
              <Carousel
                setApi={setCarouselApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="marcador -mt-[100px] w-full px-[100px] pt-[120px]"
              >
                <CarouselContent className="marcador 2">
                  {talleres.map((taller, index) => (
                    <CarouselItem
                      key={`carrousel-talleres-${index}`}
                      className={`h-auto w-full basis-1/3 md:basis-1/3 lg:basis-1/3 2xl:basis-1/6 ${
                        index === 0 ? "2xl:mr-20" : "2xl:mx-20"
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center 2xl:w-[500px]">
                        <Image
                          alt={taller.name}
                          className="h-auto rounded-[10px] lg:w-[360px] 2xl:w-[500px]"
                          src={taller.image}
                          width={300}
                          height={300}
                        />
                        <h2 className="mt-4 text-[28px] font-bold">
                          {taller.name}
                        </h2>
                        <Link
                          href={taller.link}
                          className={`my-3 grid h-[52px] w-full place-items-center rounded-[62px] bg-[#111] text-[16px] text-white lg:w-[230px]`}
                        >
                          Agendar Mantenimiento
                        </Link>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className=" absolute left-2 top-1/2 ml-5 -translate-y-1/2 lg:left-5" />
                <CarouselNext className="absolute right-2 top-1/2 mr-5 -translate-y-1/2 lg:right-5" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="mt-55 lg:hidden">
        <CarrouselMovileTalleres />
      </div>
    </div>
  );
};
