import { ubuntu, manrope } from "@/ui/fonts";
import Link from "next/link";
import TooltipScooter from "./TooltipScooter";


const CardHeroSingleScooter = ({ scooters }) => {
  const singleScooter = scooters;

  const items = singleScooter.edges;
  console.log(items);
  return (
    <div className="h-[100%] w-[500px] rounded-[10px] bg-[#111]">
      {items.map((item) => (
        <div className="relative p-4 lg:p-14">
          <div className="slogan-dots mb-4 flex items-center justify-between">
            <div>
              <p className={`${ubuntu.className} text-[14px] text-[#fff] `}>
                {item.node.sliderProductos.slogan}
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <div className="flex flex-col justify-center">
                <h2
                  className={`${manrope.className} mb-1 text-[16px] font-bold uppercase text-[#fff]  lg:text-[42px] lg:leading-[35px]`}
                >
                  {item.node.sliderProductos.nombreProducto}
                </h2>
                <p
                  className={`${manrope.className} mb-1 text-[12px] font-normal uppercase text-[#fff]  lg:mt-4 lg:text-[26px] lg:font-medium`}
                >
                  {item.node.sliderProductos.subtitulo}
                </p>
                <p
                  className={`${ubuntu.className} text-[13px] font-normal leading-[15px] text-[#fff]  lg:mt-5 lg:w-[342px] lg:text-[16px] lg:leading-[25px]`}
                >
                  {item.node.sliderProductos.description}
                </p>
                <div className="my-2 flex items-center gap-3 lg:mt-6 lg:gap-4">
                  <div
                    className={`${manrope.className} text-[14px] font-bold text-[#fff] flex items-center gap-2`}
                  >
                    Desde {item.node.sliderProductos.precioActual}*
                    <div className="-mt-1"><TooltipScooter/></div>
                  </div>
                </div>
              </div>

              {/* /Scooter/btn-slider-left-pc.png */}
              <div className="hidden flex-col justify-center lg:invisible lg:flex">
                {/* No existe boton, este es controlado por el componente carrusel, este espacio es de relleno */}
              </div>
            </div>
          </div>
          {/* ********** */}
          <div className="contenedor-cards-arrows relative">
            <div className="scroll-indicator m-auto"></div>
          </div>
          <Link
            href={`/especificaciones/${encodeURIComponent(item.node.sliderProductos.nombreProducto)}`}
            className="btn-scooter gird border-1 z-10 my-3 flex h-[52px] w-full place-items-center justify-center  rounded-[62px] border border-white bg-[#111] text-[16px] text-white   lg:h-[48px] lg:w-[191px] 2xl:w-[235px]"
          >
            Comprar Ahora
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardHeroSingleScooter;
