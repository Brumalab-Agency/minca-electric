import { ubuntu } from "@/ui/fonts";
import CardHeroSingleScooter from "../singlescooter/CardHeroSingleScooter";

export const HeroVideoSingleCarsProduct = ({ urlVideo, scooters }) => {
  const mediaItemUrlPc = urlVideo?.videoImgBannerPc?.mediaItemUrl;
  const mediaItemUrlMovil = urlVideo?.videoImgBannerMovil?.mediaItemUrl;

  return (
    <div className="heroVideo relative lg:mt-[125px]">
      <div>
        {mediaItemUrlPc && (
          <div>
            {/* Imagen para PC */}
            <img
              className="top-0 hidden h-[700px] w-full object-cover lg:block 2xl:h-[900px]"
              src={mediaItemUrlPc}
              alt="Imagen banner para PC"
            />

            {/* Imagen para Móvil */}
            <img
              className="top-0 h-[700px] w-full object-cover lg:hidden"
              src={mediaItemUrlMovil}
              alt="Imagen banner para móvil"
            />
          </div>
        )}
      </div>
      <div
        className={`h-300px absolute bottom-[41%] flex w-full flex-col items-center justify-between p-4 lg:top-0 lg:h-[700px] lg:flex-row lg:px-[100px] 2xl:h-[900px]`}
      >
        <div className="overlaySingleProduct absolute bottom-[0px] left-0 h-[128px] w-full bg-black"></div>
        <div className="flex h-[58%] w-full flex-col justify-end lg:h-[90%] lg:w-[50%]">
          <p
            className={`${ubuntu.className} z-20 w-[73%] text-[14px] text-white lg:w-full lg:text-left`}
          >
            El valor final de la scooter no incluye accesorios ni mantenimiento
            preventivo*
          </p>
          {console.log(scooters?.edges[0]?.node.sliderProductos.tooltips)}
        </div>
        <div className="hidden h-auto w-full place-items-end lg:grid lg:w-[50%]">
          <CardHeroSingleScooter scooters={scooters} />
        </div>
      </div>
      <div className="lg:hidden">
        <CardHeroSingleScooter scooters={scooters} />
      </div>
    </div>
  );
};
