"use client";
import React, { useState } from "react";
import { manrope } from "@/ui/fonts";

export const AcordionSingleProduct = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
  };

  return (
    <div
      className={`Acordion lg:pb-22 mb-10 bg-[#F0F1EB] px-4 py-8 lg:mx-[0px] lg:mb-0 lg:px-[100px]`}
    >
      <h2 className={`${manrope.className} text-[25px] lg:text-[32px] font-bold mb-6`}>Preguntas frecuentes</h2>
      <div className="space-y-1 lg:space-y-0">
        {/* Sección 1 */}
        <details
          className={`group px-4 py-6 ${!isOpen1 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
          open
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion1}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">01</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cuál es la autonomía máxima de la Scooter Minca?
              </h2>
            </div>

            <span
              className={`shrink-0 rounded-full p-1.5 sm:p-3  ${!isOpen1 ? "bg-white text-[#111]" : "bg-[#111] text-white"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`size-5 shrink-0 transition duration-300 ${!isOpen1 ? "rotate-0" : "rotate-45"}`}
                viewBox="0 0 20 20"
                fill={!isOpen1 ? "#000" : "#fff"}
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-[#111]/70 lg:mx-[6%] 2xl:mx-[4.5%]">
          En nuestras baterías de 36V 13Ah con un motor de 350 Watts, se puede esperar una autonomía media de alrededor de 35 km por carga.
          </p>
          
        </details>
        {/* Sección 2 */}
        <details
          className={`group px-4 py-6  ${!isOpen2 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion2}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">02</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Se puede usar en la noche?
              </h2>
            </div>

            <span
              className={`shrink-0 rounded-full p-1.5 sm:p-3  ${!isOpen2 ? "bg-white text-[#111]" : "bg-[#111] text-white"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`size-5 shrink-0 transition duration-300 ${!isOpen2 ? "rotate-0" : "rotate-45"}`}
                viewBox="0 0 20 20"
                fill={!isOpen2 ? "#000" : "#fff"}
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-[#111]/70 lg:mx-[6%] 2xl:mx-[4.5%]">
          Nuestras Scooters Minca están equipadas con luces LED frontales para iluminar la vía, así como con luces traseras y direccionales que permanecen encendidas durante la noche para mejorar la visibilidad ante otros vehículos. Aunque proporcionamos iluminación, recomendamos usar elementos reflectantes adicionales para aumentar la seguridad.
          </p>
        </details>
        {/* Sección 3 */}
        <details
          className={`group px-4 py-6 ${!isOpen3 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion3}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">03</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Necesito Licencia de Conducción y SOAT?
              </h2>
            </div>

            <span
              className={`shrink-0 rounded-full p-1.5 sm:p-3  ${!isOpen3 ? "bg-white text-[#111]" : "bg-[#111] text-white"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`size-5 shrink-0 transition duration-300 ${!isOpen3 ? "rotate-0" : "rotate-45"}`}
                viewBox="0 0 20 20"
                fill={!isOpen3 ? "#000" : "#fff"}
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-[#111]/70 lg:mx-[6%] 2xl:mx-[4.5%]">
          No es necesario contar con licencia de conducción ni con SOAT para adquirir una MINCA. Nuestras Scooters están diseñadas para ser utilizadas sin requerir documentos de conducción específicos.
          </p>
        </details>
        {/* Sección 4 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">04</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cómo se carga?
              </h2>
            </div>

            <span
              className={`shrink-0 rounded-full p-1.5 sm:p-3  ${!isOpen4 ? "bg-white text-[#111]" : "bg-[#111] text-white"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`size-5 shrink-0 transition duration-300 ${!isOpen4 ? "rotate-0" : "rotate-45"}`}
                viewBox="0 0 20 20"
                fill={!isOpen4 ? "#000" : "#fff"}
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-[#111]/70 lg:mx-[6%] 2xl:mx-[4.5%]">
          La carga de la scooter se realiza de manera segura y conveniente. Nunca tendrás contacto directo con la batería. La patineta se carga a 110V a través de una entrada de carga ubicada en la parte inferior derecha del chasis. Es importante destacar que debes usar exclusivamente el cargador proporcionado por Minca al momento de la compra, ya que conectar otro cargador podría causar daños graves e incluso la explosión de la scooter.
          </p>
        </details>
        {/* Sección 5 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">05</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Dónde puedo verlas y probarlas?
              </h2>
            </div>

            <span
              className={`shrink-0 rounded-full p-1.5 sm:p-3  ${!isOpen4 ? "bg-white text-[#111]" : "bg-[#111] text-white"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`size-5 shrink-0 transition duration-300 ${!isOpen4 ? "rotate-0" : "rotate-45"}`}
                viewBox="0 0 20 20"
                fill={!isOpen4 ? "#000" : "#fff"}
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-[#111]/70 lg:mx-[6%] 2xl:mx-[4.5%]">
          En nuestros showrooms se pueden hacer las pruebas de ruta necesarias para poder encontrar la Minca Ideal. Hay que tener en cuenta que no siempre la Minca más grande es la que más nos funciona. Si estamos buscando un medio de transporte para distancias entre 5 y 10km podremos evaluar modelos más económicos, más livianos y portables. 
          </p>
          <p className="mt-4 leading-relaxed text-[#111]/70 lg:mx-[6%] 2xl:mx-[4.5%]">
          La calidad de nuestros productos no se incrementa a medida que se sube el precio. Todas cuentan con el mismo soporte de posventa. 
          </p>

        </details>
      </div>
    </div>
  );
};
