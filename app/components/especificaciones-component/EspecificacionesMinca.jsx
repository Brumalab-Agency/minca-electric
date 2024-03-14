import Image from "next/image";
import { manrope, ubuntu } from "@/ui/fonts";
import { BotonRelativo } from "../botones/BotonRelativo";
import { TablaEspecificaciones } from "./TablaEspecificaciones";

export const EspecificacionesMinca = () => {
  const items = [
    {
      imagen: "/Scooter/Scooter - Minca Electric.png",
      nombreProducto: "Minca Scooter 350W",
    },
  ];

  const item = items[0];
  return (
    <div className="EspecificacionesMinca">
      <div className="lg:flex lg:justify-center justify-between items-center lg:px-[96px]">
        {/* Scooters */}
        <div className="h-auto w-full lg:flex flex-row-reverse lg:w-1/2">
          <div className="grid h-auto w-full place-items-center lg:flex lg:ml-4 lg:w-auto lg:mr-[50px]">
            <Image
              placeholder="empty"
              alt={item.nombreProducto}
              className="rounded-[20px] bg-[#F0EEED]"
              src={item.imagen}
              priority={true}
              width={358}
              height={290}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="mt-[13px] flex items-center justify-evenly lg:flex-col lg:justify-between lg:mt-0">
            <div>
              <Image
                placeholder="empty"
                alt={item.nombreProducto}
                className="rounded-[20px] border-2 lg:w-[110px] lg:h-[110px]"
                src={item.imagen}
                priority={true}
                width={111}
                height={106}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <Image
                placeholder="empty"
                alt={item.nombreProducto}
                className="rounded-[20px] border-2 lg:w-[110px] lg:h-[110px]"
                src={item.imagen}
                priority={true}
                width={111}
                height={106}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <Image
                placeholder="empty"
                alt={item.nombreProducto}
                className="rounded-[20px] border-2 lg:w-[110px] lg:h-[110px]"
                src={item.imagen}
                priority={true}
                width={111}
                height={106}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          {/* Titulo y descripcion */}
          <div className="flex justify-between p-4 mt-[7px]">
            <div className="flex flex-col justify-center">
              <h2
                className={`${manrope.className} mb-1 text-[24px] font-bold uppercase text-[#111111] antialiased lg:text-[42px] lg:leading-[28px]`}
              >
                Minca Scooter 350W
              </h2>
              <p
                className={`${manrope.className} mb-1 text-[16px] font-semibold uppercase text-[#111111] antialiased lg:mt-4 lg:text-[26px] lg:font-medium`}
              >
                LAST MILE MODE
              </p>
              <div className="my-2 flex items-center gap-3 lg:mt-6 lg:gap-4">
                <div
                  className={`${manrope.className} text-[24px] font-bold text-[#111111] antialiased lg:text-[26px]`}
                >
                  $2.100.000
                </div>
                <div
                  className={`${manrope.className} text-[24px] font-bold text-[#111111] antialiased opacity-50 lg:text-[26px]`}
                >
                  $2.500.000
                </div>
                <span className="items-center justify-center rounded-full bg-[#FF3333] bg-opacity-10 px-2.5 py-0.5 text-[#FF3333] lg:inline-flex lg:h-8 lg:px-[14px] lg:py-[6px]">
                  <p
                    className={`${manrope.className} whitespace-nowrap text-sm antialiased `}
                  >
                    -15%
                  </p>
                </span>
              </div>
              <p
                className={`${ubuntu.className} text-[14px] font-normal leading-[15px] text-[#42454A] antialiased lg:mt-5 lg:w-[342px] lg:text-[16px] lg:leading-[25px]`}
              >
                Alto Rendimiento en un vehículo liviano, suspensión delantera y
                trasera diseñada para conquistar tu ciudad con comodidad.
              </p>
              <hr className="mt-5" />
            </div>
            {/* /Scooter/btn-slider-left-pc.png */}
          </div>
          {/* Btn y contador */}
          <div className="contador-btnAddCart flex items-center w-full gap-4 px-4 lg:w-[85%] 2xl:w-[60%]">
            <div>
              <label for="Quantity" className="sr-only">
                {" "}
                Quantity{" "}
              </label>
              <div className="btn-aumentarDisminuir flex items-center gap-1 bg-[#F0F0F0] w-[100px] h-[44px] rounded-[62px]">
                <button
                  type="button"
                  className="size-10 text-[25px] leading-10 text-gray-600 transition"
                >
                  -
                </button>
                <input
                  type="number"
                  id="Quantity"
                  value="1"
                  className="h-10 w-2 bg-[#F0F0F0] text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />
                <button
                  type="button"
                  className="size-10 text-[25px] leading-10 text-gray-600 transition"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex-col justify-center lg:flex w-full">
              <BotonRelativo param="Add to Cart" clases="bg-[#111] text-white lg:w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Tabla de especificaciones */}
      <TablaEspecificaciones/>      
    </div>
  );
};
