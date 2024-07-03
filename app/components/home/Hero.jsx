import { Header } from "./Header";
import { manrope, ubuntu } from "../../ui/fonts";
import { getHero } from "../../lib/graphQLRequest";
import { HeroImagen } from "./HeroImagen";
import SpiningText from "./SpiningText";

import { Anclaje } from "./Anclaje";
import Link from "next/link";

export const Hero = async () => {
  const her = await getHero();
  const hero = her[0].node.hero;

  return (
    <div id="up">
      <Header />
      <div className=" p-4 lg:px-[100px] 2xl:h-[680px]">
        <h2
          className={`${manrope.className}  text-[40px] leading-none lg:mr-6 lg:mt-[175px] lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:text-[64px] lg:font-light lg:tracking-wide 2xl:-ml-[5px] 2xl:mt-[200px] 2xl:text-[96px]`}
        >
          {hero.titulo}
          {"‎ ‎ "}
          <span className=" font-bold lg:ml-0">
            {hero.tituloNegrita}
          </span>
        </h2>
        <h1
          className={`${ubuntu.className}  my-[20px] max-w-[263px] leading-[20px] text-[#111]/60 lg:mt-9 lg:max-w-[580px] lg:text-[24px] lg:font-normal lg:leading-[34px] lg:tracking-wide lg:text-[#42454A] 2xl:lg:max-w-[760px] 2xl:text-[32px]`}
        >
          {hero.subTitulo}
        </h1>
        <p className="text-[15px] text-[#42454A] lg:mt-[69px] lg:text-base lg:font-normal 2xl:text-[28px]">
          {hero.subTitulo2}
        </p>
        <hr className="border-0.5 my-[10px] border border-solid border-[#42454A] 2xl:my-[40px]" />
        <div
          className={`${ubuntu.className}  tabs relative flex justify-between gap-4 lg:mt-2 2xl:mt-8 `}
        >
          <Anclaje hero={hero} />
          <Link href="/testdrive">
            <SpiningText text=" • Agenda tu • test drive 1">
              <img
                className="imagotipo"
                src="/imagotipo-negro.png"
                alt="logo tipo"
              />
            </SpiningText>
          </Link>
        </div>
      </div>
      <HeroImagen />
    </div>
  );
};
