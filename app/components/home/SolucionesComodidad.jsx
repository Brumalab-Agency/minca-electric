import { manrope, ubuntu } from "../../ui/fonts";
import { TProductVariant } from "../titulos/TProductVariant";

export const SolucionesComodidad = () => {
  return (
    <div className="bg-[#111] px-4 pt-10 lg:py-20 text-white pb-[40px] lg:grid lg:grid-cols-3 lg:place-items-center lg:px-[100px] w.full lg:h-[540px] ">
      <div className="w-[300px] lg:hidden mb-[40px] leading-[42px]">
        <TProductVariant
          titulo="soluciones para"
          subtitulo="tu comodidad"
          transform={"uppercase"}
        />
      </div>
      <div className="text-[42px] 2xl:text-[64px] uppercase hidden lg:block w-[310px] 2xl:w-[500px] lg:-mt-[50px] lg:leading-[52px] 2xl:leading-[74px] justify-self-start">
          <p>soluciones para <b> tu comodidad</b></p>
      </div>
      <section className={`${manrope.className} flex gap-8 justify-self-center`}>
        <h1 className="text-[40px] font-bold leading-[3.2rem]">03</h1>
        <div>
          <h2 className="w-[232px] text-[26px] font-semibold">
            Mantenimiento especializado
          </h2>
          <p
            className={`${ubuntu.className} mt-25px w-[232px] text-balance text-base font-normal leading-[34px]`}
          >
            Olvídate del trancón Deja de pagar SOAT Transforma tu conducción
            Ahorra en combustible Activa tu conciencia ambiental
          </p>
        </div>
      </section>
      <section className={`${manrope.className} mt-[45px] lg:mt-0 flex gap-8 justify-self-end`}>
        <h1 className="text-[40px] font-bold leading-[3.2rem]">04</h1>
        <div>
          <h2 className="w-[232px] text-[26px] font-semibold">
            Opciones de financiamiento
          </h2>
          <p
            className={`${ubuntu.className} mt-25px w-[232px] text-balance text-base font-normal leading-[34px]`}
          >
            Compromiso social y ambiental Sostenibilidad integral Innovación
            constante Diseños funcionales Acompañamiento postventa
          </p>
        </div>
      </section>
    </div>
  );
};
