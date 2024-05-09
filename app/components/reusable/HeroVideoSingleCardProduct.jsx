import { ubuntu } from "@/ui/fonts";
import CardHeroSingleScooter from "../singlescooter/CardHeroSingleScooter";

export const HeroVideoSingleCarsProduct = ({ urlVideo, scooters }) => {
  const mediaItemUrl = urlVideo?.videoImgBannerPc?.mediaItemUrl;


  return (
    <div className="heroVideo relative lg:mt-[125px]">
      <div>
        {/* PC */}

        {/* <video
          className="top-0 hidden h-[700px] w-full object-cover  lg:block"
          src={urlVideo}
          autoPlay
          muted
          loop
        /> */}

        {mediaItemUrl && (
          <div>
            <img
              className="top-0 hidden h-[700px] w-full object-cover  lg:block 2xl:h-[900px]"
              src={mediaItemUrl}
              alt="imagen banner"
            />

            {/* Movil */}

            <img
              className="top-0 h-[700px] w-full object-cover  lg:hidden"
              src={mediaItemUrl}
              alt="Imagen"
            />
          </div>
        )}
      </div>
      <div
        className={` h-300px absolute bottom-[39%] flex w-full flex-col items-center justify-between p-4 lg:top-0 lg:h-[700px] lg:flex-row lg:px-[100px] 2xl:h-[900px]`}
      >
        <div className="overlaySingleProduct absolute bottom-[0px] left-0 h-[128px] w-full"></div>
        <div className="flex h-[58%] w-full  flex-col justify-end lg:h-[90%] lg:w-[50%]">
          <p
            className={`${ubuntu.className} z-10  w-[73%] text-[14px] text-white lg:w-full lg:text-left`}
          >
            El valor final de la scooter no incluye accesorios ni mantenimiento
            preventivo*
          </p>
          {console.log(scooters?.edges[0]?.node.sliderProductos.tooltips)}
          {/* <div className="bg-white cursor-pointer z-50"><TooltipScooter tooltips={scooters?.edges[0].node.sliderProductos.tooltips}/></div> */}
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
