import Loading from "@/loading";
import SimplyAgendamientoCedritos from "@/components/simplybook/SimplyAgendamientoCedritos";
import React, { Suspense } from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import Whatsapp from "@/components/whatsapp/Whatsapp";
import SimplyAgendamientoAvenidaChile from "@/components/simplybook/SimplyAgendamientoAvenidaChile";

export const TallerCedritos = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <div className="mb-20 px-4 lg:px-[100px]">
          <h1 className="text-left text-[32px] font-bold lg:mt-[155px] lg:text-[42px]">
            Taller Avenida Chile
          </h1>
          <p className="m-auto text-left text-base text-[#111] lg:text-[20px]">
            Encuentra el Mantenimiento Perfecto para Tu Scooter y Garantiza su
            Rendimiento. <br />
            ¡Programa tu Mantenimiento Ahora!
          </p>
        </div>
        {/* <SimplyAgendamientoCedritos /> */}
        <SimplyAgendamientoAvenidaChile />
      </Suspense>
      <Footer />
      <Whatsapp />
    </div>
  );
};

export default TallerCedritos;
