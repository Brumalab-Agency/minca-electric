import Image from "next/image";
import { manrope, ubuntu } from "../../ui/fonts";
import Newsletter from "../newsletter/Newsletter";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#111] p-4 lg:p-10">
        <div className="relative mt-[52px] h-auto w-auto rounded-[9px] bg-white p-5 pb-2 lg:w-full lg:px-10 lg:py-8">
          <div className="footer-principal justify-between lg:flex">
            <div className="logo-footer-pc lg:h-auto lg:w-[248px]">
              <Image
                className="mt-4"
                src="/imagotipo-negro.png"
                width={59}
                height={62}
                alt="imagotipo"
                placeholder="empty"
              />
              <p
                className={`${ubuntu.className}  mt-[37px] text-[14px] font-normal text-[#111]/60`}
              >
                Menos humo, más estilo. Adelántate al futuro con una movilidad
                eléctrica.
              </p>
              <div className="redes-sociales mt-2 flex items-center justify-start gap-2">
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
              <div className="info-minca-pc lg:h-auto lg:w-[99px]">
                <div className="informacion-minca leading-[45px]">
                  <h2
                    className={`${manrope.className}  text-[16px] font-bold text-[#111]`}
                  >
                    MINCA
                  </h2>
                  <Link
                    href="/productos/Minca%20350W"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    Minca 350W
                  </Link>
                  <br />
                  <Link
                    href="/productos/Minca%20500W"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    Minca 500W
                  </Link>
                  <br />
                  <Link
                    href="/productos/Minca%20800W"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    Minca 800W
                  </Link>
                  <br />
                  <Link
                    href="/productos/Minca%201600W"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    Minca 1600W
                  </Link>
                  <br />
                  {/* <Link href="#"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal hover:underline`}
                  >
                    Minca City
                  </Link>
                  <br/>
                  <Link href="#"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Minca Trip
                  </Link> */}
                </div>
              </div>
              <div className="info-informacion-pc lg:hidden">
                <div className="informacion-minca leading-[45px] ">
                  <h2
                    className={`${manrope.className}  text-[16px] font-bold text-[#111] `}
                  >
                    INFORMACIÓN
                  </h2>
                  <Link
                    href="/politicasDevoluciones"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    Política de devoluciones
                  </Link>
                  <br />
                  <Link
                    href="/declaracionPrivacidad"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    Declaración de privacidad
                  </Link>
                  <br />
                  <Link
                    href="#"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    Términos y condiciones
                  </Link>
                  <br />
                  <Link
                    href="#"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    Política de garantía{" "}
                  </Link>
                  <br />
                  <Link
                    href="#"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    PQR
                  </Link>
                </div>
              </div>
            </div>
            {/* ************ */}
            <div>
              <div className="info-informacion-pc hidden lg:flex lg:h-auto lg:w-[189px]">
                <div className="informacion-minca leading-[45px] ">
                  <h2
                    className={`${manrope.className}  text-[16px] font-bold text-[#111] `}
                  >
                    INFORMACIÓN
                  </h2>
                  <div>
                    <Link
                      href="/politicasDevoluciones"
                      className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                    >
                      Política de devoluciones
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/declaracionPrivacidad"
                      className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                    >
                      Declaración de privacidad
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://test.mincaelectric.com/wp-content/uploads/2024/03/TERMINOS-Y-CONDICIONES.pdf"
                      className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                    >
                      Términos y condiciones
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://test.mincaelectric.com/wp-content/uploads/2024/03/POLITICAS-DE-GARANTIA.pdf"
                      className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                    >
                      Política de garantía{" "}
                    </Link>
                  </div>
                  <Link
                    href="#"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    PQR
                  </Link>
                </div>
              </div>
            </div>
            <div className="informacion flex justify-between">
              <div className="info-menu-pc lg:h-auto lg:w-[154px]">
                <div className="informacion-minca leading-[45px] ">
                  <h2
                    className={`${manrope.className}  text-[16px] font-bold text-[#111] `}
                  >
                    MENÚ
                  </h2>
                  {/* <Link href="#"
                    className={`${ubuntu.className}  text-[#111]/60 text-[16px] font-normal`}
                  >
                    Accesorios
                  </Link>
                  <br/> */}
                  <Link
                    href="/servicios"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    Servicio técnico
                  </Link>
                  <br />
                  <Link
                    href="/sedes"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    Showrooms
                  </Link>
                  <br />
                  <Link
                    href="/recursos"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
                  >
                    Recursos
                  </Link>
                  <br />
                  <Link
                    href="/blog"
                    className={`${ubuntu.className}  text-[16px] font-normal text-[#111]/60 hover:underline`}
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
                  className={`${ubuntu.className}  mt-4 rounded-[8px] bg-[#111] px-[16px] py-[10px] text-[14px] font-bold text-white`}
                >
                  ¡Agendar Test Drive!
                </button>
              </div>
              <div className="mt-4 text-right">
                <Link
                  href="mailto:info@mincaelectric.com"
                  className={`${ubuntu.className}  text-[16px] font-bold text-[#111]`}
                >
                  info@mincaelectric.com
                </Link>
                <br />
                <Link
                  href="tel:+573222102466"
                  className={`${ubuntu.className}  text-[16px] font-bold text-[#111]`}
                >
                  +57 322 2102466
                </Link>
              </div>
            </div>
            <hr className="border-0.5 absolute bottom-[4.2%] left-0 right-0 my-[15px] w-full border border-solid border-[#111]/10 lg:hidden" />
            <div className="card-tdc mt-4 flex items-center justify-center lg:hidden ">
              <Image
                placeholder="empty"
                src="/card_tdc.png"
                width={281}
                height={42}
                alt="Imagen representativa de caracteristicas del producto"
              />
            </div>
          </div>
          {/* ******************* */}
          <div className="footer-secundario mt-[96px] hidden items-center justify-between lg:flex">
            <div className="card-tdc flex items-center">
              <Image
                placeholder="empty"
                src="/mercado pago .png"
                width={350}
                height={50}
                alt="Imagen representativa de caracteristicas del producto"
              />
            </div>
            <div className="flex w-full items-center justify-start">
              <div
                className={`${ubuntu.className}  margin-custom flex items-center justify-start gap-4 text-[12px] font-medium text-[#1B1819]`}
              >
                <p>INVERSIONES LOGUZ SAS</p> | <p>NIT 901127287-1</p> |{" "}
                <p>CRA 11A # 94A-56 LOCAL 3</p>
              </div>
            </div>
            <div className="ind-comercio flex w-[380px] items-center justify-between">
              <Link href="https://www.sic.gov.co/" target="_blank">
                <Image
                  placeholder="empty"
                  src="/footer-pc/camara-comercio.png"
                  width={143}
                  height={30}
                  alt="Imagen representativa de caracteristicas del producto"
                />
              </Link>
              <img src="/footer-pc/slash.png" alt="slah" />
              <Image
                placeholder="empty"
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
              className={`${manrope.className}  mt-4 text-[25px] font-normal  text-white lg:mt-0 lg:h-[40px] lg:w-[663px] lg:text-[30px] `}
            >
              ¡Experimenta la emocionante revolución
            </h2>
            <h2
              className={`${manrope.className}  text-[25px] font-normal text-white  lg:mt-0 lg:h-[40px] lg:w-[663px]  lg:text-[30px]`}
            >
              de la movilidad eléctrica!
            </h2>
          </div>
          <div className="email ml-4 hidden grow flex-col lg:flex lg:h-[80px]">
            <p className="text-[14px] font-normal text-[#FFF]">
              Suscríbete para conocer nuestras novedades y descuentos
            </p>
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="flex h-[78px] w-full flex-col items-center justify-center gap-2 bg-[#111] text-white lg:flex-row lg:items-center lg:justify-between lg:px-[40px]">
        <p className="text-center text-[12px]">
          © 2024 Minca Electric | Todos los derechos reservados.{" "}
        </p>
        <div className="flex items-center gap-2">
          <p className={`${ubuntu.className} text-[12px]`}>Diseño Web</p>
          <img
            className="h-[10px] w-auto"
            src="/brumalabagency .svg"
            alt="logo tipo brumalab"
          />
        </div>
      </div>
    </>
  );
};
