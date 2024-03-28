import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { manrope, ubuntu } from "@/ui/fonts";
import { Rate } from "antd";

export const CarruselTestimonio = ({ clases, nombre, comentario, rate }) => {
  return (
    <div className="MincaTestimonios h-auto w-full overflow-x-hidden bg-white">
      <div className="py-4  lg:h-auto lg:w-auto ">
        <div className="h-auto w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="marcadorTestimonios w-full "
          >
            <div className="flex items-end lg:mb-[74px]">
              <div className="marcador w-full lg:mt-[74px]">
                <div className={`${manrope.className} `}>
                  <p className="text-[32px] leading-[42px] lg:text-[48px] lg:capitalize 2xl:text-[64px]">
                    lo que dicen <br className="lg:hidden"></br> nuestros{" "}
                    <b>clientes</b>
                  </p>
                </div>
                <div>
                  <p
                    className={`${ubuntu.className} mt-[21px] hidden text-[22px] text-[#131313] lg:block lg:w-[517px] lg:leading-[34px] 2xl:w-[680px] 2xl:text-[32px] 2xl:leading-[42px]`}
                  >
                    Conoce el testimonio positivo de nuestros clientes y
                    descubre los beneficios de nuestras soluciones en movilidad
                    y atención al usuario{" "}
                  </p>
                </div>
              </div>
            </div>
            <CarouselNext className="derecha -right-[4%] top-[18%] block lg:right-[50.2%] lg:top-[18%] 2xl:right-[26%]  2xl:top-[39%]" />
            <CarouselPrevious className="izquierda right-[5%] top-[18%] block lg:left-[45.5%] lg:top-[18%] 2xl:left-[67%] 2xl:top-[39%]" />
            <CarouselContent
              className="marcador2"
              customClass="overflow-visible"
            >
              {Array.from({ length: 9 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:w-[280px] lg:basis-1/6 2xl:mx-1 2xl:basis-1/6"
                >
                  <div className="p-0">
                    <Card
                      className={`${manrope.className}  mt-[24px] rounded-[20px] border-2 border-[#111]/10 p-6 lg:p-6 ${clases}`}
                    >
                      <CardContent className="p-0">
                        <div className="marcadorMovil">
                          <div className="-minca-rate flex items-center justify-between">
                            <Rate allowHalf defaultValue={rate} />
                            <img
                              className="h-[25px] w-[25px]"
                              src="/google.png"
                              alt="imagen google"
                            />
                          </div>
                          {
                            <section>
                              <div className="flex items-center">
                                <h1 className="mt-2 font-bold">{nombre}</h1>
                                <img
                                  className="h-[25px] w-[25px]"
                                  src="/badge.png"
                                  alt="badge"
                                />
                              </div>
                              <p className="mt-2 text-[#111]/50">
                                {comentario}
                              </p>
                            </section>
                          }
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
