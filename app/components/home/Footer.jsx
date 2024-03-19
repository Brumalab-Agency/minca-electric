import Image from "next/image";
import { manrope, ubuntu } from "../../ui/fonts";
import Newsletter from "../newsletter/Newsletter";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#111] p-4 lg:p-10">
        <div className="bg-white w-auto lg:w-full h-auto p-5 pb-2 lg:px-10 lg:py-8 mt-[52px] rounded-[9px] relative">
          <div className="footer-principal lg:flex justify-between">
            <div className="logo-footer-pc lg:w-[248px] lg:h-auto">
              <Image
                className="mt-4"
                src="/imagotipo-negro.png"
                width={59}
                height={62}
                alt="imagotipo"
                placeholder = 'empty'
              />
              <p
                className={`${ubuntu.className}  text-[#111]/60 text-[14px] font-normal mt-[37px]`}
              >
                Menos humo, más estilo. Adelántate al futuro con una movilidad
                eléctrica.
              </p>
              <div className="redes-sociales flex items-center justify-start gap-2 mt-2">
                <div>
                  <img
                    src="/redesSociales/instagram.png"
                    alt="redes sociales"
                  />
                </div>
                <div>
                  <img src="/redesSociales/facebook.png" alt="redes sociales" />
                </div>
              </div>
            </div>
            {/* *** */}
            <div className="informacion flex justify-between">
              <div className="info-minca-pc lg:w-[99px] lg:h-auto">
                <div className="informacion-minca leading-[45px]">
                  <h2
                    className={`${manrope.className}  text-[#111] text-[16px] font-bold mt-[32px]`}
                  >
                    MINCA
                  </h2>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca 350W
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca 500W
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca 800W
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca 1600W
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca City
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca Trip
                  </p>
                </div>
              </div>
              <div className="info-informacion-pc lg:hidden">
                <div className="informacion-minca leading-[45px]">
                  <h2
                    className={`${manrope.className}  text-[#111] text-[16px] font-bold mt-[32px]`}
                  >
                    INFORMACIÓN
                  </h2>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Política de devoluciones
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Declaración de privacidad
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Términos y condiciones
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Política de garantía{" "}
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    PQR
                  </p>
                </div>
              </div>
            </div>
            {/* ************ */}
            <div>
              <div className="hidden lg:flex info-informacion-pc lg:w-[189px] lg:h-auto">
                <div className="informacion-minca leading-[45px]">
                  <h2
                    className={`${manrope.className}  text-[#111] text-[16px] font-bold mt-[32px]`}
                  >
                    INFORMACIÓN
                  </h2>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Política de devoluciones
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Declaración de privacidad
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Términos y condiciones
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Política de garantía{" "}
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    PQR
                  </p>
                </div>
              </div>
            </div>
            <div className="informacion flex justify-between">
              <div className="info-menu-pc lg:w-[154px] lg:h-auto">
                <div className="informacion-minca leading-[45px]">
                  <h2
                    className={`${manrope.className}  text-[#111] text-[16px] font-bold mt-[20px]`}
                  >
                    MENÚ
                  </h2>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Accesorios
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Servicio técnico
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Sedes
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Recursos
                  </p>
                  <p
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Blog
                  </p>
                </div>
              </div>
              <div className="informacion-minca leading-[45px]"></div>
            </div>
            <div className="agendar-footer-pc">
              <div className="flex justify-end">
                <button
                  className={`${ubuntu.className}  bg-[#111] rounded-[8px] px-[16px] py-[8px] text-white text-[14px] font-bold`}
                >
                  ¡Agendar Test Drive!
                </button>
              </div>
              <div className="text-right mt-4">
                <p
                  className={`${ubuntu.className}  text-[#111] text-[12px] font-bold`}
                >
                  +57 322 2102466
                </p>
                <p
                  className={`${ubuntu.className}  text-[#111] text-[12px] font-bold`}
                >
                  info@mincaelectric.com
                </p>
              </div>
            </div>
            <hr className="lg:hidden border border-0.5 border-solid border-[#111]/10 my-[15px] w-full absolute bottom-[4.2%] left-0 right-0" />
            <div className="card-tdc flex justify-center items-center mt-4 lg:hidden ">
              <Image 
              placeholder = 'empty'
              src="/card_tdc.png" 
              width={281} 
              height={42} 
              alt="Imagen representativa de caracteristicas del producto"/>
            </div>
          </div>
          {/* ******************* */}
          <div className="hidden lg:flex justify-between items-center footer-secundario mt-[96px]">
            <div className="card-tdc flex items-center">
              <Image 
              placeholder = 'empty'
              src="/card_tdc.png" width={281} height={30} alt="Imagen representativa de caracteristicas del producto"/>
            </div>
            <div className="flex justify-start items-center w-full">
              <div
                className={`${ubuntu.className}  text-[#1B1819] font-medium text-[12px] flex gap-4 justify-start items-center margin-custom`}
              >
                <p>INVERSIONES LOGUZ SAS</p> | <p>NIT 901127287-1</p> |{" "}
                <p>CRA 11A # 94A-56 LOCAL 3</p>
              </div>
            </div>
            <div className="ind-comercio flex justify-between items-center w-[380px]">
              <Image
              placeholder = 'empty'
                src="/footer-pc/camara-comercio.png"
                width={143}
                height={30}
                alt="Imagen representativa de caracteristicas del producto"
              />
              <img src="/footer-pc/slash.png" alt="slah" />
              <Image
              placeholder = 'empty'
                src="/footer-pc/Comercio Seguro.png"
                width={55}
                height={29}
                alt="Imagen representativa de caracteristicas del producto"
              />
            </div>
          </div>
        </div>
        {/* ************* */}
        <div className="next-footer flex lg:mt-[40px]">
          <div className="w-[663px]">
            <h2
              className={`${manrope.className}  font-normal text-[25px] mt-4 lg:mt-0 leading-[35px] lg:w-[663px] lg:h-[80px] lg:text-[40px] lg:leading-[42px] text-white`}
            >
              ¡Experimenta la emocionante revolución de la movilidad eléctrica!
            </h2>
          </div>
          <div className="hidden email lg:flex grow flex-col ml-4 lg:h-[80px]">
            <p className="font-normal text-[14px] text-[#FFF]">
              Suscríbete para conocer nuestras novedades y descuentos
            </p>
            {/* <form action="https://script.google.com/macros/s/AKfycby5QcWMaCXzwJ47ghVkUmDh6kOIXEuNN1-aTUNCUyYaHTLgw_ONwI7AdALaNlpGVE0A/exec" method="POST" autocomplete="off">
              <label
                htmlFor="Email"
                className="hidden lg:block overflow-hidden border border-white rounded-[12px] px-3 shadow-sm focus-within:border-white-600 focus-within:ring-1 focus-within:ring-white-600 h-[56px] mt-1 relative"
              >
                <span className="text-xs font-normal text-[#FFF] text-[10px] uppercase">
                  {" "}
                  Your email{" "}
                </span>
                <button type="submit">
                  <img
                    className="absolute right-4 top-6"
                    style={{filter: 'invert(98%) sepia(2%) saturate(718%) hue-rotate(340deg) brightness(122%) contrast(100%)'}}
                    src="/footer-pc/Vector.png"
                    alt="arrow-right"
                  />
                </button>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="@"
                  className="w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white bg-[#111]"
                />
              </label>
            </form> */}
            <Newsletter/>
          </div>
        </div>
      </div>
      <div className="bg-[#111] w-full h-[78px] flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between lg:px-[100px] text-white">
        <p className="text-[12px] text-center">
          © 2024 Minca Electric | Todos los derechos reservados.{" "}
        </p>
        <p className="text-[10px] text-center mt-1">
          Diseño Web <b>Brumalab</b>
        </p>
      </div>
    </>
  );
};
