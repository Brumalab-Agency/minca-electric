import { Header } from "./Header";
import { manrope, ubuntu } from "../../ui/fonts";
import { getHero } from "../../lib/graphQLRequest";
import { HeroImagen } from "./HeroImagen";
import SpiningText from "./SpiningText";
import MostarMarquee from "./MostarMarquee";
import { Anclaje } from "./Anclaje";

export const Hero = async () => {
  const her = await getHero();
  const hero = her[0].node.hero;

  return (
    <div id="up">
      <MostarMarquee />
      <Header />
      <div className="p-4 lg:px-[100px]">
        <h1
          className={`${manrope.className}  text-[40px] leading-[50px] text-[#111] lg:mt-[77px] lg:flex lg:text-[64px] lg:font-light	lg:tracking-wide 2xl:-ml-[5px] 2xl:text-[96px] 2xl:mt-[115px]`}
        >
          {hero.titulo}
          <br></br>
          <b className="lg:ml-6 lg:font-bold">{hero.tituloNegrita}</b>
        </h1>
        <p
          className={`${ubuntu.className}  my-[20px] max-w-[263px] leading-[20px] text-[#111]/60 lg:mt-9 lg:max-w-[580px] lg:text-[24px] lg:font-normal lg:leading-[34px] lg:tracking-wide lg:text-[#42454A] 2xl:lg:max-w-[700px] 2xl:text-[32px]`}
        >
          {hero.subTitulo}
        </p>
        <p className="text-[15px] text-[#42454A] lg:mt-[69px] lg:text-base lg:font-normal 2xl:text-[18px]">
          {hero.subTitulo2}
        </p>
        <hr className="border-0.5 my-[10px] border border-solid border-[#42454A]" />
        <div
          className={`${ubuntu.className}  tabs relative flex justify-between gap-4 lg:mt-2`}
        >
          <Anclaje hero={hero}/>
          <SpiningText text=" • Agenda tu • test drive 1">
            <img src="/imagotipo-negro.png" alt="logo tipo" />
          </SpiningText>
        </div>
      </div>
      <HeroImagen />
    </div>
  );
};
