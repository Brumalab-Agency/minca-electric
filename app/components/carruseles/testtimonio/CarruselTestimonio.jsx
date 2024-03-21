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
    <div className="MincaAccesorios over h-auto w-full overflow-x-hidden bg-white">
      <div className="py-4  lg:h-auto lg:w-auto ">
        <div className="h-auto w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="marcador w-full "
          >
            <div className="flex items-end lg:mb-[74px]">
              <div className="w-full lg:mt-[74px] marcador">
                <div className={`${manrope.className} `}>
                  <p className="text-[32px] leading-[42px] lg:text-[48px] lg:capitalize 2xl:text-[64px]">
                    lo que dicen <br className="lg:hidden"></br> nuestros <b>clientes</b>
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
            <CarouselNext className="lg:right-[50.2%] 2xl:right-[32.8%] lg:top-[18%] derecha block top-[18%] -right-[4%]"/>
            <CarouselPrevious className="lg:left-[45.5%] 2xl:left-[60%] lg:top-[18%] izquierda block top-[18%] right-[5%]"/>
            <CarouselContent className="marcador2" customClass="overflow-visible">
              {Array.from({ length: 9 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/6 2xl:mx-1 2xl:basis-1/6 lg:w-[280px]"
                >
                  <div className="p-0">
                    <Card
                      className={`${manrope.className}  mt-[24px] rounded-[20px] border-2 border-[#111]/10 lg:p-6 p-6 ${clases}`}
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
            {/* <CarouselPrevious  izquierda="lg:top-[18%] 2xl:left-[56.5%] 2xl:top-[45%]"/>
            <CarouselNext derecha="lg:top-[18%] 2xl:right-[35.5%] 2xl:top-[45%]"/> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
