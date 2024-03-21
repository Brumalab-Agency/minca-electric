import { getBanner } from "../../lib/graphQLRequest";
import Image from "next/image";
import { manrope } from "../../ui/fonts";

export const HeroImagenSec = async () => {
  const banner = await getBanner();
  return (
    <div className="heroImagen relative lg:mt-20">
      <div className="mt-4">
        
        {/* PC */}
        {banner[0].node.banner.videoBannerPc && (
          <video
            className="top-0 hidden h-[663px] w-full object-cover lg:block"
            src={banner[0].node.banner.videoBannerPc.mediaItemUrl}
            autoPlay
            muted
            loop
          />
        )}

        {/* Movil */}
        {banner[0].node.banner.videoBannerPc && (
          <video
            className="top-0 h-[400px] w-full object-cover lg:hidden"
            src={banner[0].node.banner.videoBannerPc.mediaItemUrl}
            autoPlay
            muted
            loop
          />
        )}
      </div>
      <div className="overlay absolute top-0 flex h-[400px] w-full flex-col items-start justify-center bg-[#111]/50 p-4 lg:h-[663px] lg:px-[100px]">
        <div className="lg:flex lg:w-full lg:justify-between">
          <div
            className={`${manrope.className} grid text-[50px] text-white  lg:text-[64px] 2xl:text-[64px]`}
          >
            <div className="flex flex-col items-start justify-center">
              <span className="font-light">
                {banner[0].node.banner.titleBanner}
              </span>
              <span className="-mt-6 font-bold lg:-mt-8">
                {banner[0].node.banner.nombreBannerNegrita}
              </span>
            </div>
          </div>
          <div>
            <Image
              placeholder="empty"
              alt="publicidad"
              className="hidden lg:block logo-minca-m shadow-none"
              src="/Logo líneas - Minca Electric.png"
              width={390}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
