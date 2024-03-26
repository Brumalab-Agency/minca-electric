"use client";
import { useState } from "react";
import { manrope, ubuntu } from "@/ui/fonts";
import { BtnQty } from "../especificaciones-component/BtnQty";
import AddToCart from "../cart/AddToCart";
import LightboxComponent from "../lightbox/LightboxComponent";

const AccesorioVariable = (item) => {
  
 
  const esCascoMinca = item.item.some(
    (item) => item.name === "Casco Integral Minca" && item.type === "VARIABLE"
  );

  if (esCascoMinca) {
    // Filtrar el producto "Casco Integral Minca" y sus variaciones
    const cascoMinca = item.item.find(
      (item) => item.name === "Casco Integral Minca"
    );

  const items = cascoMinca.variations.nodes;

 

  const [currentProductIndex, setCurrentProductIndex] = useState(1);


  const handleChangeProduct = (index) => {
    setCurrentProductIndex(index);
  };

  const separadorDeMiles = (numero) => {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          style={{ display: index === currentProductIndex ? "block" : "none" }}
        >
          <div className="EspecificacionesAccesorios Productos-VARIABLE mb-8">
            <div className=" justify-between lg:flex lg:justify-center lg:px-[96px] lg:py-[70px]">
              {/* Accesorios */}
               <LightboxComponent item={item} />
              <div className="lg:w-[50%]">
                {/* Titulo y descripcion */}
                <div className="flex justify-between">
                  <div className="flex flex-col justify-center">
                    <h2
                      className={`${manrope.className} mb-1 text-[24px] font-bold uppercase text-[#111111]  lg:text-[42px] lg:leading-[28px]`}
                    >
                      {item.name.slice(0, item.name.indexOf('-'))}
                      {/* {item.name} */}
                    </h2>
                    <div className="flex items-center gap-3 lg:mt-6 lg:gap-4">
                      <div
                        className={`${manrope.className} text-[24px] font-bold text-[#111111]  lg:text-[26px]`}
                      >
                         $ {separadorDeMiles(item?.price)}
                      </div>
                    </div>
                    <p
                      className={`${ubuntu.className} text-[14px] font-normal leading-[15px] text-[#42454A]  lg:mt-5 lg:w-[90%] lg:text-[16px] lg:leading-[25px]`}
                    >
                      {item.description}
                    </p>
                    <hr className="mt-5 lg:w-[70%]" />
                    <div className="selector-color mt-2">
                      <p
                        className={`${ubuntu.className} text-base text-[#111]/60`}
                      >
                        Seleccciona Talla y Color
                      </p>
                      {/* Btn colores */}
                      <div className="flex gap-2 pt-1">
                        {/* color azul L */}
                        <button
                          onClick={() => handleChangeProduct(3)}
                          className="colores h-[37px] w-[37px] rounded-[50%] bg-[#242939] text-white btn-click-highlight"
                        >
                          L
                        </button>
                        {/* color negro L */}
                        <button
                          onClick={() => handleChangeProduct(1)}
                          className="colores h-[37px] w-[37px] rounded-[50%] bg-[#111] text-white btn-click-highlight"
                        >L</button>
                        {/* color azul M */}
                        <button
                          onClick={() => handleChangeProduct(0)}
                          className="colores h-[37px] w-[37px] rounded-[50%] bg-[#242939] text-white btn-click-highlight"
                        >M</button>
                        {/* color negro M */}
                        <button
                          onClick={() => handleChangeProduct(2)}
                          className="colores h-[37px] w-[37px] rounded-[50%] bg-[#111] text-white btn-click-highlight"
                        >M</button>
                      </div>
                    </div>

                    {/* <hr className="mt-5" />
                    <div className="selector-talla mt-2">
                      <p
                        className={`${ubuntu.className} text-base text-[#111]/60`}
                      >
                        Talla
                      </p>
                      
                      <div className="flex gap-2 pt-1">
                        <button
                          onClick={() => handleChangeProduct(2)}
                          className="colores grid h-[42px] w-[58px] place-items-center rounded-[62px] bg-[#F0F0F0] text-[#111]/60"
                        >
                          <p>L</p>
                        </button>
                        <button
                          onClick={() => handleChangeProduct(3)}
                          className="colores grid h-[42px] w-[58px] place-items-center rounded-[62px] bg-[#111] text-base text-white"
                        >
                          <p>M</p>
                        </button>
                      </div>
                    </div> */}
                  </div>
                  {/* /Scooter/btn-slider-left-pc.png */}
                </div>
                {/* Btn de Producto Variable y contador */}
                <div className="contador-btnAddCart mt-2 flex w-full items-center gap-4 lg:w-[85%] 2xl:w-[70%]">
                  <BtnQty />
                  <div className="w-full flex-col justify-center lg:flex">
                    <AddToCart
                      key={items[currentProductIndex].databaseId}
                      producto={items[currentProductIndex]}
                      clases="lg:w-[80%] w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
}

export default AccesorioVariable;
