import { getBanner } from "@/lib/graphQLRequest";
import Image from "next/image";
import { manrope } from "@/ui/fonts";

export const HeroVideoSingleProduct = async ({titulo, tituloSecundarioNegrita}) => {
  const banner = await getBanner();
  return (
    <div className="heroImagen relative lg:mt-20">
      <div className="mt-4">
        {/* PC */}
        <Image
            placeholder = 'empty'
              alt={alt}
              className="hidden lg:block"
              src={imagen}
              width={390}
              height={400}
            />

        {/* Movil */}
        <Image
            placeholder = 'empty'
              alt={alt}
              className="lg:hidden block"
              src={imagen}
              width={390}
              height={400}
            />
      </div>
      <div className="overlay h-[400px] w-full bg-[#111]/50 absolute top-0 flex flex-col items-start justify-center p-4 lg:h-[663px] lg:px-12">
        <div className="lg:flex lg:justify-between lg:w-full">
          <div
            className={`${manrope.className} antialiased text-[50px] text-white grid lg:text-[90px]`}
          >
            <div className="flex flex-col justify-center items-start">
              <span className="font-light capitalize">
                {titulo}
              </span>
              <span className="-mt-6 font-bold lg:-mt-8 uppercase">
                {tituloSecundarioNegrita}
              </span>
            </div>
          </div>
          <div>
            <Image
            placeholder = 'empty'
              alt="publicidad"
              className="hidden lg:block"
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
