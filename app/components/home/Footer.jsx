import Image from "next/image";
import { manrope, ubuntu } from "../../ui/fonts";
import Newsletter from "../newsletter/Newsletter";
import Link from "next/link";

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
            <div className="informacion grid grid-cols-2 lg:grid-cols-1">
              <div className="info-minca-pc lg:w-[99px] lg:h-auto">
                <div className="informacion-minca leading-[45px]">
                  <h2
                    className={`${manrope.className}  text-[#111] text-[16px] font-bold mt-[32px]`}
                  >
                    MINCA
                  </h2>
                  <Link href="/productos/Minca%20350W"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca 350W
                  </Link>
                  <br/>
                  <Link href="/productos/Minca%20500W"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca 500W
                  </Link>
                  <br/>
                  <Link href="/productos/Minca%20800W"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca 800W
                  </Link>
                  <br/>
                  <Link href="/productos/Minca%201600W"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca 1600W
                  </Link>
                  <br/>
                  <Link href="#"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca City
                  </Link>
                  <br/>
                  <Link href="#"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca Trip
                  </Link>
                </div>
              </div>
              <div className="info-informacion-pc lg:hidden">
                <div className="informacion-minca leading-[45px]">
                  <h2
                    className={`${manrope.className}  text-[#111] text-[16px] font-bold mt-[32px]`}
                  >
                    INFORMACIÓN
                  </h2>
                  <Link
                  href="/politicasDevoluciones"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Política de devoluciones
                  </Link>
                  <br/>
                  <Link
                  href="/declaracionPrivacidad"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Declaración de privacidad
                  </Link>
                  <br/>
                  <Link href="#"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Términos y condiciones
                  </Link>
                  <br/>
                  <Link href="#"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Política de garantía{" "}
                  </Link>
                  <br/>
                  <Link href="#"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    PQR
                  </Link>
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
                  <div>
                    <Link
                      href="/politicasDevoluciones"
                      className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                    >
                      Política de devoluciones
                    </Link>
                  </div>
                  <div>
                    <Link
                    href="/declaracionPrivacidad"
                      className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                    >
                      Declaración de privacidad
                    </Link>
                  </div>
                  <div>
                    <Link
                    href="https://test.mincaelectric.com/wp-content/uploads/2024/03/TERMINOS-Y-CONDICIONES.pdf"
                      className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                    >
                      Términos y condiciones
                    </Link>
                  </div>
                  <div>
                    <Link
                    href="https://test.mincaelectric.com/wp-content/uploads/2024/03/POLITICAS-DE-GARANTIA.pdf"
                      className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                    >
                      Política de garantía{" "}
                    </Link>
                  </div>
                  <Link href="#"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    PQR
                  </Link>
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
                  <Link href="#"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Accesorios
                  </Link>
                  <br/>
                  <Link href="/servicios"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Servicio técnico
                  </Link>
                  <br/>
                  <Link href="/sedes"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Sedes
                  </Link>
                  <br/>
                  <Link href="/recursos"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Recursos
                  </Link>
                  <br/>
                  <Link href="/blog"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Blog
                  </Link>
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
                <Link href="tel:+573222102466"
                  className={`${ubuntu.className}  text-[#111] text-[12px] font-bold`}
                >
                  +57 322 2102466
                </Link>
                <Link href="mailto:info@mincaelectric.com"
                  className={`${ubuntu.className}  text-[#111] text-[12px] font-bold`}
                >
                  info@mincaelectric.com
                </Link>
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
            <Newsletter/>
          </div>
        </div>
      </div>
      <div className="bg-[#111] w-full h-[78px] flex flex-col justify-center items-center gap-2 lg:flex-row lg:items-center lg:justify-between lg:px-[40px] text-white">
        <p className="text-[12px] text-center">
          © 2024 Minca Electric | Todos los derechos reservados.{" "}
        </p>
        <div className="flex items-center gap-2">
          <p className={`${ubuntu.className} text-[12px]`}>Diseño Web</p>
          <img className="h-[10px] w-auto" src="/brumalabagency .svg" alt="logo tipo brumalab"/>
        </div>
      </div>
    </>
  );
};
