import { manrope, ubuntu } from "@/ui/fonts";
import AddToCart from "../cart/AddToCart";
import { BtnQty } from "./BtnQty";
import ReactImagenGalleryLupa from "../react-image-gallery/ReactImagenGalleryLupa";
import ReactImagenGalleryLupaEspecificaciones from "../react-image-gallery/ReactImagenGalleryLupaEspecificaciones";
import { TablaEspecificaciones } from "./TablaEspecificaciones";
import Link from "next/link";
import Image from "next/image";

export const EspecificacionesMincaNew = async (scooters) => {
  let content;

  const items = scooters.scooters.productTypes.nodes[0].products.nodes[0];
  const item = items;

  console.log(item);

  content = (
    <div className="EspecificacionesAccesorios Productos-SIMPLES mb-8">
      <div className=" justify-between p-4 lg:flex lg:justify-start lg:px-[100px] lg:py-[50px]">
        {/* Accesorios */}
        <ReactImagenGalleryLupaEspecificaciones items={item} />
        <div className="lg:w-[50%]">
          {/* Titulo y descripcion */}
          <div className="ml-7 flex justify-between">
            <div className="flex flex-col justify-center">
              <h2
                className={`${manrope.className} mb-1 text-[24px] font-bold uppercase text-[#111111]  lg:text-[32px] lg:leading-[28px]`}
              >
                {item.title}
              </h2>
              <p
                className={`${manrope.className} mb-1 text-[12px] font-normal uppercase text-[#111111]  lg:mt-4 lg:text-[26px] lg:font-medium`}
              >
                {item.sliderProductos.subtitulo}
              </p>
              <div className="flex items-center gap-3 lg:mt-6 lg:gap-4">
                <div
                  className={`${manrope.className} text-[24px] font-bold text-[#111111]  lg:text-[26px]`}
                >
                  <p className="text-[14px]">Antes</p>
                  {item.sliderProductos.precioActual}
                </div>
                <div
                  className={`${manrope.className} text-[24px] font-bold text-[#111111]/60  lg:text-[26px]`}
                >
                  <p className="text-[14px]">Ahora</p>
                  <del>{item.sliderProductos.precioRebajado}</del>
                </div>
                <span className="items-center justify-center rounded-full bg-[#FF3333] bg-opacity-10 px-2.5 py-0.5 text-[#FF3333] lg:inline-flex lg:h-8 lg:px-[14px] lg:py-[6px]">
                  <p
                    className={`${manrope.className} whitespace-nowrap text-sm  `}
                  >
                    {item.sliderProductos.descuento}
                  </p>
                </span>
              </div>
              <p
                className={`${ubuntu.className} text-[14px] font-normal leading-[15px] text-[#42454A]  lg:mt-5 lg:w-[90%] lg:text-[16px] lg:leading-[25px]`}
              >
                {item.sliderProductos.description}
              </p>
              <Link
                href="#"
                className="relative mt-4 flex h-[44px] w-[355px] items-center justify-center gap-1 rounded-[5px] bg-[#F0EEED] text-[10px]"
              >
                <Image
                  placeholder="empty"
                  className="logoCircular"
                  src="/addicirculo.svg"
                  width={33}
                  height={33}
                  alt="publicidad"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
                <p className="ml-2">Paga a crédito con</p>
                <Image
                  placeholder="empty"
                  className="logoADDI"
                  src="/addilogo.svg"
                  width={23}
                  height={9}
                  alt="publicidad"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
                <p>
                  <strong>hasta 6 cuotas.</strong>
                </p>
                <p className="underline">Revisa si calificas</p>
              </Link>
              <hr className="mt-5 lg:w-[70%]" />
            </div>

            {/* /Scooter/btn-slider-left-pc.png */}
          </div>
          {/* Btn y contador */}
          <div className="contador-btnAddCart ml-7 mt-4 flex w-full items-center gap-4 lg:w-[85%] 2xl:w-[70%]">
            <BtnQty />
            <div className="w-full flex-col justify-center lg:flex">
              <AddToCart
                key={item.databaseId}
                producto={item}
                clases="lg:w-[80%] w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <TablaEspecificaciones scooters={scooters} />
        <div className="lg:pl-[16px]">
        <div className="mt-16 flex items-center justify-between px-4 lg:mt-[80px] ">
            <div className="lg:w-full">
              <h2 className="border-b-2 border-[#111] lg:mr-[30px]">
                Información adicional
              </h2>
            </div>
          </div>
          <video
            className="top-0 hidden h-[663px] w-full object-cover  lg:block"
            src=""
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </div>
  );

  return <div>{content}</div>;
};
