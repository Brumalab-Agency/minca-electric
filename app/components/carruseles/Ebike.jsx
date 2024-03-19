import { CardEspecifications } from "./CardEspecifications";
import Image from "next/image";
import { manrope, ubuntu } from "../../ui/fonts";
import { Boton } from "../botones/Boton";
import Link from "next/link";

const Ebike = ({ scooter }) => {
  const item = scooter.node.sliderProductos;
  return (
    <div id="ebike" className="carrusel h-auto w-full">
      <div className="p-4 relative lg:px-[100px] lg:py-14">
        <div className="slogan-dots flex justify-between items-center mb-4">
          <div>
            <p
              className={`${ubuntu.className}  text-[14px] text-[#42454A]`}
            >
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
        <div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <h2
                className={`${manrope.className}  text-[16px] font-bold text-[#111111] uppercase mb-1 lg:text-[42px] lg:leading-[35px]`}
              >
                {item.nombreProducto}
              </h2>
              <p
                className={`${manrope.className}  text-[12px] font-normal text-[#111111] uppercase mb-1 lg:mt-4 lg:font-medium lg:text-[26px]`}
              >
                {item.subtitulo}
              </p>
              <p
                className={`${ubuntu.className}  text-[13px] font-normal text-[#42454A] leading-[15px] lg:mt-5 lg:text-[16px] lg:w-[342px] lg:leading-[25px]`}
              >
                {item.description}
              </p>
              <div className="flex items-center gap-3 my-2 lg:mt-6 lg:gap-4">
                <div
                  className={`${manrope.className}  text-[14px] font-bold text-[#111111] lg:text-[26px]`}
                >
                  {item.precioActual}
                </div>
                <del
                  className={`${manrope.className}  text-[14px] font-bold text-[#111111] lg:text-[26px] opacity-50`}
                >
                  {item.precioRebajado}
                </del>
                <span className="hidden lg:inline-flex items-center justify-center rounded-full bg-[#FF3333] bg-opacity-10 px-2.5 py-0.5 text-[#FF3333] lg:px-[14px] lg:py-[6px] lg:h-8">
                  <p
                    className={`${manrope.className}  whitespace-nowrap text-sm `}
                  >
                    {item.descuento}
                  </p>
                </span>
              </div>
              {/* botones descuento y 3D PC */}
              <div className="relative h-auto max-w-[401]">
                <Image
                  placeholder="empty"
                  className="-ml-1 mt-[6px] hidden lg:block"
                  src="/Scooter/addi.svg"
                  width={70}
                  height={32}
                  alt="publicidad"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                className={`${ubuntu.className} lg:flex items-center justify-start gap-1 text-[11px] mt-2 hidden`}
              >
                <p>Paga a crédito con</p>
                <img src="/Scooter/addi_pq.png" alt="Addi" />
                <b>hasta 6 cuotas.</b>
                <Link className="underline" href="#">
                  Revisa si calificas
                </Link>
              </div>
              <div className="max-w[210px] h-auto relative">
                <Image
                  placeholder="empty"
                  className="hidden lg:block mt-4 -ml-1"
                  src="/Scooter/ver_3d.png"
                  width={210}
                  height={52}
                  alt="publicidad"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
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
            <div className="lg:flex flex-col justify-center hidden lg:invisible">
              {/* No existe boton, este es controlado por el componente carrusel, este espacio es de relleno */}
            </div>
          </div>
          {/* botones descuento y 3D MOVIL*/}
          <Image
            placeholder="empty"
            alt="publicidad"
            className="-ml-1 lg:hidden"
            src="/Scooter/addi.svg"
            width={70}
            height={32}
          />
          <div
            className={`${ubuntu.className} flex items-center justify-start gap-1 text-[11px] mt-1 lg:hidden`}
          >
            <p>Paga a crédito con</p>
            <img src="/Scooter/addi_pq.png" alt="Addi" />
            <b>hasta 6 cuotas.</b>
            <Link className="underline" href="#">
              Revisa si calificas
            </Link>
          </div>
          <Image
            placeholder="empty"
            alt="publicidad"
            className="mt-2 -ml-1 lg:hidden"
            src="/Scooter/ver_3d.png"
            width={156}
            height={39}
          />
        </div>
        {/* ********** */}
        <div className="contenedor-cards-arrows relative">
          <div className="hidden atributos-productos scroll-none lg:flex items-center justify-center overflow-x-scroll lg:overflow-x-hidden overflow-y-hidden gap-2 lg:gap-4 mt-4 relative h-[75px] lg:h-[150px] lg:justify-between px-4 z-10">
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
          {/* ******************* */}
          <div className="carusel-movil lg:hidden flex p-[5px] gap-1 h-full mt-4 overflow-y-hidden overflow-x-scroll">
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
        <Boton param="Comprar Ahora"/>
      </div>
    </div>
  );
};

export default Ebike;
