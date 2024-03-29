import { getBanner } from "@/lib/graphQLRequest";
import { ubuntu } from "@/ui/fonts";
import CardHeroSingleScooter from "../singlescooter/CardHeroSingleScooter";

export const HeroVideoSingleCarsProduct = async ({
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
          className="top-0 hidden h-[700px] w-full object-cover  lg:block"
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
      <div className="overlay absolute top-0 flex h-full w-full flex-col items-center justify-between bg-[#111]/50 p-4 lg:h-[700px] lg:flex-row lg:px-[100px]">
        <div className="flex w-full flex-col  justify-end h-[45%] lg:h-[90%] lg:w-[50%]">
          <p
            className={`${ubuntu.className} lg:text-center text-[14px] text-white w-[73%] lg:w-full`}
          >
            El valor final de la scooter no incluye accesorios ni mantenimiento
            preventivo*
          </p>
        </div>
        <div className="lg:grid h-auto w-full place-items-center hidden lg:w-[50%]">
          <CardHeroSingleScooter scooters={scooters} />
        </div>
      </div>
      <div className="lg:hidden">
        <CardHeroSingleScooter scooters={scooters} />
      </div>
    </div>
  );
};
