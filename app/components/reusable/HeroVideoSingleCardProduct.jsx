import { getBanner } from "@/lib/graphQLRequest";
import { ubuntu } from "@/ui/fonts";
import CardHeroSingleScooter from "../singlescooter/CardHeroSingleScooter";
import Image from "next/image";

export const HeroVideoSingleCarsProduct = ({urlVideo, scooters, }) => {
  

  return (
    <div id="up" className="heroVideo relative lg:mt-[150px]">
      <div className="">
      {/* PC */}

        {/* <video
          className="top-0 hidden h-[700px] w-full object-cover  lg:block"
          src={urlVideo}
          autoPlay
          muted
          loop
        /> */}

        {/* <img
        className="top-0 hidden h-[700px] w-full object-cover  lg:block"
        src={urlVideo.videoImgBannerPc.mediaItemUrl}
        alt="Imagen"

        /> */}
        <Image
          className="top-0 hidden h-[700px] w-full object-cover  lg:block"
          placeholder="empty"
          alt="imagen banner"
          src={urlVideo.videoImgBannerPc.mediaItemUrl}
          priority={true}
          width={390}
          height={400}
          style={{ objectFit: "cover" }}
        />


      {/* Movil */}
     
        {/* <video
          className="top-0 h-[400px] w-full object-cover  lg:hidden"
          src={urlVideo}
          autoPlay
          muted
          loop
        /> */}
    
        {/* <img
          className="top-0 h-[700px] w-full object-cover  lg:hidden"
          src={urlVideo.videoImgBannerMovil.mediaItemUrl}
          alt="Imagen"
        /> */}
        <Image
          className="top-0 h-[700px] w-full object-cover  lg:hidden"
          placeholder="empty"
          alt="imagen banner"
          src={urlVideo.videoImgBannerMovil.mediaItemUrl}
          priority={true}
          width={390}
          height={400}
          style={{ objectFit: "cover" }}
        />
     
    </div>
    <div className={` absolute top-0 flex h-300px w-full flex-col items-center justify-between p-4 lg:h-[700px] lg:flex-row lg:px-[100px]`}>
      <div className="overlaySingleProduct h-[128px] w-full absolute bottom-0 left-0"></div>
        <div className="flex w-full flex-col  justify-end h-[58%] lg:h-[90%] lg:w-[50%]"> 
          <p
            className={`${ubuntu.className} lg:text-center  text-[14px] text-white w-[73%] lg:w-full z-10`}
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
