import { manrope, ubuntu } from "../../ui/fonts";
import { TProductVariant } from "../titulos/TProductVariant";

export const ScootersRendimiento = () => {
  return (
    <div className="h-auto w-full px-4 pb-[40px] pt-4 lg:grid lg:h-[540px] lg:grid-cols-3 lg:place-items-center lg:px-[100px]">
      <div className="mb-[40px] w-[300px] leading-[42px] lg:hidden">
        <TProductVariant
          titulo="Cambia de ruta,"
          subtitulo="cambia de energía"
          transform="uppercase"
          flexion="lg:block"
        />
      </div>
      <div className="hidden w-[390px] justify-self-start text-[42px] uppercase lg:-mt-[50px] lg:block lg:leading-[52px] 2xl:w-[500px] 2xl:text-[64px] 2xl:leading-[74px]">
        <p>
          Scooters en su <b>máximo rendimiento</b>
        </p>
      </div>
      <section
        className={`${manrope.className} flex gap-8  justify-self-center`}
      >
        <h1 className="text-[40px] font-bold leading-[3.2rem] text-[#111]">
          01
        </h1>
        <div>
          <h2 className=" w-full lg:w-[370px] text-[26px] font-semibold lg:leading-[35px] 2xl:text-[35px] text-wrap">
            Mantenimiento especializado
          </h2>
          <p
            className={`${ubuntu.className} mt-25px w-[232px] text-balance text-base font-normal leading-[34px]`}
          >
            <div>
              <ul className="2xl:text-[22px] 2xl:leading-[35px]">
                <li className="flex items-center gap-2">
                  <img
                    src="/servicioTecnico/checkmark-circle.png"
                    alt="verificación"
                  />
                  Accidente
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/servicioTecnico/checkmark-circle.png"
                    alt="verificación"
                  />
                  Lavado
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/servicioTecnico/checkmark-circle.png"
                    alt="verificación"
                  />
                  Despinche
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/servicioTecnico/checkmark-circle.png"
                    alt="verificación"
                  />
                  Ajuste de frenos
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/servicioTecnico/checkmark-circle.png"
                    alt="verificación"
                  />
                  Problemas eléctricos
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/servicioTecnico/checkmark-circle.png"
                    alt="verificación"
                  />
                  Ajuste de tornillería
                </li>
              </ul>
            </div>
          </p>
        </div>
      </section>
      <section
        className={`${manrope.className} mt-[45px] flex gap-8 justify-self-end p-[0px] lg:-mt-[63px]`}
      >
        <h1 className="text-[40px] font-bold leading-[3.2rem] text-[#111]">02</h1>
        <div>
          <h2 className="2xl:w-[370px] w-full  text-[26px] font-semibold lg:leading-[35px] 2xl:text-[35px]">
            Opciones de financiamiento
          </h2>
          <p
            className={`${ubuntu.className} mt-25px w-[232px] text-balance text-base font-normal leading-[34px]`}
          >
            <div>
              <ul className="2xl:text-[22px] 2xl:leading-[35px]">
                <li className="flex items-center gap-2">
                  <img
                    src="/servicioTecnico/checkmark-circle.png"
                    alt="verificación"
                  />
                  ADDI
                </li>
                <li className="flex items-center gap-2">
                  <img
                    className="self-start mt-2"
                    src="/servicioTecnico/checkmark-circle.png"
                    alt="verificación"
                  />
                  Contacta a uno de nuestros asesores para realizar tu estudio
                </li>
              </ul>
            </div>
          </p>
        </div>
      </section>
    </div>
  );
};
