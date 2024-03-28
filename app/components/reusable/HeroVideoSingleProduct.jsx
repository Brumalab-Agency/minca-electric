import { getBanner } from "@/lib/graphQLRequest";
import Image from "next/image";
import { manrope } from "@/ui/fonts";
import CardHeroSingleScooter from "../singlescooter/CardHeroSingleScooter";

export const HeroVideoSingleProduct = async ({
  titulo,
  tituloSecundarioNegrita,
  urlVideo,
  clases,
  scooters,
}) => {
  const banner = await getBanner();
  return (
    <div className="heroVideo relative ">
      <div className="">
        {/* PC */}
        <video
          className="top-0 hidden h-[663px] w-full object-cover  lg:block"
          src={urlVideo}
          autoPlay
          muted
          loop
        />

        {/* Movil */}
        <video
          className="top-0 h-[400px] w-full object-cover  lg:hidden"
          src={urlVideo}
          autoPlay
          muted
          loop
        />
      </div>
      <div className="overlay absolute top-0 flex h-[400px] w-full items-center justify-between bg-[#111]/50 p-4 lg:h-[663px] lg:px-[100px]">
        <div className="h-[400px] w-[50%] bg-green-600"></div>
        <div className="h-auto w-[50%] grid place-items-center">
          <CardHeroSingleScooter scooters={scooters} />
        </div>
      </div>
    </div>
  );
};
