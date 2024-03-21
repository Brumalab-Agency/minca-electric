import Link from "next/link";
import { manrope, ubuntu } from "../../ui/fonts";
import { BotonRelativo } from "../botones/BotonRelativo";
import { CarruselTestimonio } from "../carruseles/testtimonio/CarruselTestimonio";
import { Cardtestimonio } from "./Cardtestimonio";
import {TestimoniosQuery} from "@/lib/graphQLRequest"

export const Testimonios = async ({clases, clase2}) => {
  const dato = await TestimoniosQuery();
  const data = dato.testimonios.nodes;
  return (
    <div className={`p-4 lg:pl-[100px] lg:pb-[70px] ${clase2}`}>
      <div className={`my-4 flex items-center ${clases}`}>
        <hr className={`border-1 mt-4 w-full border-[#111]`} />
        <img src="/flecha-correcta 2.png" alt="flechas direccional" />
      </div>
      <div className="testimonioCard lg:my-[74px] flex justify-between items-center gap-4 overflow-x-scroll">
        {data.map(item=>(
          <div className="w-full lg:w-auto" key={item.testimonioId}>
              <CarruselTestimonio rate={item.testimonio.rate} comentario={item.testimonio.comentario} nombre={item.testimonio.nombreDeCliente} clases="lg:w-[400px] lg:min-w-[359px] w-full"/>
            </div>
            
        ))
        }

      </div>
        <div className="w-full h-auto my-[74px] hidden lg:block">
          <Link target="_blank" href="https://www.google.com/maps/search/minca+electric/@4.6785321,-74.096118,13z/data=!3m1!4b1?authuser=0&entry=ttu" className={`${ubuntu.className} grid place-items-center  text-[16px] w-full h-[52px] rounded-[62px] my-3  lg:w-[250px] bg-[#111] text-white`} >
          Ver más testimonios
          </Link>
        </div>
    </div>
  );
};
