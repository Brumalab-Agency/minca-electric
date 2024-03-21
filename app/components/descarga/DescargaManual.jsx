"use client";
import { manrope } from "@/ui/fonts";


export const DescargaManual = () => {

  const minca350 =
  "https://test.mincaelectric.com/wp-content/uploads/2024/03/Manual_integracin_e-commerce.pdf";
  const minca500 =
  "https://test.mincaelectric.com/wp-content/uploads/2024/03/Manual_integracin_e-commerce.pdf";
  const minca800 =
  "https://test.mincaelectric.com/wp-content/uploads/2024/03/Manual_integracin_e-commerce.pdf";
const minca1600 =
  "https://test.mincaelectric.com/wp-content/uploads/2024/03/Manual_integracin_e-commerce_1600.pdf";
const politicas =
  "https://test.mincaelectric.com/wp-content/uploads/2024/03/Politica_de_privacidad.pdf";
const devoluciones =
  "https://test.mincaelectric.com/wp-content/uploads/2024/03/Politica_de_devoluciones.pdf";
  
  const downLoad = (url) => {
    const filename = url.split("/").pop();
    const element = document.createElement("a");
    element.href = url;
    element.download = filename;
    element.target = "_blank";
    document.body.appendChild(element);
    element.click();
    element.remove();
};


  return (
    <div className="DescargaManual  mx-[16px] mb-[70px] mt-[50px] lg:px-[100px]">
      <div
        className={`${manrope.className} h-auto w-full rounded-[20px] bg-[#F0F0F0] px-[24px] py-[10px] lg:px-[64px]`}
      >
        <h1 className="mb-[28px] pt-[40px] text-[32px] font-bold">
          Descarga tu manual
        </h1>
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
          {/* Cuadricula 1 */}
          <button
            onClick={() => {
              downLoad(minca350); 
          }}
          value="download"
            className="relative mb-4 flex h-[190px] w-full items-center justify-start rounded-[20px] bg-white px-[24px] py-[16px] lg:h-[289px]"
          >
            <div className="flex self-start">
              <p className="text-[24px] lg:text-[36px] lg:font-bold">350w</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-bar-to-down h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20l16 0" />
                <path d="M12 14l0 -10" />
                <path d="M12 14l4 -4" />
                <path d="M12 14l-4 -4" />
              </svg>
            </div>
            <div>
              <img
                className="absolute bottom-1 right-0 h-[170px] w-[175px] -scale-x-100 lg:h-[271px] lg:w-[280px]"
                src="/Scooter/Scooter - Minca Electric.png"
                alt="scooter"
              />
            </div>
          </button>
          {/* Cuadricula 2 */}
          <div className="mb-4 h-[190px] w-full items-center justify-between rounded-[20px] bg-white px-[24px] py-[16px] lg:col-span-2 lg:flex lg:h-[289px]">
            {/* *** */}
            <div className="flex flex-wrap self-start  lg:flex-col">
            <button
            onClick={() =>
              downLoad(minca500)
            }
                className="flex self-start"
              >
                <p className="text-[24px] lg:text-[36px] lg:font-bold">500w</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-bar-to-down h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 20l16 0" />
                  <path d="M12 14l0 -10" />
                  <path d="M12 14l4 -4" />
                  <path d="M12 14l-4 -4" />
                </svg>
              </button>
              <button
            onClick={() =>
              downLoad(minca800)
            }
                className="flex self-start"
              >
                <p className="text-[24px] lg:text-[36px] lg:font-bold">800w</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-bar-to-down h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 20l16 0" />
                  <path d="M12 14l0 -10" />
                  <path d="M12 14l4 -4" />
                  <path d="M12 14l-4 -4" />
                </svg>
              </button>
              <button
            onClick={() =>
              downLoad(minca1600)
            }
                className="flex self-start"
              >
                <p className="text-[24px] lg:text-[36px] lg:font-bold">1600w</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-bar-to-down h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 20l16 0" />
                  <path d="M12 14l0 -10" />
                  <path d="M12 14l4 -4" />
                  <path d="M12 14l-4 -4" />
                </svg>
              </button>
            </div>
            <div>
              <img
                className="h-auto w-[310px] lg:h-auto lg:w-[512px]"
                src="/sigleProduct/scooter-single-product2.png"
                alt="scooter minca 800w"
              />
            </div>
          </div>
          {/* Cuadricula 3 */}
          <div className="mb-4 flex h-[190px] w-full items-center justify-start rounded-[20px] bg-white bg-[url('/recursos/bg-recursos1.jpg')] bg-cover bg-center px-[24px] py-[16px] lg:col-span-2 lg:h-[289px]">
          <button
            onClick={() =>
              downLoad(politicas)
            }
              className="flex self-start"
            >
              <p className="text-[24px] text-white lg:text-[36px] lg:font-bold">
                Políticas de garantía
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-bar-to-down h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20l16 0" />
                <path d="M12 14l0 -10" />
                <path d="M12 14l4 -4" />
                <path d="M12 14l-4 -4" />
              </svg>
            </button>
          </div>
          {/* Cuadricula 4 */}
          <div className="mb-4 flex h-[190px] w-full items-center justify-start rounded-[20px] bg-white bg-[url('/recursos/bg-recursos2.jpg')] bg-cover bg-center px-[24px] py-[16px] lg:h-[289px]">
          <button
            onClick={() =>
              downLoad(devoluciones)
            }
              className="flex self-start"
            >
              <p className="text-[24px] text-white lg:text-[36px] lg:font-bold">
                Devoluciones
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-bar-to-down h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20l16 0" />
                <path d="M12 14l0 -10" />
                <path d="M12 14l4 -4" />
                <path d="M12 14l-4 -4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
