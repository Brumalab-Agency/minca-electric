import { manrope, ubuntu } from "@/ui/fonts";
import Image from "next/image";
import { CardEspecifications } from "app/components/carruseles/CardEspecifications";
import { Boton } from "app/components/botones/Boton";
import Link from "next/link";
import Modal3d from "../modal3d/Modal3d";
import TooltipEspecificaciones from "../especificaciones-component/TooltipEspecificaciones";

export const SingleProductComponent = ({ scooters }) => {
  const productosScooters = scooters;

  const items = productosScooters.edges;

  let path = "";

  const paths = ["Minca 350W", "Minca 500W‎", "Minca 800W‎‎", "Minca 1600W‎"];

  items.map((item) => {
    console.log(item.node.sliderProductos.nombreProducto)
    if (item.node.sliderProductos.nombreProducto === paths[0]) {
      path = "Especificaciones_Scooter_Electrico_Minca_350W";
    }
  
    if (item.node.sliderProductos.nombreProducto === paths[1]) {
      console.log("500")
      path = "Especificaciones_Scooter_Electrico_Minca_500W";
    }

    if (item.node.sliderProductos.nombreProducto === paths[2]) {
      console.log("800")
      path = "Especificaciones_Scooter_Electrico_Minca_800W";
    }
  
    if (item.node.sliderProductos.nombreProducto === paths[3]) {
      console.log("1600")
      path = "Especificaciones_Scooter_Electrico_Minca_1600W";
    }
    console.log(path)
  })

  console.log(path)

  return (
    <div className="carrusel h-auto w-full">
      {items.map((item) => (
        <div className="relative p-4 lg:px-[100px] lg:py-14">
          <div className="slogan-dots mb-4 flex items-center justify-between">
            <div>
              <p className={`${ubuntu.className} text-[14px] text-[#42454A] `}>
                {item.node.sliderProductos.slogan}
              </p>
            </div>
          </div>
          <Image
            placeholder="empty"
            alt={item.node.sliderProductos.nombreProducto}
            className="lg:hidden"
            src={item.node.sliderProductos.foto1.sourceUrl}
            priority={true}
            width={390}
            height={400}
            style={{ objectFit: "cover" }}
          />
          <div>
            <div className="flex justify-between lg:justify-start 2xl:justify-between">
              <div className="flex flex-col justify-center">
                <small className={`${manrope.className} text-base font-medium`}>
                  {item.node.sliderProductos.anoVersion}
                </small>
                <h2
                  className={`${manrope.className} mb-1 text-[16px] font-bold uppercase text-[#111111]  lg:text-[42px] lg:leading-[45px]`}
                >
                  Scooter Eléctrico <br />
                  {item.node.sliderProductos.nombreProducto}
                </h2>
                <p
                  className={`${manrope.className} mb-1 text-[12px] font-normal uppercase text-[#111111]  lg:mt-4 lg:text-[26px] lg:font-medium`}
                >
                  {item.node.sliderProductos.subtitulo}
                </p>
                <p
                  className={`${ubuntu.className} text-[13px] font-normal leading-[15px] text-[#42454A]  lg:mt-5 lg:w-[342px] lg:text-[16px] lg:leading-[25px]`}
                >
                  {item.node.sliderProductos.description}
                </p>
                <div className="my-2 flex items-center gap-3 lg:mt-6 lg:gap-4">
                  <div
                    className={`${manrope.className} text-[14px] font-bold text-[#111111]  opacity-50 lg:text-[26px]`}
                  >
                    <p className="text-[12px]">Antes</p>

                    <del>{item.node.sliderProductos.precioRebajado}</del>
                  </div>
                  <div
                    className={`${manrope.className} text-[14px] font-bold text-[#111111]   lg:text-[26px]`}
                  >
                    <p className="text-[12px]">Ahora</p>
                    {item.node.sliderProductos.precioActual}
                  </div>
                  <span className="hidden items-center justify-center rounded-full bg-[#FF3333] bg-opacity-10 px-2.5 py-0.5 text-[#FF3333] lg:inline-flex lg:h-8 lg:px-[14px] lg:py-[6px]">
                    <p
                      className={`${manrope.className} whitespace-nowrap text-sm  `}
                    >
                      {item.node.sliderProductos.descuento}
                    </p>
                  </span>
                </div>
                {/* botones descuento oculto hasta su implementación y 3D PC */}
                {/* <Link
                  href="#"
                  className="relative mt-4 flex h-[44px] w-[355px] items-center justify-center gap-1 rounded-[5px] bg-[#F0EEED] text-[10px]"
                >
                  <Image
                    placeholder="empty"
                    className="logoCircular"
                    src="/addicirculo.svg"
                    width={33}
                    height={33}
                    alt="publicidad"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <p className="ml-2">Paga a crédito con</p>
                  <Image
                    placeholder="empty"
                    className="logoADDI"
                    src="/addilogo.svg"
                    width={23}
                    height={9}
                    alt="publicidad"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <p>
                    <strong>hasta 6 cuotas.</strong>
                  </p>
                  <p className="underline">Revisa si calificas</p>
                </Link> */}
                {item.node.sliderProductos.nombreProducto === paths[0] &&
                <div className="flex items-center space-x-2">
                    <h4 className="inline-block text-xl font-semibold">
                      Preventa
                    </h4>
                    <TooltipEspecificaciones tooltips={"si"} />
                  </div>
                }
                <div className="pt-8 ">
                  <Modal3d url_3d={item.node.sliderProductos.url3d} />
                </div>
              </div>
              <Image
                placeholder="empty"
                alt="publicidad"
                className="hidden lg:block"
                src={item.node.sliderProductos.foto1.sourceUrl}
                width={500}
                height={499}
              />
              {/* /Scooter/btn-slider-left-pc.png */}
              <div className="hidden flex-col justify-center lg:invisible lg:flex">
                {/* No existe boton, este es controlado por el componente carrusel, este espacio es de relleno */}
              </div>
            </div>
          </div>
          {/* ********** */}
          <div className="contenedor-cards-arrows relative">
            <div className="atributos-productos scroll-none relative z-10 mt-4 hidden h-[75px] items-center justify-center gap-2 overflow-y-hidden overflow-x-scroll  lg:flex lg:h-[150px] lg:justify-between lg:gap-4 lg:overflow-x-hidden">
              <CardEspecifications
                titulo={item.node.sliderProductos.motor}
                subtitulo={item.node.sliderProductos.vatios}
                tipo={item.node.sliderProductos.tipoBrushless}
              />

              <CardEspecifications
                titulo={item.node.sliderProductos.bateria}
                subtitulo={item.node.sliderProductos.ampere}
                tipo={item.node.sliderProductos.tipo}
              />
              <CardEspecifications
                titulo={item.node.sliderProductos.distancia}
                subtitulo={item.node.sliderProductos.km}
                tipo={item.node.sliderProductos.tipoAutonomia}
              />
              <CardEspecifications
                titulo={item.node.sliderProductos.velocidadNum}
                subtitulo={item.node.sliderProductos.kmh}
                tipo={item.node.sliderProductos.velocidadMaxima}
              />
              <CardEspecifications
                titulo={item.node.sliderProductos.peso}
                subtitulo={item.node.sliderProductos.kg}
                tipo={item.node.sliderProductos.pesoMaximo}
              />
              <CardEspecifications
                titulo={item.node.sliderProductos.frenos}
                subtitulo={item.node.sliderProductos.frenosNulo}
                tipo={item.node.sliderProductos.tipofrenos}
              />

              {
                <CardEspecifications
                  titulo={item.node.sliderProductos.pulgadas}
                  subtitulo={item.node.sliderProductos.tipoRodamiento}
                  tipo={item.node.sliderProductos.llanta}
                />
              }
              <CardEspecifications
                titulo={item.node.sliderProductos.pesoSc}
                subtitulo={item.node.sliderProductos.kg}
                tipo={item.node.sliderProductos.tpeso}
              />
            </div>
            {/* ******************* */}
            <div className="carusel-movil mt-4 flex h-full gap-1 overflow-y-hidden overflow-x-scroll p-[5px] lg:hidden">
              <CardEspecifications
                titulo={item.node.sliderProductos.motor}
                subtitulo={item.node.sliderProductos.vatios}
                tipo={item.node.sliderProductos.tipoBrushless}
              />
              <CardEspecifications
                titulo={item.node.sliderProductos.bateria}
                subtitulo={item.node.sliderProductos.ampere}
                tipo={item.node.sliderProductos.tipo}
              />
              <CardEspecifications
                titulo={item.node.sliderProductos.distancia}
                subtitulo={item.node.sliderProductos.km}
                tipo={item.node.sliderProductos.tipoAutonomia}
              />
              <CardEspecifications
                titulo={item.node.sliderProductos.velocidadNum}
                subtitulo={item.node.sliderProductos.kmh}
                tipo={item.node.sliderProductos.velocidadMaxima}
              />
              <CardEspecifications
                titulo={item.node.sliderProductos.peso}
                subtitulo={item.node.sliderProductos.kg}
                tipo={item.node.sliderProductos.pesoMaximo}
              />
              <CardEspecifications
                titulo={item.node.sliderProductos.frenos}
                subtitulo={item.node.sliderProductos.frenosNulo}
                tipo={item.node.sliderProductos.tipofrenos}
              />
              <CardEspecifications
                titulo={item.node.sliderProductos.pulgadas}
                subtitulo={item.node.sliderProductos.tipo}
                tipo={item.node.sliderProductos.llanta}
              />
              <CardEspecifications
                titulo={item.node.sliderProductos.pesoSc}
                subtitulo={item.node.sliderProductos.kg}
                tipo={item.node.sliderProductos.tpeso}
              />
            </div>
            <div className="scroll-indicator m-auto"></div>
          </div>

          <Link
            href={`/especificaciones/${(path)}`} // La expresión regular es por que por algún motivo se estaba colando un caracter especial desconocido el [U+200E]
            className="btn-scooter gird z-10 my-3 flex h-[52px] w-full place-items-center justify-center rounded-[62px]  bg-[#111] text-[16px] text-white lg:absolute lg:right-[100px]  lg:top-[59.2%]  lg:h-[48px] lg:w-[191px] 2xl:w-[235px]"
          >
            Comprar Ahora!
          </Link>
        </div>
      ))}
    </div>
  );
};
