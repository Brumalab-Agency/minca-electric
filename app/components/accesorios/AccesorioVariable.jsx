"use client";
import { useState } from "react";
import { manrope, ubuntu } from "@/ui/fonts";
import { BtnQty } from "../especificaciones-component/BtnQty";
import AddToCart from "../cart/AddToCart";
import CheckIcon from "../svgSeleccion/CheckIcon";
import XIcon from "../svgSeleccion/XIcon";
import ReactImagenGalleryLupa from "../react-image-gallery/ReactImagenGalleryLupa";

const AccesorioVariable = (item) => {
  const [selectedOptions, setSelectedOptions] = useState({
    sizes: [],
    colors: [],
  });

  console.log(selectedOptions)

  const [currentVariation, setCurrentVariation] = useState(null);

  console.log(currentVariation)

  const [isColorSelected, setIsColorSelected] = useState(false);

  const esCascoMinca = item.item.some(
    (item) => item.name === "Casco Integral Minca" && item.type === "VARIABLE",
  );

  if (esCascoMinca) {
    const cascoMinca = item.item.find(
      (item) => item.name === "Casco Integral Minca",
    );

    const items = cascoMinca;

    const [currentProductIndex, setCurrentProductIndex] = useState(1);

    const getSelectedVariation = (items, sizes) => {
      return (
        items.variations.nodes.find((variation) => {
          const variationSize = variation.attributes.nodes.find(
            (attr) => attr.name === "talla",
          )?.value;
          return (
            sizes.includes(variationSize)
          );
        }) || null
      );
    };

    const handleSizeSelection = (size) => {
      setSelectedOptions((prevOptions) => {
        const { sizes } = prevOptions;
        let updatedSizes;

        if (sizes.includes(size)) {
          updatedSizes = sizes.filter((s) => s !== size);
        } else {
          updatedSizes = [size];
        }

        console.log(updatedSizes)
        const selectedVariation = getSelectedVariation(
          items,
          updatedSizes,
        );
        console.log(selectedVariation)
        setCurrentVariation(selectedVariation);
        return { ...prevOptions, sizes: updatedSizes };
      });
    };

    /* const handleColorSelection = (color) => {
      setSelectedOptions((prevOptions) => {
        const { sizes, colors } = prevOptions;
        let updatedColors;

        if (colors.includes(color)) {
          updatedColors = colors.filter((c) => c !== color);
        } else {
          updatedColors = [color];
        }

        const selectedVariation = getSelectedVariation(
          items,
          sizes,
          updatedColors,
        );
        setCurrentVariation(selectedVariation);
        setIsColorSelected(updatedColors.length > 0);
        return { ...prevOptions, colors: updatedColors };
      });
    }; */

    const separadorDeMiles = (numero) => {
      let partesNumero = numero.toString().split(".");
      partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return partesNumero.join(".");
    };

    return (
      <div>
        {items.variations.nodes.map((item, index) => (
          <div
            style={{
              display: index === currentProductIndex ? "block" : "none",
            }}
          >
            <div className="EspecificacionesAccesorios Productos-VARIABLE mb-8 p-4">
              <div className=" justify-between lg:flex lg:justify-start lg:px-[75px] lg:py-[50px]">
                {/* Accesorios */}
                <ReactImagenGalleryLupa items={items} />
                <div className="lg:w-[50%]">
                  {/* Titulo y descripcion */}
                  <div className="flex justify-between">
                    <div className="flex flex-col justify-center">
                      <h2
                        className={`${manrope.className} mb-1 text-[24px] font-bold uppercase text-[#111111]  lg:text-[42px] lg:leading-[28px]`}
                      >
                        {item.name.slice(0, item.name.indexOf("-"))}
                        {/* {item.name} */}
                      </h2>
                      <p
                        className={`${ubuntu.className} text-[14px] font-normal leading-[15px] text-[#42454A]  lg:mt-5 lg:w-[90%] lg:text-[16px] lg:leading-[25px]`}
                      >
                        {item.description}
                      </p>
                      <div className="flex items-center gap-3 lg:mt-6 lg:gap-4">
                        <div
                          className={`${manrope.className} text-[24px] font-bold text-[#111111]  lg:text-[26px]`}
                        >
                          $ {separadorDeMiles(item?.price)}
                        </div>
                      </div>
                      <addi-widget price={item?.price} ally-slug="mincaelectric-ecommerce"></addi-widget>
                      <div className="selector-color mt-2">
                        {/* <p
                          className={`${ubuntu.className} text-base text-[#111]/60`}
                        >
                          Color
                        </p> */}
                        {/* {/* Btn colores 
                        <div className="flex gap-2 pt-1">
                          {/* color negro L 
                          <div>
                            <button
                              onClick={() => handleColorSelection("Negro")}
                              className="colores  relative grid h-[37px] w-[37px] place-items-center rounded-[50%] bg-[#111] text-white"
                            >
                              {selectedOptions.colors.includes("Negro") && (
                                <CheckIcon className=" right-0 top-0" />
                              )}
                            </button>
                            <p className="text-[12px] text-[#111]/60 mt-1">Negro</p>
                          </div>
                          {/* color azul M 
                          <div className="flex flex-col items-center">
                            <button
                              onClick={() => handleColorSelection("Azul")}
                              className="colores  relative grid h-[37px] w-[37px] place-items-center rounded-[50%] bg-[#242939] text-white"
                            >
                              {selectedOptions.colors.includes("Azul") && (
                                <CheckIcon className=" right-0 top-0" />
                              )}
                            </button>
                            <p className="text-[12px] text-[#111]/60 mt-1">Azul</p>
                          </div>
                        </div> */}
                      </div>

                      <hr className="mt-5" />
                      <div className="selector-talla mt-2">
                        <p
                          className={`${ubuntu.className} text-base text-[#111]/60`}
                        >
                          Talla
                        </p>

                        <div className="flex gap-2 pt-1">
                          <button
                            onClick={() => handleSizeSelection("L")}
                            className="colores grid h-[42px] w-[58px] place-items-center rounded-[62px] bg-[#F0F0F0] text-[#111]/60"
                          >
                            {selectedOptions.sizes.includes("L") && (
                              <XIcon className="absolute right-0 top-0" />
                            )}
                            <p>L</p>
                          </button>
                          <button
                            onClick={() => handleSizeSelection("M")}
                            className="colores grid h-[42px] w-[58px] place-items-center rounded-[62px] bg-[#111] text-base text-white"
                          >
                            {selectedOptions.sizes.includes("M") && (
                              <XIcon className="absolute right-0 top-0" />
                            )}
                            <p>M</p>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* /Scooter/btn-slider-left-pc.png */}
                  </div>
                  {/* Btn de Producto Variable y contador */}
                  <div className="contador-btnAddCart mt-2 flex w-full items-center gap-4 lg:w-[85%] 2xl:w-[70%]">
                    {/* <BtnQty /> */}
                    <div className="w-full flex-col justify-center lg:flex">
                      {currentVariation ? (
                        <AddToCart
                          key={currentVariation.databaseId}
                          producto={currentVariation}
                          clases="lg:w-[80%] w-full"
                        />
                      ) : (
                        <button
                          className={`h-[52px] w-full rounded-[62px] bg-[#111]  text-white lg:w-[80%] 2xl:w-[79%]`}
                        >
                          Agregar al carrito
                        </button>
                      )}
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
};

export default AccesorioVariable;
