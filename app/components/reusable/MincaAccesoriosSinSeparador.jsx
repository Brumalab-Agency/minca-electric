import { CardAccesorios } from "@/components/accesorios/CardAccesorios";
import { TProductVariant } from "@/components/titulos/TProductVariant";

export const MincaAccesoriosSinSeparador = () => {
  return (
    <div className="MincaAccesorios over h-auto w-full overflow-x-hidden bg-white p-4 lg:p-[48px]">
      <div className="py-4  lg:h-[710px] lg:w-auto lg:border-b-2">
        <div className="flex w-full items-center justify-between">
          <TProductVariant
            titulo="Accesorios MINCA,"
            subtitulo="estilo y seguridad "
            flexion="lg:flex"
          />
          <img
            className="hidden h-[24px] w-[64px] lg:block"
            src="/ambas-flechas.png"
            alt="flechas direccionales"
          />
        </div>
        <div className="carrusel-accesorios mt-[72px] flex gap-2 lg:gap-8 lg:h-[380px] overflow-x-scroll mb-[107px] lg:justify-center">
          <CardAccesorios />
          <CardAccesorios />
          <CardAccesorios />
          <CardAccesorios />
          <CardAccesorios ocultar="lg:hidden" mostrar="2xl:block" />
          <CardAccesorios ocultar="lg:hidden" mostrar="2xl:block" />
        </div>
      </div>
    </div>
  );
};
