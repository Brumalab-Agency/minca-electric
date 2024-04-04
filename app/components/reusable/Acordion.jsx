"use client";
import React, { useState } from "react";
import { manrope } from "@/ui/fonts";

export const Acordion = ({clase}) => {
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
      className={`Acordion lg:pb-22 mx-4 bg-[#F0F1EB] px-4 py-8 lg:mx-[0px] lg:mb-0 lg:px-[100px] ${clase}`}
    >
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
            La autonomía de nuestras Scooters Minca varía en función del
            amperaje y voltaje de la batería de cada modelo. El amperaje (Ah) de
            la batería es un indicador de la capacidad de almacenamiento de
            energía. Cuanto mayor sea el amperaje, mayor será la autonomía
            posible. Sin embargo, es importante tener en cuenta que la autonomía
            real puede depender de diversos factores, como el estilo de
            conducción, el terreno, el peso del conductor y las condiciones
            climáticas.
          </p>
          <p className="mt-4 leading-relaxed text-[#111]/70 lg:mx-[6%] 2xl:mx-[4.5%]">
            En nuestras baterías de 36V 13Ah con un motor de 350 Watts, se puede
            esperar una autonomía media de alrededor de 35 km por carga. En las
            baterías de 48V 15Ah con un motor de 800 Watts, la autonomía
            promedio es de aproximadamente 45 km por carga. Estas mediciones se
            realizan en terrenos completamente planos, con un peso de 75 kg y en
            condiciones óptimas de viento.
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
            Nuestras Scooters Minca están equipadas con luces LED frontales para
            iluminar la vía, así como con luces traseras y direccionales que
            permanecen encendidas durante la noche para mejorar la visibilidad
            ante otros vehículos. Aunque proporcionamos iluminación,
            recomendamos usar elementos reflectantes adicionales para aumentar
            la seguridad.
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
            No es necesario contar con licencia de conducción ni con SOAT para
            adquirir una MINCA. Nuestras Scooters están diseñadas para ser
            utilizadas sin requerir documentos de conducción específicos.
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
            La carga de la scooter se realiza de manera segura y conveniente.
            Nunca tendrás contacto directo con la batería. La patineta se carga
            a 110V a través de una entrada de carga ubicada en la parte inferior
            derecha del chasis. Es importante destacar que debes usar
            exclusivamente el cargador proporcionado por Minca al momento de la
            compra, ya que conectar otro cargador podría causar daños graves e
            incluso la explosión de la scooter.
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
            En nuestros showrooms se pueden hacer las pruebas de ruta necesarias
            para poder encontrar la Minca Ideal. Hay que tener en cuenta que no
            siempre la Minca más grande es la que más nos funciona. Si estamos
            buscando un medio de transporte para distancias entre 5 y 10km
            podremos evaluar modelos más económicos, más livianos y portables.
          </p>
          <p className="mt-4 leading-relaxed text-[#111]/70 lg:mx-[6%] 2xl:mx-[4.5%]">
            La calidad de nuestros productos no se incrementa a medida que se
            sube el precio. Todas cuentan con el mismo soporte de posventa.
          </p>
        </details>
        {/* Sección 6 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">06</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Se Puede Montar en Ciclorrutas?
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
            ¡Claro! Gracias al controlador de nuestras Scooters Minca, es
            posible regularlas en 3 modos de velocidad (1&gt;ECO, 2&gt;Normal,
            3&gt;Sport). Estos niveles de velocidad máxima permiten circular en
            ciclorrutas sin exceder los límites permitidos y sin causar
            molestias a los ciclistas otros participes de la vía.
          </p>
        </details>
        {/* Sección 7 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">07</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cómo programo el mantenimiento de mi patineta eléctrica?
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
            Para programar el mantenimiento de tu patineta, te instamos a
            utilizar nuestra plataforma en línea en www.mincaelectric.com. A
            través de este portal, podrás reservar una cita que se ajuste a tu
            disponibilidad. Es necesario que traigas la patineta con suficiente
            antelación para llevar a cabo una revisión exhaustiva. Además,
            requerimos el número de cédula del titular de la patineta y que esta
            esté cargada para facilitar la evaluación de los componentes
            eléctricos.
          </p>
        </details>
        {/* Sección 8 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">08</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿En qué consiste el mantenimiento preventivo trimestral de las
                patinetas eléctricas?
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
            El mantenimiento preventivo trimestral de las patinetas eléctricas
            abarca una serie de procedimientos técnicos esenciales:
          </p>
          <ul className="mt-4 leading-relaxed text-[#111]/70 lg:mx-[6%] 2xl:mx-[4.5%] list-disc">
            <li>
              <b>Limpieza exhaustiva:</b> Realizamos una limpieza minuciosa de
              la superficie, ruedas y componentes externos para eliminar
              residuos que puedan afectar la experiencia del usuario.
            </li>
            <li>
              <b>Inspección visual detallada:</b> Evaluamos cada componente
              visible en busca de signos de desgaste, daño o aflojamiento que
              puedan influir en el rendimiento.
            </li>
            <li>
              <b>Ajuste de tornillos y pernos:</b> Verificamos y ajustamos la
              tensión de los tornillos y pernos para garantizar la integridad y
              seguridad de los elementos.
            </li>
            <li>
              <b>Lubricación de rodamientos:</b> Aplicamos lubricante
              especializado en los rodamientos y partes móviles para asegurar un
              funcionamiento suave.
            </li>
            <li>
              <b>Evaluación de sistemas de frenado:</b>Ajustamos y revisamos los
              sistemas de frenado para garantizar su funcionalidad y seguridad.
            </li>
            <li>
              <b>Inspección de cables y conexiones:</b>Revisamos minuciosamente
              y limpiamos los cables y conexiones eléctricas para prevenir
              posibles fallos.
            </li>
            <li>
              <b>Evaluación del estado de la batería:</b>Realizamos una
              evaluación básica de la batería para verificar su estado y
              rendimiento en cuanto al voltaje y al amperaje. De ser necesaria
              una evaluación con carga y descarga profunda, se le notificará al
              cliente para su aprobación.
            </li>
            <li>
              <b>Pruebas de rendimiento en condiciones reales:</b>Realizamos
              pruebas prácticas para asegurar el funcionamiento correcto,
              incluyendo aceleración, frenado y maniobrabilidad.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-[#111]/70 lg:mx-[6%] 2xl:mx-[4.5%]">
            El mantenimiento preventivo es esencial para mantener el estado y el
            rendimiento de las patinetas eléctricas, prevenir problemas mayores
            y asegurar un rendimiento seguro durante su uso. Te aconsejamos
            seguir las indicaciones del fabricante y, en caso de dudas, acudir a
            nuestro servicio técnico especializado. Además, recomendamos que,
            junto con nuestro mantenimiento, realices una revisión periódica
            antes de cada salida, como lo establecemos en nuestro manual de
            usuario. La responsabilidad de llevar a cabo esta revisión recae en
            el usuario para garantizar una experiencia segura y óptima.
          </p>
        </details>
        {/* Sección 9 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">09</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cuáles son las implicaciones de no realizar el mantenimiento periódico de
la patineta eléctrica?
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
          La falta de mantenimiento periódico puede resultar en la pérdida de precisión y ajuste en
el funcionamiento de la patineta. La lubricación de rodamientos y el ajuste adecuado de
frenos y direcciones son esenciales para mantener un rendimiento óptimo. La falta de
mantenimiento puede generar ruidos, vibraciones y dificultades en la conducción. El
mantenimiento adecuado es crucial para garantizar una patineta segura y
duradera. Adicional a lo anterior, los mantenimientos preventivos son necesarios para
extender la garantía legal de tu patineta trimestralmente hasta los 12 meses.
          </p>
        </details>
        {/* Sección 10 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">10</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cómo realizar el mantenimiento si vivo fuera de la ciudad de operación?
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
          Aunque recomendamos asistir a nuestro taller, tenemos tres colaboradores autorizados en
diferentes ciudades (Cali, Medellín y Bucaramanga) que brindan mantenimiento y
reparaciones sin afectar la garantía. Los detalles se proporcionarán en nuestra línea de
atención al cliente. En nuestros canales de contacto encontrarán información relacionada
a estos puntos de mantenimiento.
          </p>
        </details>
        {/* Sección 11 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">11</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Con qué frecuencia debo realizar el mantenimiento de mi patineta?
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
          Se recomienda hacer el mantenimiento cada tres meses para mantener la garantía del
producto. Después del primer año de uso, es esencial continuar con el mantenimiento
preventivo trimestral. Esto asegura la seguridad del usuario, el funcionamiento óptimo y la
durabilidad de la patineta.
          </p>
        </details>
        {/* Sección 12 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">12</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cuál es la garantía de los repuestos?
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
          Los repuestos cambiados en nuestros servicios técnicos tienen una garantía de tres
meses desde la recogida de la patineta. Si un repuesto es reparado, la garantía es de un
mes. Los consumibles como llantas, neumáticos y pastillas no están cubiertos por la
garantía.
          </p>
        </details>
        {/* Sección 13 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">13</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cuánto duran las pastillas de freno?
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
          La duración de las pastillas de freno varía según el tipo, la conducción y las condiciones.
Pueden durar entre 100 y 500 km. El mantenimiento y la conducción suave prolongan su
vida útil.
          </p>
        </details>
        {/* Sección 14 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">14</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Por qué es importante la impermeabilización?
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
          La impermeabilización protege los componentes internos de la humedad y la corrosión,
garantizando un funcionamiento seguro y duradero. Este procedimiento no cubre daños
por humedad ni en la garantía legal, ni en la garantía extendida.
          </p>
        </details>
        {/* Sección 15 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">15</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cuál es la presión adecuada de las llantas?
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
          La presión adecuada se encuentra en el lateral de la llanta. Debe mantenerse para un
rendimiento seguro. Calibrar semanalmente asegura un óptimo funcionamiento.
          </p>
        </details>
        {/* Sección 16 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">16</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Qué hacer antes de llevar la patineta al taller por problemas menores?
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
          El manual del usuario y nuestros videos de soporte en YouTube pueden ayudarte a
resolver problemas menores antes de llevar la patineta al taller. De igual forma, contamos
con canales de comunicación del área de posventa que ayudarán a aclarar dudas.
          </p>
        </details>
        {/* Sección 17 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">17</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
               ¿Cuál es la garantía de los repuestos?
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
          Todos los repuestos necesarios están disponibles en nuestros talleres y distribuidores
autorizados.
          </p>
        </details>
        {/* Sección 18 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">18</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Qué métodos de financiamiento ofrecen?
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
          Ofrecemos financiamiento a través de ADDI, RAPPI, SISTECREDITO y VANTILISTO.
Cada método tiene condiciones y requisitos propios.
          </p>
        </details>
        {/* Sección 19 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">19</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Puedo asegurar mi patineta Minca?
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
          Puedes asegurarla con SBS en alianza con Seguros Beta para protección ante robos y
pérdidas.
          </p>
        </details>
        {/* Sección 20 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">20</h1>
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
          No agotarla por completo y evitar almacenarla descargada prolonga su vida útil.
          </p>
        </details>
        {/* Sección 21 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">21</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Qué hacer si no uso mi patineta durante un tiempo prolongado?
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
          Cargarla completamente antes de almacenarla y verificar la carga mensualmente.
          </p>
        </details>
        {/* Sección 22 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">22</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Qué sucede si la patineta sufre un golpe fuerte?
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
          Un golpe fuerte puede dañar la patineta y la batería, afectando su funcionamiento y
capacidad de carga. Debe ser revisada por un profesional.
          </p>
        </details>
        {/* Sección 23 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">23</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
               ¿Qué equipo de protección personal se recomienda?
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
          Se recomienda casco, guantes, calzado adecuado y ropa visible
          </p>
        </details>
        {/* Sección 24 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">24</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Qué sucede si la patineta se moja?
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
          La humedad puede dañar los componentes eléctricos. Debe ser llevada a servicio técnico
para prevenir daños futuros.
          </p>
        </details>
        {/* Sección 25 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">25</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Se puede usar la patineta bajo la lluvia?
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
          No recomendamos su uso bajo la lluvia debido a problemas potenciales con los
componentes eléctricos.
          </p>
        </details>
        {/* Sección 26 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">26</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Por qué puede sentirse desajustada la patineta?
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
          La falta de mantenimiento y lubricación puede causar ruidos y vibraciones. Es esencial
realizar mantenimiento regular.
          </p>
        </details>
        {/* Sección 27 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">27</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Qué medidas de seguridad adicionales puedo tomar?
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
          Evitar acrobacias, no llevar pasajeros y leer el manual de usuario para garantizar la
seguridad.
          </p>
        </details>
        {/* Sección 28 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">28</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cómo cargar correctamente la patineta?
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
          Revisa el cargador, conecta primero a la patineta, verifica el cambio de color y supervisa
la carga. No cargar si está húmeda o con problemas.
          </p>
        </details>
        {/* Sección 29 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">29</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cuánto tiempo lleva reparar problemas comunes?
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
          El tiempo de reparación varía, pero en casos menores puede ser completado en un día
hábil.
          </p>
        </details>
        {/* Sección 30 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">30</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cómo traspasar la patineta a otra persona si la vendí?
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
          Envía un correo a tramites@mincaelectric.com con documentos como factura de compra,
cédulas y datos de ambas partes para gestionar el traspaso.
          </p>
        </details>
        {/* Sección 31 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">31</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
               ¿Qué accesorios puedo añadir a mi patineta Minca?
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
          Ofrecemos varios accesorios para personalizar tu patineta, como silla, alarma, espejos,
llantas macizas, maleta, impermeable, slime y llave.
          </p>
        </details>
        {/* Sección 32 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">32</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cómo comprar si estoy en otra ciudad?
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
          Compra en línea o comunica con nuestras tiendas para adquirir tu patineta y recibir en tu
ciudad.
          </p>
        </details>
        {/* Sección 33 */}
        <details
          className={`group px-4 py-6 ${!isOpen4 ? "bg-[#FAF6FF]" : "bg-[#E4E4E4]"}`}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={toggleAccordion4}
          >
            <div className="items-center gap-8 lg:flex">
              <h1 className="text-[32px] font-semibold text-[#111]">33</h1>
              <h2
                className={` ${manrope.className} text-[18px] text-lg font-bold text-[#111]`}
              >
                ¿Cuánto tarda la entrega si compro en línea?
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
          La entrega toma hasta dos días en Bogotá y hasta cuatro días en otras ciudades.
          </p>
        </details>
      </div>
    </div>
  );
};
