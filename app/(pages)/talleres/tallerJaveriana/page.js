import Loading from "@/loading";
import SimplyAgendamientoJaveriana from "@/components/simplybook/SimplyAgendamientoJaveriana";
import { Suspense } from "react";
import { Header } from "@/components/home/Header";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export const TallerJaveriana = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <div className="mb-20 px-4 lg:px-[100px]">
          <h1 className="text-left text-[32px] font-bold lg:mt-[155px] lg:text-[42px]">
            Taller Javeriana
          </h1>
          <p className="m-auto text-left text-base text-[#111] lg:text-[20px]">
            Encuentra el Mantenimiento Perfecto para Tu Scooter y Garantiza su
            Rendimiento. <br />
            ¡Programa tu Mantenimiento Ahora!
          </p>
        </div>
        <SimplyAgendamientoJaveriana />
      </Suspense>
      <Whatsapp />
    </div>
  );
};

export default TallerJaveriana;
