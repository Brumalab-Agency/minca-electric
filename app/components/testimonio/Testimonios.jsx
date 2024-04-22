import Link from "next/link";
import { manrope, ubuntu } from "../../ui/fonts";
import { BotonRelativo } from "../botones/BotonRelativo";
import { CarruselTestimonio } from "../carruseles/testtimonio/CarruselTestimonio";
import { Cardtestimonio } from "./Cardtestimonio";
import { TestimoniosQuery } from "@/lib/graphQLRequest";
import { InfiniteCardsLeftTestimonios } from "../aceternity/InfiniteCardsLeftTestimonios";

export const Testimonios = async ({ clases, clase2, clase3 }) => {
  const dato = await TestimoniosQuery();
  const data = dato.testimonios.nodes;
  return (
    <div className={`lg:pb-[70px]  ${clase2}`}>
      <div className={`my-4 flex items-center lg:px-[100px] ${clases}`}>
        <hr className={`border-1 mt-4 border-[#111] w-full lg:w-full 2xl:w-[94%]`} />
        <img src="/flecha-correcta 2.png" alt="flechas direccional" />
      </div>
      <div className={`testimonioCard flex items-center justify-between gap-4 overflow-x-hidden lg:mt-[74px] ${clase3}`}>
        <div className="w-full h-auto lg:w-auto">
        <div className="flex items-end lg:mb-[26px] px-4 lg:px-[100px]">
              <div className="marcador w-full lg:mt-[74px]">
                <div className={`${manrope.className} `}>
                  <p className="text-[32px] leading-[42px] lg:text-[48px] lg:capitalize 2xl:text-[64px]">
                    Lo que dicen <br className="lg:hidden"></br> nuestros{" "}
                    <b>clientes</b>
                  </p>
                </div>
                <div>
                  <p
                    className={`${ubuntu.className} mt-[21px] text-[18px] text-[#131313] lg:block lg:w-[10%] lg:leading-[34px] 2xl:text-[32px] 2xl:leading-[42px]`}
                  >
                    Conoce el testimonio positivo de nuestros clientes y
                    descubre los beneficios <br/> de nuestras soluciones en movilidad
                    y atención al usuario{" "}
                  </p>
                </div>
              </div>
            </div>
          {/* <CarruselTestimonio rate={item.testimonio.rate} comentario={item.testimonio.comentario} nombre={item.testimonio.nombreDeCliente} clases="lg:w-[400px] lg:min-w-[359px] w-full"/> */}
          <InfiniteCardsLeftTestimonios
            item={data}
            clases="lg:w-[400px] lg:min-w-[359px] w-full"
          />
        </div>
      </div>
      <div className="my-[26px] h-auto w-full lg:block px-4 lg:px-[100px]">
        <Link
          target="_blank"
          href="https://www.google.com/maps/search/minca+electric/@4.6785321,-74.096118,13z/data=!3m1!4b1?authuser=0&entry=ttu"
          className={`${ubuntu.className} my-3 grid  h-[52px] w-full place-items-center rounded-[62px] bg-[#111]  text-[16px] text-white lg:w-[250px]`}
        >
          Ver más testimonios
        </Link>
      </div>
    </div>
  );
};
