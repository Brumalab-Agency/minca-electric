import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  return (
    <div className="h-screen bg-[#ccc] grid place-items-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="m-auto w-[90%] h-[710px] pt-[20px] marcador"
      >
        <p>Accesorios MINCA,</p>
        <CarouselContent className=" marcador 2">
          {Array.from({ length: 9 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
              <div className="p-1">
                <Card className="">
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    {
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    }
                  </CardContent>
                </Card>
                 <p>Texto marcador</p>
                 <p>Texto marcador</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarouselSize;
