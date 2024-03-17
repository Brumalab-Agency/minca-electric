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
  const accesorios = data.products.nodes;
  return (
    <div className="MincaAccesorios over h-auto w-full overflow-x-hidden bg-white p-4 lg:p-[48px]">
      <div className="py-4  lg:h-[710px] lg:w-auto lg:border-b-2">
        <div className="h-auto w-full">
          <div className="flex w-full items-center justify-between">
            <TProductVariant
              titulo="Accesorios MINCA,"
              subtitulo="estilo y segurida..."
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
                    className="mx-4 basis-1/2 md:basis-1/2 lg:basis-1/4 2xl:mx-1 2xl:basis-1/6"
                  >
                    <div className="p-1">
                      <Card className="h-auto w-[198px] rounded-[13px] bg-[#F0EEED] lg:h-[298px] lg:w-[295px]">
                        <CardContent className="flex aspect-square items-center justify-center p-2">
                          <img
                            className="h-auto w-[150px]"
                            src={accesorio.image.mediaItemUrl}
                            alt="gafas"
                          />
                        </CardContent>
                      </Card>
                      <p className="mt-[10px] text-base font-bold lg:text-[20px]">
                        {accesorio.name}
                      </p>
                      <p className="text-[20px] font-bold">{accesorio.price}</p>
                    </div>
                  </CarouselItem>
                </Link>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <Separador clases="hidden" />
    </div>
  );
};
