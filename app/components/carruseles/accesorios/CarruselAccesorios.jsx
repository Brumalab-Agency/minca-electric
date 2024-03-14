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

export const CarruselAccesorios = () => {
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
              {Array.from({ length: 9 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/4 2xl:basis-1/6 2xl:mx-1 mx-4">
                  <div className="p-1">
                    <Card className="h-auto w-[198px] lg:h-[298px] lg:w-[295px] bg-[#F0EEED] rounded-[13px]">
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        {
                            <img className="w-[150px] h-auto" src="http://test.mincaelectric.com/wp-content/uploads/2024/02/Gafas-Minca-Electric.png" alt="gafas" />
                        }
                      </CardContent>
                    </Card>
                    <p className="mt-[10px] text-base font-bold lg:text-[20px]">
                      Gafas Minca
                    </p>
                    <p className="text-[20px] font-bold">$280.000</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <Separador clases="hidden"/>
    </div>
  );
};
