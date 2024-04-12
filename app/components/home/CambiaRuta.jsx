import { manrope, ubuntu } from "../../ui/fonts";
import { TProductVariant } from "../titulos/TProductVariant";

export const CambiaRuta = () => {
  return (
    <div className="w-full border-t-2 px-4 pb-[40px] pt-20 lg:grid lg:h-[540px] lg:grid-cols-3 lg:place-items-center lg:px-[100px]">
      <div className="mb-[40px] w-[300px] leading-[42px] lg:hidden">
        <TProductVariant
          titulo="Cambia de ruta,"
          subtitulo="cambia de energía"
          transform="uppercase"
          flexion="lg:block"
        />
      </div>
      <div className="hidden w-[310px] justify-self-start text-[42px] uppercase lg:-mt-[50px] lg:block lg:leading-[52px] 2xl:w-[500px] 2xl:text-[64px] 2xl:leading-[74px]">
        <p>
          Cambia de ruta, <b>cambia de energía</b>
        </p>
      </div>
      <section
        className={`${manrope.className} flex gap-8  justify-self-center`}
      >
        <h1 className="text-[50px] font-bold leading-[3.2rem]">01</h1>
        <div>
          <h2 className="w-[232px] text-[26px] 2xl:text-[35px] font-semibold lg:leading-[35px]">
            Redefine tu viaje diario
          </h2>
          <div className="2xl:mt-4">
            <ul className="2xl:text-[22px] 2xl:leading-[35px]">
              <li className="flex items-center gap-2">
                <img
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Olvídate del trancón
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Deja de pagar SOAT
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Transforma tu conducción
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Ahorra en combustible
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Activa tu conciencia ambiental
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className={`${manrope.className} mt-[45px] flex gap-8 justify-self-end p-[0px] lg:mt-0`}
      >
        <h1 className="text-[50px] font-bold leading-[3.2rem]">02</h1>
        <div>
          <h2 className="2xl:w-[370px] w-full text-[26px] 2xl:text-[35px] font-semibold lg:leading-[35px]">
            Confía en nuestra experiencia
          </h2>
          <div className="2xl:mt-4">
            <ul className="2xl:text-[22px] 2xl:leading-[35px]">
              <li className="flex items-center gap-2">
                <img
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Compromiso social y ambiental
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Sostenibilidad integral
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Innovación constante
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Diseños funcionales
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Acompañamiento postventa
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
