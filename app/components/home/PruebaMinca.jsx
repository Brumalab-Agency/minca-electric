import { BotonRelativo } from "../botones/BotonRelativo";
import { manrope, ubuntu } from "../../ui/fonts";
import Image from "next/image";
import Link from "next/link";

export const PruebaMinca = () => {
  return (
    <>
      <div className="pruebaMinca mb-8 mt-[10px] h-[700px] w-full bg-auto bg-right bg-no-repeat  lg:flex lg:bg-[url('/prueba-una-minca-1440_anchoCompleto.jpg')] lg:px-[100px]">
        <div className="prueba-minca-pc grid w-full p-4 place-items-center justify-start">
          <div className="z-10 lg:w-[600px] 2xl:w-[750px]">
            <h1
              className={`${manrope.className} text-[40px] uppercase leading-[40px] text-[#111]  lg:mt-[77px] lg:block	lg:text-[48px] lg:leading-[30px] 2xl:leading-[35px] 2xl:text-[64px] lg:font-light lg:tracking-wide`}
            >
              Prueba
              <br></br>
              <br className="hidden lg:block"></br>
              <span>
                Una
                <b className="lg:ml-2 lg:font-bold"> MINCA</b>
              </span>
            </h1>
            <p
              className={`${ubuntu.className} my-[20px] w-full text-balance leading-[20px] text-[#131313]  lg:mt-12 lg:text-[22px] lg:font-normal lg:leading-[34px] lg:tracking-wide lg:text-[#131313] 2xl:text-[24px]`}
            >
              Te desafiamos a que realices un test drive y experimentes por ti
              mismo cómo nuestra scooter puede transformar tu forma de
              desplazarte.
            </p>
            <div className="btn-prueba-minca lgflex w-full">
              <Link
                href={`/testdrive/`}
                className="btn-scooter lg: relative z-10 lg:top-[60%] lg:flex"
              >
                <button
                  type="button"
                  className={`${ubuntu.className} bg-[#111] text-white  my-3 h-[52px] w-full rounded-[62px] text-[16px]  lg:w-[210px]`}
                >
                  Agendar Test Drive
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* PC */}
        <div className="container-image relative">
          <div className="background-gradient"></div>
          <div className="logo-flotante absolute -top-[19%] w-full lg:-left-[450px] lg:top-[19%]">
            {/* <img className="imagenes-flotantes" src="/prueba una minca_fondo_transparente.png" alt="imagen de personas en mono patines"/> */}

            <Image
              placeholder="empty"
              alt="Logo tipo MINCA"
              className="logo-minca-movil lg:hidden"
              src="/Logo entero - Minca Electric.png"
              sizes="100vw"
              width={100}
              height={100}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "190px",
              }}
            />
          </div>
    
          {/* Movil */}
          <Image
            placeholder="empty"
            alt="Banner publicitario"
            className="lg:hidden"
            src="/Banner 3 - Minca Electric.jpg"
            sizes="100vw"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "400px",
            }}
          />
        </div>
      </div>
    </>
  );
};
