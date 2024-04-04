import { getBanner } from "@/lib/graphQLRequest";
import Image from "next/image";
import { manrope } from "@/ui/fonts";

export const HeroVideoSingleProduct = async ({titulo, tituloSecundarioNegrita, urlVideo, clases, ocultar}) => {
  const banner = await getBanner();
  return (
    <div className="heroVideo relative mt-16">
      <div className="">
        {/* PC */}
        <video className="hidden lg:block w-full h-[663px] object-cover  top-0" src={urlVideo} autoPlay muted loop />

        {/* Movil */}
        <video className="lg:hidden w-full h-[400px] object-cover  top-0" src={urlVideo} autoPlay muted loop />
      </div>
      <div className="overlay h-[400px] w-full bg-[#111]/50 absolute top-0 flex flex-col items-start justify-center p-4 lg:h-[663px] lg:px-[100px]">
        <div className="lg:flex lg:justify-between lg:w-full">
          <div
            className={`${manrope.className}  text-[50px] text-white grid lg:text-[90px]`}
          >
            <div className="flex flex-col justify-center items-start">
              <span className="font-light capitalize">
                {titulo}
              </span>
              <span className={`-mt-6 font-bold lg:-mt-8 uppercase ${clases}`}>
                {tituloSecundarioNegrita}
              </span>
            </div>
          </div>
          <div>
            <Image
            placeholder = 'empty'
              alt="publicidad"
              className={`hidden lg:block ${ocultar}`}
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