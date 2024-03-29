import { Header } from "../home/Header";

import { manrope, ubuntu } from "@/ui/fonts";

export const HeroContext = async ({ titulo, tituloNegrita, ocultar }) => {
  return (
    <div>
      <Header />
      <div className="p-4 lg:px-[100px]">
        <h1
          className={`${manrope.className} text-[40px] uppercase leading-[50px] text-[#111]  lg:mt-[170px] lg:flex lg:text-[64px]	lg:font-light lg:leading-[45px] lg:tracking-wide 2xl:text-[96px] 2xl:mt-[200px]`}
        >
          {titulo}
          <br></br>
          <b className="uppercase lg:ml-6 lg:font-bold">{tituloNegrita}</b>
        </h1>
        <p
          className={`${ubuntu.className} my-[20px] max-w-[263px] leading-[20px] text-[#111]/60  lg:mt-9 lg:max-w-[700px] lg:text-[24px] lg:font-normal lg:leading-[34px] lg:tracking-wide lg:text-[#42454A] 2xl:text-[32px]`}
        >
          Muévete sostenible, con estilo y eficiencia.<br></br> Muévete con
          Minca.
        </p>

        <hr
          className={`border-0.5 mt-[52px] border border-solid border-[#42454A] ${ocultar}`}
        />
      </div>
    </div>
  );
};
