import { manrope, ubuntu } from "@/ui/fonts";
import Image from "next/image";
import { CardEspecifications } from "app/components/carruseles/CardEspecifications";
import { Boton } from "app/components/botones/Boton";
import Link from "next/link";
import Modal3d from "../modal3d/Modal3d";

export const MincaCityComponent = ({ mincacity }) => {
  const productosMincaCity = mincacity;

  const items = productosMincaCity.products.edges;

  return (
    <div className="carrusel h-auto w-full">
      {items.map((item) => (
        <div className="relative p-4 lg:px-[100px] lg:py-14">
          <div className="slogan-dots mb-4 flex items-center justify-between">
            <div>
              <p className={`${ubuntu.className} text-[14px] text-[#42454A] `}>
                {item.node.sliderProductosEbikes.slogan}
              </p>
            </div>
          </div>

          <Image
            placeholder="empty"
            alt={item.node.name}
            className="lg:hidden"
            src={item.node.image.mediaItemUrl}
            priority={true}
            width={390}
            height={400}
            style={{ objectFit: "cover" }}
          />
          <div>
            <div className="flex justify-between">
              <div className="flex flex-col justify-center">
                <h2
                  className={`${manrope.className} mb-1 text-[16px] font-bold uppercase text-[#111111]  lg:text-[42px] lg:leading-[35px]`}
                >
                  {item.node.sliderProductosEbikes.nombreProducto}
                </h2>
                <p
                  className={`${manrope.className} mb-1 text-[12px] font-normal uppercase text-[#111111]  lg:mt-4 lg:text-[26px] lg:font-medium`}
                >
                  {item.node.sliderProductosEbikes.subtitulo}
                </p>
                <p
                  className={`${ubuntu.className} text-[13px] font-normal leading-[15px] text-[#42454A]  lg:mt-5 lg:w-[342px] lg:text-[16px] lg:leading-[25px]`}
                >
                  {item.node.sliderProductosEbikes.description}
                </p>
                <div className="my-2 flex items-center gap-3 lg:mt-6 lg:gap-4">
                  <div
                    className={`${manrope.className} text-[14px] font-bold text-[#111111]  lg:text-[26px]`}
                  >
                    {item.node.sliderProductosEbikes.precioActual}
                  </div>
                  <del
                    className={`${manrope.className} text-[14px] font-bold text-[#111111]  opacity-50 lg:text-[26px]`}
                  >
                    {item.node.sliderProductosEbikes.precioRebajado}
                  </del>
                  <span className="hidden items-center justify-center rounded-full bg-[#FF3333] bg-opacity-10 px-2.5 py-0.5 text-[#FF3333] lg:inline-flex lg:h-8 lg:px-[14px] lg:py-[6px]">
                    <p
                      className={`${manrope.className} whitespace-nowrap text-sm  `}
                    >
                      {item.node.sliderProductosEbikes.descuento}
                    </p>
                  </span>
                </div>
                {/* botones descuento y 3D PC */}
                <addi-widget price={item?.price} ally-slug="mincaelectric-ecommerce"></addi-widget>
                {/* <div className="pt-8 ">
                  <Modal3d url_3d={item.node.sliderProductos.url3d} />
                </div> */}
              </div>
              <Image
                placeholder="empty"
                alt="publicidad"
                className="hidden lg:block"
                src={item.node.image.mediaItemUrl}
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
                titulo={item.node.sliderProductosEbikes.motor}
                subtitulo={item.node.sliderProductosEbikes.vatios}
                tipo={item.node.sliderProductosEbikes.tipoBrushless}
              />

              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.bateria}
                subtitulo={item.node.sliderProductosEbikes.ampere}
                tipo={item.node.sliderProductosEbikes.tipo}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.distancia}
                subtitulo={item.node.sliderProductosEbikes.km}
                tipo={item.node.sliderProductosEbikes.tipoAutonomia}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.velocidadNum}
                subtitulo={item.node.sliderProductosEbikes.kmh}
                tipo={item.node.sliderProductosEbikes.velocidadMaxima}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.peso}
                subtitulo={item.node.sliderProductosEbikes.kg}
                tipo={item.node.sliderProductosEbikes.pesoMaximo}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.frenos}
                subtitulo={item.node.sliderProductosEbikes.frenosNulo}
                tipo={item.node.sliderProductosEbikes.tipofrenos}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.pulgadas}
                subtitulo={item.node.sliderProductosEbikes.tipo}
                tipo={item.node.sliderProductosEbikes.llanta}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.pesoSc}
                subtitulo={item.node.sliderProductosEbikes.kg}
                tipo={item.node.sliderProductosEbikes.tpeso}
              />
            </div>
            {/* ******************* */}
            <div className="carusel-movil mt-4 flex h-full gap-1 overflow-y-hidden overflow-x-scroll p-[5px] lg:hidden">
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.motor}
                subtitulo={item.node.sliderProductosEbikes.vatios}
                tipo={item.node.sliderProductosEbikes.tipoBrushless}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.bateria}
                subtitulo={item.node.sliderProductosEbikes.ampere}
                tipo={item.node.sliderProductosEbikes.tipo}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.distancia}
                subtitulo={item.node.sliderProductosEbikes.km}
                tipo={item.node.sliderProductosEbikes.tipoAutonomia}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.velocidadNum}
                subtitulo={item.node.sliderProductosEbikes.kmh}
                tipo={item.node.sliderProductosEbikes.velocidadMaxima}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.peso}
                subtitulo={item.node.sliderProductosEbikes.kg}
                tipo={item.node.sliderProductosEbikes.pesoMaximo}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.frenos}
                subtitulo={item.node.sliderProductosEbikes.frenosNulo}
                tipo={item.node.sliderProductosEbikes.tipofrenos}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.pulgadas}
                subtitulo={item.node.sliderProductosEbikes.tipo}
                tipo={item.node.sliderProductosEbikes.llanta}
              />
              <CardEspecifications
                titulo={item.node.sliderProductosEbikes.pesoSc}
                subtitulo={item.node.sliderProductosEbikes.kg}
                tipo={item.node.sliderProductosEbikes.tpeso}
              />
            </div>
            <div className="scroll-indicator m-auto"></div>
          </div>

          <Link
            href={`/especificaciones-ebikes/${encodeURIComponent(item.node.sliderProductosEbikes.nombreProducto)}`}
            className="btn-scooter gird z-10 my-3 flex h-[52px] w-full place-items-center justify-center rounded-[62px]  bg-[#111] text-[16px] text-white lg:absolute lg:right-[100px]  lg:top-[59.2%]  lg:h-[48px] lg:w-[191px] 2xl:w-[235px]"
          >
            Comprar Ahora
          </Link>
        </div>
      ))}
    </div>
  );
};
