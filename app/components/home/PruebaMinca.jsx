import { BotonRelativo } from "../botones/BotonRelativo";
import { manrope, ubuntu } from "../../ui/fonts";
import Image from "next/image";

export const PruebaMinca = () => {
  return (
    <>
      <div className="pruebaMinca mb-8 mt-[10px] p-4 lg:flex lg:px-12 lg:bg-[url('/prueba-una-minca-1440_anchoCompleto.jpg')] bg-auto bg-no-repeat bg-right w-full h-[700px]">
        <div className="prueba-minca-pc grid w-full place-items-center justify-start">
          <div className="z-10 lg:w-[600px] 2xl:w-[750px]">
            <h1
              className={`${manrope.className} text-[40px] uppercase leading-[30px] leading-[40px] text-[#111] antialiased lg:mt-[77px] lg:block	lg:text-[64px] lg:font-light lg:leading-[28px] lg:tracking-wide 2xl:text-[90px] 2xl:leading-[40px]`}
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
              className={`${ubuntu.className} my-[20px] w-full text-balance leading-[20px] text-[#131313] antialiased lg:mt-12 lg:text-[22px] lg:font-normal lg:leading-[34px] lg:tracking-wide lg:text-[#131313] 2xl:text-[32px]`}
            >
              Te desafiamos a que realices un test drive y experimentes por ti
              mismo cómo nuestra scooter puede transformar tu forma de
              desplazarte.
            </p>
            <div className="btn-prueba-minca lgflex w-full">
              <BotonRelativo
                param="¡Agendar Test Drive!"
                clases="lg:w-[250px] bg-[#111] text-white"
              />
            </div>
          </div>
        </div>
        {/* PC */}
        <div className="container-image relative">
          <div className="background-gradient"></div>
          <div className="logo-flotante absolute -top-[19%] w-full lg:-left-[450px] lg:top-[19%]">
            {/* <img className="imagenes-flotantes" src="/prueba una minca_fondo_transparente.png" alt="imagen de personas en mono patines"/> */}
            {/*  <Image
            placeholder = 'empty'
              alt="Logo tipo MINCA"
              className="logo-minca-pc hidden lg:block"
              src="/Logo entero - Minca Electric.png"
              sizes="100vw"
              width={100}
              height={100}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "411px",
              }}
            /> */}
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
          {/*  <Image
          placeholder = 'empty'
            alt="Banner publicitario"
            className="hidden lg:block logo-minca-pc"
            src="/prueba-una-minca 1440.jpg"
            sizes="100vw"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
            }}
          /> */}
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
