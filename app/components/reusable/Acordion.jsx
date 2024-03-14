"use client"
import React, { useState } from "react";
import { manrope } from "@/ui/fonts";

export const Acordion = () => {
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
    <div className={`Acordion bg-[#F0F1EB] px-4 py-8 mx-4 mb-10 lg:mx-[0px] lg:px-[130px] lg:mb-0 lg:pb-22`}>
      <div className="space-y-1 lg:space-y-0">
        {/* Sección 1 */}
        <details
          className={`group px-4 py-6 ${!isOpen1 ? 'bg-[#FAF6FF]' : 'bg-[#E4E4E4]'}`} 
          open
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion1}
          >
            <div className="lg:flex items-center gap-8">
                <h1 className="text-[32px] text-[#111] font-semibold">01</h1>
                <h2 className={` ${manrope.className} text-lg font-bold text-[#111] text-[18px]`}>
                ¿Cuál es la autonomía máxima de la Scooter Minca?
                </h2>
            </div>

            <span className={`shrink-0 rounded-full p-1.5 sm:p-3  ${!isOpen1 ? "text-[#111] bg-white" : "text-white bg-[#111]"}`}>
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
          La autonomía de nuestras Scooters Minca varía en función del amperaje y voltaje de la batería de cada modelo. El amperaje (Ah) de la batería es un indicador de la capacidad de almacenamiento de energía.
          </p>
        </details>
        {/* Sección 2 */}
        <details
          className={`group px-4 py-6  ${!isOpen2 ? 'bg-[#FAF6FF]' : 'bg-[#E4E4E4]'}`} 
          
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion2}
          >
           <div className="lg:flex items-center gap-8">
                <h1 className="text-[32px] text-[#111] font-semibold">02</h1>
                <h2 className={` ${manrope.className} text-lg font-bold text-[#111] text-[18px]`}>
                ¿Se puede usar en la noche?
                </h2>
            </div>

            <span className={`shrink-0 rounded-full p-1.5 sm:p-3  ${!isOpen2 ? "text-[#111] bg-white" : "text-white bg-[#111]"}`}>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
        {/* Sección 3 */}
        <details
          className={`group px-4 py-6 ${!isOpen3 ? 'bg-[#FAF6FF]' : 'bg-[#E4E4E4]'}`} 
         
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion3}
          >
            <div className="lg:flex items-center gap-8">
                <h1 className="text-[32px] text-[#111] font-semibold">03</h1>
                <h2 className={` ${manrope.className} text-lg font-bold text-[#111] text-[18px]`}>
                ¿Necesito Licencia de Conducción y SOAT?
                </h2>
            </div>

            <span className={`shrink-0 rounded-full p-1.5 sm:p-3  ${!isOpen3 ? "text-[#111] bg-white" : "text-white bg-[#111]"}`}>
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
          La autonomía de nuestras Scooters Minca varía en función del amperaje y voltaje de la batería de cada modelo. El amperaje (Ah) de la batería es un indicador de la capacidad de almacenamiento de energía.
          </p>
        </details>
        {/* Sección 4 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? 'bg-[#FAF6FF]' : 'bg-[#E4E4E4]'}`} 
         
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="lg:flex items-center gap-8">
                <h1 className="text-[32px] text-[#111] font-semibold">04</h1>
                <h2 className={` ${manrope.className} text-lg font-bold text-[#111] text-[18px]`}>
                ¿Cómo se carga?
                </h2>
            </div>

            <span className={`shrink-0 rounded-full p-1.5 sm:p-3  ${!isOpen4 ? "text-[#111] bg-white" : "text-white bg-[#111]"}`}>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
      </div>
    </div>
  );
};
