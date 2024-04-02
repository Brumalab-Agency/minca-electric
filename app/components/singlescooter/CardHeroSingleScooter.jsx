import { ubuntu, manrope } from "@/ui/fonts";
import Link from "next/link";
import TooltipScooter from "./TooltipScooter";


const CardHeroSingleScooter = ({ scooters }) => {
  const singleScooter = scooters;
  

  const items = singleScooter?.edges;
 

  return (
    <div className="h-[100%] w-full lg:w-[500px] lg:rounded-[10px] rounded-none bg-[#111] py-5 lg:py-2 relative z-10">
      {items?.map((item) => (
        <div className="relative p-4 lg:p-14">
          <div className="slogan-dots mb-4 flex items-center justify-between">
            <div>
            <small className={`${manrope.className} text-base text-white font-medium`}>{item.node.sliderProductos.anoVersion}</small>
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
                    <div className="-mt-1 cursor-pointer"><TooltipScooter tooltips={item.node.sliderProductos.tooltips}/></div>
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
          
          <Link
            href={`/especificaciones/${encodeURIComponent(item.node.sliderProductos.nombreProducto)}`}
            className="btn-scooter gird border-1 z-10 my-3 flex h-[52px] w-full place-items-center justify-center  rounded-[62px] border border-white bg-[#111] text-[16px] text-white   lg:h-[48px] lg:w-[191px] 2xl:w-[235px]"
          >
            Comprar Ahora
          </Link>
          <div className="Cupon w-full h-[150px] bg-[#F0F1EB] rounded-[5px] flex mt-6">
            <div className="w-[60%] h-[150px] border-r-2 border-dashed border-[#111] grid place-items-center">
              <div className={`${manrope.className }`}>
                <p className="text-base leading-[22px]">{item.node.sliderProductos.cuponTitulo1}</p>
                <p className="text-[24px] font-bold">{item.node.sliderProductos.cuponIntermedia}</p>
                <p className="text-base leading-[22px]">{item.node.sliderProductos.cuponTitulo2}</p>
                <div className="w-full h-[24px] bg-[#D9D9D9] rounded-[2px] flex items-center justify-center">
                  <p className="text-[12px] font-semibold text-center">Cupón: {item.node.sliderProductos.cuponNombre}</p>
                </div>
              </div>
            </div>
            <div className="w-[40%] h-[150px] grid place-items-center">
             
              <img className="w-[100px] h-auto rounded-[15px] p-[7px]" src={item.node.sliderProductos.cuponImg?.mediaItemUrl} alt="producto de descuento" style={{boxShadow: '-1px 5px 0px -3px rgba(0,0,0,0.79)'}}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardHeroSingleScooter;
