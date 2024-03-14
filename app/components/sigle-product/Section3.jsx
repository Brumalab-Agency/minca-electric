import { manrope, ubuntu } from "../../ui/fonts";
import Image from "next/image";
import { BotonRelativo } from "../botones/BotonRelativo";

export const Section3 = () => {
  return (
    <div className="carrusel flex items-center justify-center lg:h-[618px] h-[450px] px-[16px] lg:px-[48px]">
      <div className="hidden lg:flex h-full w-full items-center justify-end">
        <Image
          placeholder="empty"
          alt="banner informativo"
          className=""
          src="/sigleProduct/seccion3-single-product.jpg"
          priority={true}
          width={697}
          height={618}
          style={{
            width: "100%",
            height: "618px",
            objectFit: "cover",
          }}
        />
      </div>
      <section className="flex h-full w-full">
        <div className="grid lg:h-full w-full place-items-center">
          <div className="w-full lg:max-w-[450px]">
            <h1
              className={`${manrope.className} h-auto w-full lg:w-[448px] text-[40px] lg:text-[42px] font-bold uppercase lg:leading-[45px] leading-[50px]`}
            >
              Rompe las cadenas del tráfico
            </h1>
            <p
              className={`${manrope.classname} mt-4 h-auto w-full lg:w-[330px] text-[26px] leading-[35px] uppercase`}
            >
              muévete con agilidad en una minca scooter
            </p>
            <BotonRelativo
              param="Agendar test drive"
              clases="border-2 border-[#111] lg:bg-white lg:text-[#000000] lg:w-[279px] mt-[20px] lg:capitalize"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
