import { Header } from "../home/Header";
import MostarBanner from "@/components/home/MostarMarquee";
import { manrope, ubuntu } from "@/ui/fonts";


export const HeroContext = async ({titulo, tituloNegrita, ocultar}) => {

  return (
    <div>
      <MostarBanner />
      <Header />
      <div className="p-4 lg:px-12">
        <h1
          className={`${manrope.className} antialiased text-[40px] lg:text-[64px] 2xl:text-[96px] text-[#111] leading-[50px] lg:flex lg:tracking-wide	lg:font-light lg:mt-[77px] uppercase lg:leading-[45px]`}
        >
          {titulo}
          <br></br>
          <b className="lg:font-bold lg:ml-6 uppercase">{tituloNegrita}</b>
        </h1>
        <p
          className={`${ubuntu.className} antialiased text-[#111]/60 leading-[20px] max-w-[263px] my-[20px] lg:mt-9 lg:font-normal lg:text-[24px] 2xl:text-[32px] lg:leading-[34px] lg:max-w-[700px] lg:text-[#42454A] lg:tracking-wide`}
        >
          Muévete sostenible, con estilo y eficiencia. Muévete con Minca.
        </p>

  
        <hr className={`border border-0.5 border-solid border-[#42454A] mt-[52px] ${ocultar}`} />

      </div>
    </div>
  );
};
