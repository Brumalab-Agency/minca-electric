"use client";
import { manrope, ubuntu } from "@/ui/fonts";
import AddToCart from "../cart/AddToCart";
import ReactImagenGalleryLupaEspecificaciones from "../react-image-gallery/ReactImagenGalleryLupaEspecificaciones";
import { TablaEspecificaciones } from "./TablaEspecificaciones";
import Link from "next/link";
import DonwLoadManual from "../manuales/DonwLoadManual";
import { Acordion } from "../reusable/Acordion";
import { Testimonios } from "../testimonio/Testimonios";
import { useState } from "react";
import TooltipEspecificaciones from "./TooltipEspecificaciones";
import PoliticasGarantia from "../manuales/PoliticaGarantia";

export const EspecificacionesMincaNew = async (scooters) => {
  const [codigoOC, setCodigoOC] = useState("");

  const garantiaUrl =
    "https://test.mincaelectric.com/wp-content/uploads/2024/05/POLITICAS-DE-GARANTIA.pdf";

  const handleCodigoOCChange = (e) => {
    setCodigoOC(e.target.value);
  };

  let content;

  const items = scooters.scooters.productTypes.nodes[0].products.nodes[0];
  const item = items;
  const manualMinca = item?.sliderProductos.manualMinca.mediaItemUrl;
  const noStock = item?.stockStatus === "OUT_OF_STOCK";

  content = (
    <div className="EspecificacionesAccesorios Productos-SIMPLES">
      <div className="justify-between p-4 lg:flex lg:justify-start lg:px-[100px] lg:py-[50px]">
        {/* Accesorios */}
        <ReactImagenGalleryLupaEspecificaciones items={item} />
        <div className="lg:w-[50%]">
          {/* Título y descripción */}
          <div className="flex justify-between lg:ml-7">
            <div className="flex flex-col justify-center">
              <h2
                className={`${manrope.className} mb-1 text-[24px] font-bold uppercase text-[#111111] lg:text-[32px] lg:leading-[28px]`}
              >
                {item?.title}
              </h2>
              <p
                className={`${manrope.className} mb-1 text-[12px] font-normal uppercase text-[#111111] lg:mt-4 lg:text-[26px] lg:font-medium`}
              >
                {item?.sliderProductos.subtitulo}
              </p>
              <div className="flex items-center gap-3 lg:mt-6 lg:gap-4">
                <div
                  className={`${manrope.className} text-[24px] font-bold text-[#111111]/60 lg:text-[26px]`}
                >
                  <p className="text-[14px]">Antes</p>
                  <del>{item?.sliderProductos.precioRebajado}</del>
                </div>
                <div
                  className={`${manrope.className} text-[24px] font-bold text-[#111111] lg:text-[26px]`}
                >
                  <p className="text-[14px]">Ahora</p>
                  {item?.sliderProductos.precioActual}
                </div>
                <span className="items-center justify-center rounded-full bg-[#FF3333] bg-opacity-10 px-2.5 py-0.5 text-[#FF3333] lg:inline-flex lg:h-8 lg:px-[14px] lg:py-[6px]">
                  <p
                    className={`${manrope.className} whitespace-nowrap text-sm`}
                  >
                    {item?.sliderProductos.descuento}
                  </p>
                </span>
              </div>
              <p
                className={`${ubuntu.className} text-[14px] font-normal leading-[15px] text-[#42454A] lg:mt-5 lg:w-[90%] lg:text-[16px] lg:leading-[25px]`}
              >
                {item?.sliderProductos.description}
              </p>

              <hr className="mt-5 lg:w-[70%]" />
              {/* <hr className="my-4 border-[#464646]" />

              
              {noStock && (
                <>
                  <div className="mb-4 flex items-center space-x-2">
                    <h4 className="inline-block text-xl font-semibold">
                      Preventa
                    </h4>
                    <TooltipEspecificaciones tooltips={"si"} />
                  </div>


                  <div className="mb-3 h-auto w-full rounded-[10px] border-[1px] border-[#464646] bg-[#F0F1EB]">
                    <div className="flex flex-col items-start">
                      <div className="ml-3 grid h-[50px] w-full place-items-center justify-start">
                        <label className="radio-container mr-4">
                          <input
                            type="radio"
                            name="pagoParcial"
                            value="1125000"
                            className="radio-input mr-2"
                          />
                          <div className="flex items-center justify-start">
                            <span className="radio-custom"></span>
                            <p>Pago parcial $1.125.000</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  
                  <div className="mb-3 h-auto w-full rounded-[10px] border-[1px] border-[#464646] bg-[#F0F1EB]">
                    <div className="flex flex-col items-start">
                      <div className="ml-3 grid h-[50px] w-full place-items-center justify-start">
                        <label className="radio-container mr-4">
                          <input
                            type="radio"
                            name="segundoPago"
                            value="1125000"
                            className="radio-input mr-2"
                          />
                          <div className="flex items-center justify-start">
                            <span className="radio-custom"></span>
                            <p>Segundo pago $1.125.000</p>
                          </div>
                        </label>
                      </div>
                      <hr className="w-full border-b-[1px] border-[#464646]" />
                      <div className="ml-3 grid h-[50px] w-full place-items-center justify-start">
                        <div className="flex items-center justify-start gap-5">
                          <p>Número de O/C:</p>
                          <input
                            type="text"
                            value={codigoOC}
                            onChange={handleCodigoOCChange}
                            className="w-[50%] rounded-[5px] border-[1px] border-[#464646] p-2 text-[12px]"
                            placeholder="Añádelo aquí."
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <div className="mb-3 h-auto w-full rounded-[10px] border-[1px] border-[#464646] bg-[#F0F1EB]">
                    <div className="flex flex-col items-start">
                      <div className="ml-3 grid h-[50px] w-full place-items-center justify-start">
                        <label className="radio-container mr-4">
                          <input
                            type="radio"
                            name="pagoCompleto"
                            value="2100000"
                            className="radio-input mr-2"
                          />
                          <div className="flex items-center justify-start">
                            <span className="radio-custom"></span>
                            <p>Pago completo $2.100.000</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div> */}
            </div>
          </div>

          {/* Botón y contador */}
          <div className="contador-btnAddCart mt-4 flex w-full items-center gap-4 lg:ml-7 lg:w-[85%] 2xl:w-[70%]">
            <div className="w-full flex-col justify-center lg:flex">
              <AddToCart
                key={item?.databaseId}
                producto={item}
                clases="lg:w-[80%] w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 grid h-auto w-full grid-cols-1 lg:grid-cols-2 2xl:h-auto">
        <TablaEspecificaciones scooters={scooters} />
        <div className="h-auto w-full px-4 pb-10 lg:pl-[16px] lg:pr-[96px]">
          <div className="mt-16 flex items-center justify-between lg:mt-[80px]">
            <div className="lg:w-full">
              <h2 className="border-b-2 border-[#111]">
                Información adicional
              </h2>
            </div>
          </div>
          <video
            className="top-0 mt-8 h-[355px] w-auto object-cover lg:block lg:h-[78%]"
            src="https://test.mincaelectric.com/wp-content/uploads/2024/04/videoplayback_prueba.mp4"
            autoPlay
            controls
            muted
            loop
          />
          <div className="mb-4 flex items-center justify-around  space-x-2">
            <DonwLoadManual manualMinca={manualMinca} item={item} />
            <PoliticasGarantia garantia={garantiaUrl} item={item} />
          </div>
        </div>
      </div>
      {/* CardAgendaCita */}
      {/* <div className="CardAgendaCita mb-[70px] bg-[#FAF6FF] p-4 lg:mx-[100px] lg:px-[100px] lg:py-8">
        <h2
          className={`${manrope.className} text-[24px] font-bold leading-[30px]`}
        >
          AGENDA TU CITA PARA SERVICIO TÉCNICO
        </h2>
        <p className={`${manrope.className} text-[20px] font-bold`}>
          Para mantener tu Scooter en óptimas condiciones, es indispensable
          realizar el mantenimiento preventivo cada 6 meses o cada 600
          kilómetros.
        </p>
        <div>
          <ul
            className={`${manrope.className} ml-[20px] list-disc text-[20px] font-medium`}
          >
            <li>
              Recuerda que durante el primer año es obligatorio dicho
              mantenimiento para mantener tu garantía Minca.
            </li>
            <li>
              Los Talleres de Minca Electric están a disposición únicamente para
              los usuarios de las Scooter Minca, para así brindarles la mejor
              calidad en el servicio post-venta.
            </li>
            <li>
              Los servicios de despinche, ajuste de frenos y tornillería no
              requieren de agenda previa.
            </li>
            <li>El cambio de piezas y repuestos no está incluido.</li>
            <li>
              Cualquier repuesto adicional que se requiera, será notificado
              previamente al cliente vía telefónica o por medio de WhatsApp.
            </li>
          </ul>
        </div>
        <p className={`${manrope.className} text-[20px] font-medium`}>
          El comprador debe hacer un mantenimiento semestral o cada 600
          kilómetros en cualquiera de estos talleres para mantener la Scooter en
          óptimas condiciones y vigente en garantía.
          <b>
            <br />
            ES DE SUMA IMPORTANCIA MENCIONAR QUE SI NO SE REALIZAN DICHOS
            MANTENIMIENTOS SEMESTRALES, NO SERÁ EFECTIVA NINGÚN TIPO DE
            GARANTÍA.
          </b>
        </p>
        <Link href="http://localhost:3000/servicios" className="underline">
          Conoce nuestros talleres para realizar mantenimientos
        </Link>
      </div> */}
      {/* Review */}
      <Testimonios />
      <Acordion clase="mx-0 mb-0" />
    </div>
  );

  return <div>{content}</div>;
};
