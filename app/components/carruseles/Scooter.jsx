import { CardEspecifications } from "./CardEspecifications";
import Image from "next/image";
import { manrope, ubuntu } from "@/ui/fonts";
import { Boton } from "../botones/Boton";
import Link from "next/link";
import Modal3d from "../modal3d/Modal3d";

const Scooter = ({ scooter }) => {
  const item = scooter.node.sliderProductos;

  return (
    <div id="scooter" className="carrusel h-auto w-full">
      <div className="relative p-4 lg:px-[100px] lg:py-14">
        <div className="slogan-dots mb-4 flex items-center justify-between">
          <div>
            <p className={`${ubuntu.className} text-[14px] text-[#42454A] `}>
              {item.slogan}
            </p>
          </div>
        </div>
        <Image
          placeholder="empty"
          alt={item.nombreProducto}
          className="lg:hidden"
          src={item.imagen.sourceUrl}
          priority={true}
          width={390}
          height={400}
          style={{ objectFit: "cover" }}
        />
        <Boton slug={item.slugDinamicoTemporal} param="Comprar Ahora" />
        <div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <h2
                className={`${manrope.className} mb-1 text-[16px] font-bold uppercase text-[#111111]  lg:text-[42px] lg:leading-[35px]`}
              >
                {item.nombreProducto}
              </h2>
              <p
                className={`${manrope.className} mb-1 text-[12px] font-normal uppercase text-[#111111]  lg:mt-4 lg:text-[26px] lg:font-medium`}
              >
                {item.subtitulo}
              </p>
              <p
                className={`${ubuntu.className} text-[13px] font-normal leading-[15px] text-[#42454A]  lg:mt-5 lg:w-[342px] lg:text-[16px] lg:leading-[25px]`}
              >
                {item.description}
              </p>
              {/* Btn ADDi compartido con PC/Movil */}
              <div className="pt-8 lg:hidden">
                <Modal3d url_3d={item.url3d} />
              </div>
              <div className="my-2 flex items-center gap-3 lg:mt-6 lg:gap-4">
                <div
                  className={`${manrope.className} text-[14px] font-bold text-[#111111]  opacity-50 lg:text-[26px]`}
                >
                  <p className="text-[14px]">Antes</p>
                  <del>{item.precioRebajado}</del>
                </div>
                <div
                  className={`${manrope.className} text-[14px] font-bold text-[#111111]  lg:text-[26px]`}
                >
                  <p className="text-[14px]">Ahora</p>
                  {item.precioActual}
                </div>
                <span className="items-center justify-center rounded-full bg-[#FF3333] bg-opacity-10 px-2.5 py-0.5 text-[#FF3333] lg:inline-flex lg:h-8 lg:px-[14px] lg:py-[6px]">
                  <p
                    className={`${manrope.className} whitespace-nowrap text-sm  `}
                  >
                    {item.descuento}
                  </p>
                </span>
              </div>
              {/* botones descuento y 3D PC*/}
              <Link
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
              </Link>
              <div className="hidden pt-8 lg:block">
                <Modal3d url_3d={item.url3d} />
              </div>
            </div>
            <Image
              placeholder="empty"
              alt="publicidad"
              className="hidden lg:block"
              src={item.imagen.sourceUrl}
              width={500}
              height={499}
            />
            {/* /Scooter/btn-slider-left-pc.png */}
            <div className="hidden flex-col justify-center lg:invisible lg:flex">
              {/* No existe boton, este es controlado por el componente carrusel, este espacio es de relleno */}
            </div>
          </div>
          {/* botones descuento y 3D MOVIL */}
        </div>
        {/* ********** */}
        <div className="contenedor-cards-arrows relative">
          <div className="atributos-productos scroll-none relative z-10 mt-4 hidden h-[75px] items-center justify-center gap-2 overflow-y-hidden overflow-x-scroll px-4 lg:flex lg:h-[150px] lg:justify-between lg:gap-6 lg:overflow-x-hidden lg:px-0">
            <CardEspecifications
              titulo={item.motor}
              subtitulo={item.vatios}
              tipo={item.tipoBrushless}
            />
            <CardEspecifications
              titulo={item.bateria}
              subtitulo={item.ampere}
              tipo={item.tipo}
            />
            <CardEspecifications
              titulo={item.distancia}
              subtitulo={item.km}
              tipo={item.tipoAutonomia}
            />
            <CardEspecifications
              titulo={item.velocidadNum}
              subtitulo={item.kmh}
              tipo={item.velocidadMaxima}
            />
            <CardEspecifications
              titulo={item.peso}
              subtitulo={item.kg}
              tipo={item.pesoMaximo}
            />
            <CardEspecifications
              titulo={item.frenos}
              subtitulo={item.frenosNulo}
              tipo={item.tipofrenos}
            />
            <CardEspecifications
              titulo={item.pulgadas}
              subtitulo={item.tipoRodamiento}
              tipo={item.llanta}
            />
            <CardEspecifications
              titulo={item.pesoSc}
              subtitulo={item.kg}
              tipo={item.tpeso}
            />
          </div>
          {/* ******************* */}
          <div className="carusel-movil mt-4 flex h-full gap-1 overflow-y-hidden overflow-x-scroll p-[5px] lg:hidden">
            <CardEspecifications
              titulo={item.motor}
              subtitulo={item.vatios}
              tipo={item.tipoBrushless}
            />
            <CardEspecifications
              titulo={item.bateria}
              subtitulo={item.ampere}
              tipo={item.tipo}
            />
            <CardEspecifications
              titulo={item.distancia}
              subtitulo={item.km}
              tipo={item.tipoAutonomia}
            />
            <CardEspecifications
              titulo={item.velocidadNum}
              subtitulo={item.kmh}
              tipo={item.velocidadMaxima}
            />
            <CardEspecifications
              titulo={item.peso}
              subtitulo={item.kg}
              tipo={item.pesoMaximo}
            />
            <CardEspecifications
              titulo={item.frenos}
              subtitulo={item.frenosNulo}
              tipo={item.tipofrenos}
            />
            <CardEspecifications
              titulo={item.pulgadas}
              subtitulo={item.tipo}
              tipo={item.llanta}
            />
            <CardEspecifications
              titulo={item.pesoSc}
              subtitulo={item.kg}
              tipo={item.tpeso}
            />
          </div>
          <div className="scroll-indicator m-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Scooter;
