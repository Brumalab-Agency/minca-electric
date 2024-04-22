import { manrope, ubuntu } from "../../ui/fonts";
import { TProductVariant } from "../titulos/TProductVariant";

export const SolucionesComodidad = () => {
  return (
    <div className="w.full bg-[#111] px-4 pb-[40px] pt-10 text-white lg:grid lg:h-[540px] lg:grid-cols-3 lg:place-items-center lg:px-[100px] lg:py-20 ">
      <div className="mb-[40px] w-[300px] leading-[42px] lg:hidden">
        <TProductVariant
          titulo="soluciones para"
          subtitulo="tu comodidad"
          transform={"uppercase"}
        />
      </div>
      <div className="hidden w-[310px] justify-self-start text-[42px] uppercase lg:-mt-[50px] lg:block lg:leading-[52px] 2xl:w-[500px] 2xl:text-[64px] 2xl:leading-[74px]">
        <p>
          soluciones para <b> tu comodidad</b>
        </p>
      </div>
      <section
        className={`${manrope.className} flex gap-8 justify-self-center`}
      >
        <h1 className="text-[40px] font-bold leading-[3.2rem]">03</h1>
        <div>
          <h2 className="w-[232px] text-[26px] font-semibold lg:leading-[35px] 2xl:text-[35px]">
            Mantenimiento especializado
          </h2>
          <div className="2xl:mt-4">
            <ul className="2xl:text-[22px] 2xl:leading-[35px]">
              <li className="flex items-center gap-2">
                <img
                  className="hue-rotate-25 contrast-101 brightness-110 invert saturate-0 sepia-0 filter"
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Mantenimiento preventivo
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="hue-rotate-25 contrast-101 brightness-110 invert saturate-0 sepia-0 filter"
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Ajuste de frenos
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="hue-rotate-25 contrast-101 brightness-110 invert saturate-0 sepia-0 filter"
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Problemas eléctricos
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="hue-rotate-25 contrast-101 brightness-110 invert saturate-0 sepia-0 filter"
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Ajuste de tornillería
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="hue-rotate-25 contrast-101 brightness-110 invert saturate-0 sepia-0 filter"
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Mecánicos expertos
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className={`${manrope.className} mt-[45px] flex gap-8 justify-self-end lg:mt-0`}
      >
        <h1 className="text-[40px] font-bold leading-[3.2rem]">04</h1>
        <div>
          <h2 className="2xl:w-[370px] w-full  text-[26px] font-semibold lg:leading-[35px] 2xl:text-[35px]">
            Opciones de financiamiento
          </h2>
          <div className="2xl:mt-4">
            <ul className="2xl:text-[22px] 2xl:leading-[35px]">
              <li className="flex items-center gap-2">
                <img
                  className="hue-rotate-25 contrast-101 brightness-110 invert saturate-0 sepia-0 filter"
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
               Realizamos tu estudio
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="hue-rotate-25 contrast-101 brightness-110 invert saturate-0 sepia-0 filter"
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Sistecrédito
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="hue-rotate-25 contrast-101 brightness-110 invert saturate-0 sepia-0 filter"
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                RappiCard
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="hue-rotate-25 contrast-101 brightness-110 invert saturate-0 sepia-0 filter"
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Vanti Listo
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="hue-rotate-25 contrast-101 brightness-110 invert saturate-0 sepia-0 filter"
                  src="/servicioTecnico/checkmark-circle.png"
                  alt="verificación"
                />
                Addi
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
