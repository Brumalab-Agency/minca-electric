import { Header } from "./Header";
import { manrope, ubuntu } from "../../ui/fonts";
import Link from "next/link"
import { getHero } from "../../lib/graphQLRequest";
import { HeroImagen } from "./HeroImagen";
import SpiningText from "./SpiningText";
import MostarMarquee from "./MostarMarquee";



export const Hero = async () => {
 
  const her = await getHero();
  const hero = her[0].node.hero;
  return (
    <div>
      <MostarMarquee/>
      <Header />
      <div className="p-4 lg:px-12">
        <h1
          className={`${manrope.className} antialiased text-[40px] lg:text-[64px] 2xl:text-[96px] text-[#111] leading-[50px] lg:flex lg:tracking-wide	lg:font-light lg:mt-[77px]`}
        >
          {hero.titulo}
          <br></br>
          <b className="lg:font-bold lg:ml-6">{hero.tituloNegrita}</b>
        </h1>
        <p
          className={`${ubuntu.className} antialiased text-[#111]/60 leading-[20px] max-w-[263px] my-[20px] lg:mt-9 lg:font-normal lg:text-[24px] 2xl:text-[32px] lg:leading-[34px] lg:max-w-[580px] 2xl:lg:max-w-[700px] lg:text-[#42454A] lg:tracking-wide`}
        >
          {hero.subTitulo}
        </p>
        <p className="text-[15px] text-[#42454A] lg:mt-[69px] lg:font-normal lg:text-[20px] 2xl:text-[24px]">
          {hero.subTitulo2}
        </p>
        <hr className="border border-0.5 border-solid border-[#42454A] my-[15px]" />
        <div
          className={`${ubuntu.className} antialiased tabs flex justify-start items-center gap-4 lg:mt-2 relative`}
        >
          <Link href="#scooter" className="text-[15px] text-[#42454A] underline decoration-1 lg:text-[20px] 2xl:text-[24px] lg:font-regular lg:leading-[25px] lg:mt-2">
            {hero.ancla1}
          </Link>
          <Link href="#ebike" className="text-[15px] text-[#42454A] underline decoration-1 lg:text-[20px] 2xl:text-[24px] lg:font-regular lg:leading-[25px] lg:mt-2">
            {hero.ancla2}
          </Link>
          <SpiningText text=" • Agenda tu • test drive 1">
            <img src="/imagotipo-negro.png" alt="logo tipo" />
          </SpiningText>
        </div>
      </div>
      <HeroImagen />
    </div>
  );
};
