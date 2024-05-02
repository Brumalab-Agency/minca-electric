"use client"
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
import { AccesoriosPage } from "@/lib/graphQLRequest";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CarruselAccesorios = () => {
  const [accesorios, setAccesorios] = useState([]);

  useEffect(() => {
    const fetchAccesorios = async () => {
      const data = await AccesoriosPage();
      setAccesorios(data.products.nodes);
    };
    fetchAccesorios();
  }, []);

  const separadorDeMiles = (numero) => {
    let partesNumero = numero?.toString().split(',');
    partesNumero[0] = partesNumero[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return partesNumero.join('.');
  }

  const paths = [
    "Casco Integral Minca",
    "Poncho Minca",
    "Gafas‎ Minca",
    "On Guard U-look",
    "Baúl Minca",
    "On Guard Guaya",
  ];

  let path = "";

  accesorios.map((accesorio, index) => {
    if (accesorio.name === paths[0]) {
      path = "Casco_Integral_Minca";
    }
  
    if (accesorio.name === paths[1]) {
      path = "Poncho_Minca";
    }
  
    if (accesorio.name === paths[2]) {
      path = "Gafas_Minca"; 
    }
  
    if (accesorio.name === paths[3]) {
      path = "On_Guard_U-look";
    }
  
    if (accesorio.name === paths[4] || name === "Ba%C3%BAl_Minca") {
      path = "Baúl_Minca";
    }
  
    if (accesorio.name === paths[5]) {
      path = "On_Guard_Guaya";
    }
  })

  return (
    <div className="MincaAccesorios h-auto w-full overflow-x-hidden bg-white lg:pl-[100px] pl-4 lg:mt-[80px] 2xl:mt-[100px] mb-[65] lg:mb-0">
      <div className="py-4  lg:h-[710px] lg:w-auto">
        <div className="h-auto w-full">
          <div className="flex w-full items-center justify-between px-4 lg:px-0 leading-[42px]">
            <TProductVariant

              titulo="Accesorios MINCA,"
              subtitulo="estilo y seguridad..."
              flexion="lg:flex"
            />
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="marcador -mt-[50px] w-full pt-[120px]"
          >
            <CarouselContent className=" marcador 2">
              {accesorios.map((accesorio, index) => (
                <Link href={`/accesorios/${accesorio.name}`}>
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/2 lg:basis-1/4 2xl:mx-1 2xl:basis-1/6 h-auto w-full"
                  >
                    <div className="p-1 w-full h-[430px]] card-height">
                      <Card className="h-auto w-[198px] rounded-[13px] bg-[#F0EEED] lg:h-[298px] lg:w-[295px] 2xl:w-[400px] 2xl:h-auto">
                        <CardContent className="flex aspect-square items-center justify-center p-2">
                          <img
                            className="h-auto w-[350px]"
                            src={accesorio.image.mediaItemUrl}
                            alt={accesorio.name}
                          />
                         
                        </CardContent>
                      </Card>
                      <p className="mt-[10px] text-base font-bold lg:text-[20px] 2xl:text-[28px]">
                        {accesorio.name}
                      </p>
                      <div className="btnCardAccesorios w-full h-[100px]">
                        <p className="text-[20px] 2xl:text-[24px] font-bold mb-[10px] leading-[40px]">$ { separadorDeMiles(accesorio?.price.slice(0, 6))}</p>
                        <Link href={`/accesorios/${path}`} className="bg-[#111] px-[20px] py-[10px] rounded-[52px] text-white mt-4">Ver accesorio</Link>
                      </div>
                    </div>
                  </CarouselItem>
                </Link>
              ))}
            </CarouselContent>
            <CarouselPrevious  izquierda=" lg:top-[6%] lg:left-[85%] 2xl:left-[87%]"/>
            <CarouselNext derecha=" lg:top-[6%] lg:right-[7%] 2xl:right-[5%]"/>
          </Carousel>
        </div>
      </div>
      <Separador clases="hidden" />
    </div>
  );
};
