import { CardEspecifications } from "./CardEspecifications";
import Image from "next/image";
import { manrope, ubuntu } from "@/ui/fonts";
import { Boton } from "../botones/Boton";
import Modal3d from "../modal3d/Modal3d";
import TooltipEspecificaciones from "../especificaciones-component/TooltipEspecificaciones";

export const City = () => {
  return (
    <>
      {/* <div className="mt-4"> */}
        {/* PC */}
        {/* <video
          className="top-0 hidden h-[663px] w-full object-cover  lg:block"
          src={"#"}
          autoPlay
          muted
          loop
        /> */}

        {/* Movil */}
        {/* <video
          className="top-0 h-[400px] w-full object-cover  lg:hidden"
          src={"#"}
          autoPlay
          muted
          loop
        /> */}
      {/* </div> */}
      <div id="scooter" className="carrusel h-auto w-full">
        <div className="relative p-4 lg:px-[100px] lg:py-14">
          <div className="slogan-dots mb-4 flex items-center justify-between">
            <div>
              <p className={`${ubuntu.className} text-[14px] text-[#42454A] `}>
                Minca CITY 2024
              </p>
            </div>
          </div>
          <Image
            placeholder="empty"
            alt="Minca city roja"
            className="lg:hidden"
            src="/city/city-roja.png"
            priority={true}
            width={390}
            height={400}
            style={{ objectFit: "cover" }}
          />

          <div className="flex items-center justify-between bg-white pl-1 pr-4 lg:hidden">
            <div className="w-100 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={123}
                height={52}
                viewBox="0 0 123 52"
                fill="none"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#111110"
                    d="M70.903 49.122a2.747 2.747 0 0 0 2.75 2.75h29.446a2.744 2.744 0 0 0 2.529-1.666l16.477-38.443c.775-1.815-.555-3.833-2.529-3.833H91.865c-1.965 0-3.295-2-2.538-3.815l.133-.309c.757-1.815-.573-3.815-2.538-3.815H48.25c-.731 0-1.428.291-1.947.81L41.73 5.376c-.52.52-1.216.81-1.948.81H18.17c-1.084 0-2.071.644-2.52 1.64L.238 42.504c-.81 1.824.52 3.868 2.52 3.868h65.396a2.747 2.747 0 0 1 2.75 2.75Z"
                  />
                  <g fill="#fff">
                    <path d="M17.261 38.064c-5.965 0-7.754-2.996-5.384-8.987l3.437-8.397c.722-1.806 1.436-3.287 2.159-4.45.722-1.163 1.56-2.08 2.51-2.758.944-.67 2.054-1.136 3.314-1.4 1.268-.256 2.802-.388 4.608-.388h16.124l-3.348 8.309H29.35c-.538 0-.934.088-1.18.273-.239.176-.468.528-.67 1.04l-2.89 7.136c-.362.873-.106 1.313.766 1.313h11.34l-3.348 8.31H17.243h.018ZM48.065 11.683h12.468L49.87 38.064H37.403l10.662-26.38Zm3.348-8.308h12.459l-2.44 6.097h-12.46l2.441-6.097ZM63.378 11.683h2.485l2.124-5.242 13.181-1.807-2.846 7.05h5.683l-3.34 8.308h-5.691l-3.428 8.45c-.361.872-.105 1.313.767 1.313h6.326l-3.34 8.309H64.19c-5.965 0-7.754-2.996-5.375-8.988l3.71-9.084h-2.485l3.348-8.309h-.009ZM82.164 38.064h9.578c.51 0 .89-.088 1.128-.273.246-.185.484-.529.722-1.04l.317-.81h-6.731c-5.965 0-7.754-2.996-5.375-8.988l6.185-15.27h12.468L94.535 26.32c-.361.872-.106 1.313.767 1.313h.634c.511 0 .899-.088 1.145-.273.256-.185.494-.53.705-1.04l5.913-14.635h12.467l-10.388 25.693c-.714 1.806-1.454 3.286-2.185 4.458-.731 1.155-1.577 2.08-2.529 2.75-.952.678-2.053 1.145-3.322 1.4-1.26.256-2.784.38-4.555.38H78.825l3.34-8.31v.01Z" />
                  </g>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h122.334v51.88H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-center justify-end lg:hidden">
              <div className="text-center">
                <p className="mb-2 text-[14px]">Selecciona el color</p>
                <div className="mb-4 flex justify-center space-x-4">
                  <div className="h-8 w-8 rounded-full border-4 border-white bg-red-500 shadow-xl"></div>
                  <div className="mt-1 h-6 w-6 rounded-full bg-gray-500 shadow-xl"></div>
                </div>
                <p className="text-[12px] font-bold">NEGRO MATE - ROJO</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <div className="flex flex-col justify-center mt-10">
                <h2
                  className={`${manrope.className} mb-1 text-[16px] font-bold uppercase text-[#111111]  lg:text-[42px] lg:leading-[45px]`}
                >
                  MOTO ELÉCTRICA <br />
                  Minca City 350w
                </h2>

                <p
                  className={`${ubuntu.className} text-[13px] font-normal leading-[15px] text-[#42454A]  lg:mt-5 lg:w-[342px] lg:text-[16px] lg:leading-[25px]`}
                >
                  Moped Eléctrica Minca City 350w, el vehículo ideal para
                  quienes buscan una experiencia de movilidad cómoda y tranquila
                  en recorridos planos.
                </p>
                <div className="hidden lg:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={123}
                    height={52}
                    fill="none"
                  >
                    <g clipPath="url(#a)">
                      <path
                        fill="#111110"
                        d="M70.903 49.122a2.747 2.747 0 0 0 2.75 2.75h29.446a2.744 2.744 0 0 0 2.529-1.666l16.477-38.443c.775-1.815-.555-3.833-2.529-3.833H91.865c-1.965 0-3.295-2-2.538-3.815l.133-.309c.757-1.815-.573-3.815-2.538-3.815H48.25c-.731 0-1.428.291-1.947.81L41.73 5.376c-.52.52-1.216.81-1.948.81H18.17c-1.084 0-2.071.644-2.52 1.64L.238 42.504c-.81 1.824.52 3.868 2.52 3.868h65.396a2.747 2.747 0 0 1 2.75 2.75Z"
                      />
                      <g fill="#fff">
                        <path d="M17.261 38.064c-5.965 0-7.754-2.996-5.384-8.987l3.437-8.397c.722-1.806 1.436-3.287 2.159-4.45.722-1.163 1.56-2.08 2.51-2.758.944-.67 2.054-1.136 3.314-1.4 1.268-.256 2.802-.388 4.608-.388h16.124l-3.348 8.309H29.35c-.538 0-.934.088-1.18.273-.239.176-.468.528-.67 1.04l-2.89 7.136c-.362.873-.106 1.313.766 1.313h11.34l-3.348 8.31H17.243h.018ZM48.065 11.683h12.468L49.87 38.064H37.403l10.662-26.38Zm3.348-8.308h12.459l-2.44 6.097h-12.46l2.441-6.097ZM63.378 11.683h2.485l2.124-5.242 13.181-1.807-2.846 7.05h5.683l-3.34 8.308h-5.691l-3.428 8.45c-.361.872-.105 1.313.767 1.313h6.326l-3.34 8.309H64.19c-5.965 0-7.754-2.996-5.375-8.988l3.71-9.084h-2.485l3.348-8.309h-.009ZM82.164 38.064h9.578c.51 0 .89-.088 1.128-.273.246-.185.484-.529.722-1.04l.317-.81h-6.731c-5.965 0-7.754-2.996-5.375-8.988l6.185-15.27h12.468L94.535 26.32c-.361.872-.106 1.313.767 1.313h.634c.511 0 .899-.088 1.145-.273.256-.185.494-.53.705-1.04l5.913-14.635h12.467l-10.388 25.693c-.714 1.806-1.454 3.286-2.185 4.458-.731 1.155-1.577 2.08-2.529 2.75-.952.678-2.053 1.145-3.322 1.4-1.26.256-2.784.38-4.555.38H78.825l3.34-8.31v.01Z" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h122.334v51.88H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <Image
                placeholder="empty"
                alt="publicidad"
                className="hidden lg:block"
                src="/city/city-roja.png"
                width={600}
                height={499}
              />

              <div className="mt-40 hidden lg:block">
                <div className="flex items-center justify-end">
                  <div className="mt-10 text-center">
                    <p className=" mb-4 text-[14px]">Selecciona el color</p>
                    <div className="mb-4 flex justify-center space-x-4">
                      <div className="h-8 w-8 rounded-full border-4 border-white bg-red-500 shadow-xl"></div>
                      <div className="mt-1 h-6 w-6 rounded-full bg-gray-500 shadow-xl"></div>
                    </div>
                    <p className="text-[12px] font-bold">NEGRO MATE - ROJO</p>
                  </div>
                </div>
                <button
                  className="mt-20 cursor-not-allowed rounded-3xl bg-gray-400 px-4 py-2 text-white"
                  disabled
                >
                  Próximamente
                </button>
              </div>

              <div className="hidden flex-col justify-center lg:invisible lg:flex"></div>
            </div>
          </div>
          {/* ********** */}
          <div className="contenedor-cards-arrows relative">
            <div className="atributos-productos scroll-none relative z-10 hidden h-[75px] items-center justify-center gap-2 overflow-y-hidden overflow-x-scroll px-4 lg:flex lg:h-[150px] lg:justify-between lg:gap-6 lg:overflow-x-hidden lg:px-0">
              <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
                <p
                  className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
                >
                  Motor
                </p>
                <p
                  className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
                >
                  350w
                </p>
                <p
                  className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
                >
                  Brushless
                </p>
              </div>

              <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
                <p
                  className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
                >
                  48
                </p>
                <p
                  className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
                >
                  V/24Ah
                </p>
                <p
                  className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
                >
                  Batería Litio
                </p>
              </div>

              <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
                <p
                  className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
                >
                  45-55
                </p>
                <p
                  className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
                >
                  KM
                </p>
                <p
                  className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
                >
                  Autonomía
                </p>
              </div>

              <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
                <p
                  className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
                >
                  40
                </p>
                <p
                  className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
                >
                  KM/H
                </p>
                <p
                  className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
                >
                  Velocidad máx
                </p>
              </div>

              <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
                <p
                  className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
                >
                  100
                </p>
                <p
                  className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
                >
                  KG
                </p>
                <p
                  className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
                >
                  Peso máx
                </p>
              </div>

              <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
                <p
                  className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
                >
                  Frenos
                </p>
                <p
                  className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
                >
                  Hidráulico
                </p>
                <p
                  className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
                >
                  + Banda trasero
                </p>
              </div>

              <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
                <p
                  className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
                >
                  14''
                </p>
                <p
                  className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
                >
                  Pulgadas
                </p>
                <p
                  className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
                >
                  Llantas
                </p>
              </div>

              <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
                <p
                  className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
                >
                  50
                </p>
                <p
                  className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
                >
                  KG
                </p>
                <p
                  className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
                >
                  Peso
                </p>
              </div>
            </div>

            {/* ******************* */}

            <div className="carusel-movil mt-4 flex h-full w-full items-center justify-center gap-5 overflow-y-hidden overflow-x-scroll p-[5px] lg:hidden">
              <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
                <p
                  className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
                >
                  Motor
                </p>
                <p
                  className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
                >
                  350w
                </p>
                <p
                  className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
                >
                  Brushless
                </p>
              </div>

              <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
                <p
                  className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
                >
                  48
                </p>
                <p
                  className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
                >
                  V/24Ah
                </p>
                <p
                  className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
                >
                  Batería Litio
                </p>
              </div>

              <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
                <p
                  className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
                >
                  45-55
                </p>
                <p
                  className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
                >
                  KM
                </p>
                <p
                  className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
                >
                  Autonomía
                </p>
              </div>

              <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
                <p
                  className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
                >
                  40
                </p>
                <p
                  className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
                >
                  KM/H
                </p>
                <p
                  className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
                >
                  Velocidad máx
                </p>
              </div>
            </div>

            <div className="block lg:hidden">
              <button
                className="mt-4 w-full cursor-not-allowed rounded-2xl bg-gray-400 px-4 py-2 text-white"
                disabled
              >
                Próximamente
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
