import { manrope, ubuntu } from "../../ui/fonts";
import { TProductVariant } from "../titulos/TProductVariant";

export const CambiaRuta = () => {
  return (
    <div className="px-4 pt-4 pb-[40px] lg:grid lg:grid-cols-3 lg:place-items-center lg:px-[100px] w-full lg:h-[540px]">
      <div className="w-[300px] lg:hidden mb-[40px] leading-[42px]">
        <TProductVariant
          titulo="Cambia de ruta,"
          subtitulo="cambia de energía"
          transform="uppercase"
          flexion= "lg:block"
        />
      </div>
      <div className="text-[42px] 2xl:text-[64px] uppercase hidden lg:block w-[310px] 2xl:w-[500px] lg:-mt-[50px] lg:leading-[52px] 2xl:leading-[74px] justify-self-start">
          <p>Cambia de ruta, <b>cambia de energía</b></p>
      </div>
      <section className={`${manrope.className} flex gap-8  justify-self-center`}>
        <h1 className="text-[50px] font-bold">01</h1>
        <div>
          <h2 className="w-[232px] text-[26px] font-semibold">
            Redefine tu viaje diario
          </h2>
          <p
            className={`${ubuntu.className} mt-25px w-[232px] text-balance text-base font-normal leading-[34px]`}
          >
            Olvídate del trancón Deja de pagar SOAT Transforma tu conducción
            Ahorra en combustible Activa tu conciencia ambiental
          </p>
        </div>
      </section>
      <section className={`${manrope.className} mt-[45px] flex gap-8 p-[0px] justify-self-end`}>
        <h1 className="text-[50px] font-bold">02</h1>
        <div>
          <h2 className="w-[232px] text-[26px] font-semibold">
            Confía en nuestra experiencia
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
