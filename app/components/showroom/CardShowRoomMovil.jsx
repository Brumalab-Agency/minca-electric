import Link from "next/link";
import { manrope, ubuntu } from "../../ui/fonts";
import { BotonRelativo } from "../botones/BotonRelativo";

export const CardShowRoomMovil = ({
  tipo,
  clase,
  icono,
  titulo,
  src,
  btn,
  direccion,
  ciudad,
  entreSemana,
  sabado,
  domingo,
  url,
}) => {
  return (
    <div className="lg:hidden">
      <img className="w-full h-auto" src={src} alt={titulo} />
      <section className={`${clase} h-auto px-4 pt-4 pb-8 lg:hidden`}>
        <div className="p-1">
          <img className="h-[41px] w-[41px]" src={icono} alt="icon scooter" />
          <h1
            className={`${manrope.className} text-[40px] font-bold uppercase`}
          >
            {tipo}
          </h1>
          <h2
            className={`${manrope.className} text-[24px] font-semibold uppercase`}
          >
            {titulo}
          </h2>
          <div className={`${ubuntu.className} text-[14px] leading-[25px] mt-4`}>
            <b>Dirección:</b>
            <p>{direccion}</p>
            <p>{ciudad}</p>
            <br></br>
            <span>
            <b>Dirección:</b>
              <p>{entreSemana}</p>
              <p>{sabado}</p>
              <p>{domingo}</p>
            </span>
          </div>
        </div>
        <div className="mt-4 grid place-items-center">
          <Link
            href={url}
            className="rounded-[52px] bg-[#111] px-[55px] py-[15px] text-white "
          >
            {btn}
          </Link>
        </div>
      </section>
    </div>
  );
};
