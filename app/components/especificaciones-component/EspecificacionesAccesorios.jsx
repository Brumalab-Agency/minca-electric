import Image from "next/image";
import { manrope, ubuntu } from "@/ui/fonts";
import { ProductosWoocommerce } from "@/lib/graphQLRequest";
import AddToCart from "../cart/AddToCart";
import { BtnQty } from "./BtnQty";



export const EspecificacionesAccesorios = async (accesorios) => {
  const accesoriosWoocommerce = accesorios;
  const items = accesoriosWoocommerce.accesorios.products.nodes;
  const datosWoocommerce = await ProductosWoocommerce();
  const dataWoocommercer = datosWoocommerce.products.nodes;
  const productoEncontrado = datosWoocommerce.products.nodes.find(
    (producto) => producto.databaseId === items[0].productId,
  );

  return (
    <div className="EspecificacionesAccesorios">
      {items.map((item, index) => (
        <div className="items-center justify-between lg:flex lg:justify-center lg:px-[96px] lg:py-[70px]">
          {/* Accesorios */}
          <div className="h-auto w-full flex-row-reverse lg:flex lg:w-1/2">
            <div className="grid h-auto w-full place-items-center lg:ml-4 lg:mr-[50px] lg:flex lg:w-auto">
              <Image
                placeholder="empty"
                alt={item.nombreProducto}
                className="rounded-[20px] bg-[#F0EEED]"
                src={item.image.mediaItemUrl}
                priority={true}
                width={358}
                height={290}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="mt-[13px] flex items-center justify-evenly lg:mt-0 lg:flex-col lg:justify-between">
              <div>
                <Image
                  placeholder="empty"
                  alt={item.nombreProducto}
                  className="rounded-[20px] border-2 lg:h-[110px] lg:w-[110px]"
                  src={item.image.mediaItemUrl}
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
                  className="rounded-[20px] border-2 lg:h-[110px] lg:w-[110px]"
                  src={item.image.mediaItemUrl}
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
                  className="rounded-[20px] border-2 lg:h-[110px] lg:w-[110px]"
                  src={item.image.mediaItemUrl}
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
            <div className="flex justify-between p-4 ">
              <div className="flex flex-col justify-center">
                <h2
                  className={`${manrope.className} mb-1 text-[24px] font-bold uppercase text-[#111111] antialiased lg:text-[42px] lg:leading-[28px]`}
                >
                  {item.name}
                </h2>
                <div className="flex items-center gap-3 lg:mt-6 lg:gap-4">
                  <div
                    className={`${manrope.className} text-[24px] font-bold text-[#111111] antialiased lg:text-[26px]`}
                  >
                    {item.price}
                  </div>
                </div>
                <p
                  className={`${ubuntu.className} text-[14px] font-normal leading-[15px] text-[#42454A] antialiased lg:mt-5 lg:w-[342px] lg:text-[16px] lg:leading-[25px]`}
                >
                  {item.description}
                </p>
                <hr className="mt-5" />
                {/* <div className="selector-color mt-2">
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
                </div> */}
              </div>
              {/* /Scooter/btn-slider-left-pc.png */}
            </div>
            {/* Btn y contador */}
            <div className="contador-btnAddCart flex w-full items-center gap-4 px-4 lg:w-[85%] 2xl:w-[60%]">
              {/* <div>
                <label for="Quantity" className="sr-only">
                  {" "}
                  Quantity{" "}
                </label>
                <div className="flex h-[44px] w-[100px] items-center gap-1 rounded-[62px] bg-[#F0F0F0]">
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
              </div> */}
              <BtnQty/>
              <div className="w-full flex-col justify-center lg:flex">
                {productoEncontrado ? (
                  <AddToCart
                    key={productoEncontrado.databaseId}
                    producto={productoEncontrado}
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
