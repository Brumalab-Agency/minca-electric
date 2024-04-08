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

export const CarruselAccesorios = async () => {
  const data = await AccesoriosPage();
  console.log(data);
  const accesorios = data.products.nodes;
  const separadorDeMiles = (numero) => {
    let partesNumero = numero?.toString().split(',');
    partesNumero[0] = partesNumero[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return partesNumero.join('.');
  }


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
                      <Card className="h-auto w-[198px] rounded-[13px] bg-[#F0EEED] lg:h-[298px] lg:w-[295px]">
                        <CardContent className="flex aspect-square items-center justify-center p-2">
                          <img
                            className="h-auto w-[250px]"
                            src={accesorio.image.mediaItemUrl}
                            alt={accesorio.name}
                          />
                          {console.log(accesorio.image?.mediaItemUrl)}
                        </CardContent>
                      </Card>
                      <p className="mt-[10px] text-base font-bold lg:text-[20px]">
                        {accesorio.name}
                      </p>
                      <div className="btnCardAccesorios w-full h-[100px]">
                        <p className="text-[20px] font-bold mb-[10px]">$ { separadorDeMiles(accesorio?.price.slice(0, 6))}</p>
                        <Link href={`/accesorios/${accesorio.name}`} className="bg-[#111] px-[20px] py-[10px] rounded-[52px] text-white mt-4">Ver accesorio</Link>
                      </div>
                    </div>
                  </CarouselItem>
                </Link>
              ))}
            </CarouselContent>
            <CarouselPrevious  izquierda=" lg:top-[6%] lg:left-[85%] 2xl:left-[85%]"/>
            <CarouselNext derecha=" lg:top-[6%] lg:right-[7%] 2xl:right-[5%]"/>
          </Carousel>
        </div>
      </div>
      <Separador clases="hidden" />
    </div>
  );
};
