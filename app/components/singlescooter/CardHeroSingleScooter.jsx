import { ubuntu, manrope } from "@/ui/fonts";
import Link from "next/link";
import TooltipScooter from "./TooltipScooter";

const CardHeroSingleScooter = ({ scooters }) => {
  const singleScooter = scooters;
  const items = singleScooter?.edges;
  let path = "";
  const paths = ["Minca 350W", "Minca 500W‎", "Minca 800W‎‎", "Minca 1600W‎"];

  items.map((item) => {
    if (item.node.sliderProductos.nombreProducto === paths[0]) {
      path = "Especificaciones_Scooter_Electrico_Minca_350W";
    }

    if (item.node.sliderProductos.nombreProducto === paths[1]) {
      path = "Especificaciones_Scooter_Electrico_Minca_500W";
    }
    if (item.node.sliderProductos.nombreProducto === paths[2]) {
      path = "Especificaciones_Scooter_Electrico_Minca_800W";
    }

    if (item.node.sliderProductos.nombreProducto === paths[3]) {
      path = "Especificaciones_Scooter_Electrico_Minca_1600W";
    }
  });

  return (
    <div className="relative z-10 h-[100%] w-full rounded-none bg-[#111] py-5 lg:w-[500px] lg:rounded-[10px] lg:py-2">
      {items?.map((item) => (
        <div className="relative p-4 lg:px-10 lg:py-3 2xl:p-14">
          <div className="slogan-dots mb-4 flex items-center justify-between">
            <div>
              <small
                className={`${manrope.className} text-base font-medium text-white`}
              >
                {item.node.sliderProductos.anoVersion}
              </small>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <div className="flex flex-col justify-center">
                <h2
                  className={`${manrope.className} mb-1 text-[16px] font-bold uppercase text-[#fff]  lg:text-[42px] lg:leading-[45px]`}
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
                  
                  {items?.map((item) => (
                    <div className="flex flex-col justify-center">
                      <div className="my-2">
                        <div className="flex items-center justify-around md:gap-x-8">
                          <div>
                            <p className="font-bold text-white">Antes:</p>
                            <p className="text-xl text-white line-through">
                              {item.node.sliderProductos.precioRebajado}
                            </p>
                          </div>
                          <div>
                            <p className="font-bold text-white">Ahora:</p>
                            <p className="text-xl text-white">
                              {item.node.sliderProductos.precioActual}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
            href={`/especificaciones/${encodeURIComponent(path)}`}
            className="btn-scooter gird border-1 z-10 my-3 flex h-[52px] w-full place-items-center justify-center  rounded-[62px] border border-white bg-[#111] text-[16px] text-white   lg:h-[48px] lg:w-[191px] 2xl:w-[235px]"
          >
            Comprar Ahora
          </Link>
          <div className="Cupon mt-6 flex h-[150px] w-full rounded-[5px] bg-[#F0F1EB]">
            <div className="grid h-[150px] w-[60%] place-items-center border-r-2 border-dashed border-[#111]">
              <div className={`${manrope.className}`}>
                <p className="text-base leading-[22px]">
                  {item.node.sliderProductos.cuponTitulo1}
                </p>
                <p className="text-[24px] font-bold">
                  {item.node.sliderProductos.cuponIntermedia}
                </p>
                <p className="text-base leading-[22px]">
                  {item.node.sliderProductos.cuponTitulo2}
                </p>
                <div className="flex h-[24px] w-full items-center justify-center rounded-[2px] bg-[#D9D9D9]">
                  <p className="text-center text-[12px] font-semibold">
                    Cupón: {item.node.sliderProductos.cuponNombre}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid h-[150px] w-[40%] place-items-center">
              <img
                className="h-auto w-[100px] rounded-[15px] p-[7px]"
                src={item.node.sliderProductos.cuponImg?.mediaItemUrl}
                alt="producto de descuento"
                style={{ boxShadow: "-1px 5px 0px -3px rgba(0,0,0,0.79)" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardHeroSingleScooter;
