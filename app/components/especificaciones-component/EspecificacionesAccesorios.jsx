import Image from "next/image";
import { manrope, ubuntu } from "@/ui/fonts";
import { ProductosWoocommerce } from "@/lib/graphQLRequest";
import AddToCart from "../cart/AddToCart";
import { BtnQty } from "./BtnQty";
import LightboxComponent from "../lightbox/LightboxComponent";



export const EspecificacionesAccesorios = async (accesorios) => {
  const accesoriosWoocommerce = accesorios;
  const items = accesoriosWoocommerce.accesorios.products.nodes;
  const datosWoocommerce = await ProductosWoocommerce();
  const dataWoocommercer = datosWoocommerce.products.nodes;
  const productoEncontrado = datosWoocommerce.products.nodes.find(
    (producto) => producto.databaseId === items[0].productId,
  );

  const separadorDeMiles = (numero) => {
    let partesNumero = numero.toString().split('.');
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return partesNumero.join('.');
  }


  return (
    <div className="EspecificacionesAccesorios mb-8">
      {items.map((item, index) => (
        <div className=" justify-between lg:flex lg:justify-center lg:px-[96px] lg:py-[70px]">
          {/* Accesorios */}
          <LightboxComponent item={item}/>
          <div className="lg:w-[50%]">
            {/* Titulo y descripcion */}
            <div className="flex justify-between">
              <div className="flex flex-col justify-center">
                <h2
                  className={`${manrope.className} mb-1 text-[24px] font-bold uppercase text-[#111111]  lg:text-[42px] lg:leading-[28px]`}
                >
                  {item.name}
                </h2>
                <div className="flex items-center gap-3 lg:mt-6 lg:gap-4">
                  <div
                    className={`${manrope.className} text-[24px] font-bold text-[#111111]  lg:text-[26px]`}
                  >
                    $ { separadorDeMiles(item.price)}
                  </div>
                </div>
                <p
                  className={`${ubuntu.className} text-[14px] font-normal leading-[15px] text-[#42454A]  lg:mt-5 lg:w-[90%] lg:text-[16px] lg:leading-[25px]`}
                >
                  {item.description}
                </p>
                <hr className="mt-5 lg:w-[70%]" />
                <div className="selector-color mt-2">
                  <p className={`${ubuntu.className} text-base text-[#111]/60`}>
                    Select Colors
                  </p>
                  <div className="flex gap-2 pt-1">
                    <div className="colores grid h-[37px] w-[37px] place-items-center rounded-[50%] bg-[#242939]">
                      <img
                        src="/especificaciones-accesorios/check.png"
                        alt="check"
                      />
                    </div>
                    <div className="colores h-[37px] w-[37px] rounded-[50%] bg-[#111]"></div>
                  </div>
                </div>
                <hr className="mt-5" />
                <div className="selector-talla mt-2">
                  <p className={`${ubuntu.className} text-base text-[#111]/60`}>
                    Talla
                  </p>
                  <div className="flex gap-2 pt-1">
                    <div className="colores grid h-[42px] w-[58px] place-items-center rounded-[62px] bg-[#F0F0F0] text-[#111]/60">
                      <p>L</p>
                    </div>
                    <div className="colores grid h-[42px] w-[58px] place-items-center rounded-[62px] bg-[#111] text-base text-white">
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Scooter/btn-slider-left-pc.png */}
            </div>
            {/* Btn y contador */}
            <div className="contador-btnAddCart flex w-full items-center gap-4 lg:w-[85%] 2xl:w-[70%] mt-2">
              <BtnQty/>
              <div className="w-full flex-col justify-center lg:flex">
                {productoEncontrado ? (
                  <AddToCart
                    key={productoEncontrado.databaseId}
                    producto={productoEncontrado}
                    clases="lg:w-[80%] w-full"
                  />
                ) : (
                  <p>No se encontró el producto.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
