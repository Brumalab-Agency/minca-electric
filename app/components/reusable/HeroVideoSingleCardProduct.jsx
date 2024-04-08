import { ubuntu } from "@/ui/fonts";
import CardHeroSingleScooter from "../singlescooter/CardHeroSingleScooter";


export const HeroVideoSingleCarsProduct = ({urlVideo, scooters, }) => {
  

  return (
    <div className="heroVideo relative lg:mt-[125px]">
      <div >
      {/* PC */}

        {/* <video
          className="top-0 hidden h-[700px] w-full object-cover  lg:block"
          src={urlVideo}
          autoPlay
          muted
          loop
        /> */}
        
        <img className="top-0 hidden h-[700px] w-full object-cover  lg:block 2xl:h-[900px]" src={urlVideo?.videoImgBannerPc.mediaItemUrl} alt="imagen banner"/>


      {/* Movil */}
     
        {/* <video
          className="top-0 h-[400px] w-full object-cover  lg:hidden"
          src={urlVideo}
          autoPlay
          muted
          loop
        /> */}
    
        <img
          className="top-0 h-[700px] w-full object-cover  lg:hidden"
          src={urlVideo?.videoImgBannerMovil.mediaItemUrl}
          alt="Imagen"
        />
      
     
    </div>
    <div className={` absolute bottom-[39%] lg:top-0 flex h-300px w-full flex-col items-center justify-between p-4 lg:h-[700px] lg:flex-row lg:px-[100px] 2xl:h-[900px]`}>
      <div className="overlaySingleProduct h-[128px] w-full absolute bottom-[0px] left-0"></div>
        <div className="flex w-full flex-col  justify-end h-[58%] lg:h-[90%] lg:w-[50%]"> 
          <p
            className={`${ubuntu.className} lg:text-left  text-[14px] text-white w-[73%] lg:w-full z-10`}
          >
            El valor final de la scooter no incluye accesorios ni mantenimiento
            preventivo*
          </p>
          {console.log(scooters?.edges[0]?.node.sliderProductos.tooltips)}
          {/* <div className="bg-white cursor-pointer z-50"><TooltipScooter tooltips={scooters?.edges[0].node.sliderProductos.tooltips}/></div> */}
        </div>
        <div className="lg:grid h-auto w-full place-items-end hidden lg:w-[50%]">
          <CardHeroSingleScooter scooters={scooters} />
        </div>
      </div>
      <div className="lg:hidden">
        <CardHeroSingleScooter scooters={scooters} />
      </div>
    </div>
  );
};
