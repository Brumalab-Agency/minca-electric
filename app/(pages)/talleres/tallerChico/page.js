import Loading from "@/loading";
import SimplyAgendamientoChico from "@/components/simplybook/SimplyAgendamientoChico";
import React, { Suspense } from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export const TallerChico = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
      <div className="lg:px-[100px] px-4 mb-20">
        <h1 className="lg:text-[62px] text-[32px] font-bold lg:mt-[155px] text-left">Selecciona un lugar</h1>
          <p className="m-auto lg:text-[20px] text-base text-[#111] text-left">
          Encuentra el Mantenimiento Perfecto para Tu Scooter y Garantiza su Rendimiento. <br/>¡Programa tu Mantenimiento Ahora!
          </p>
      </div>
        <SimplyAgendamientoChico />
      </Suspense>
      <Footer/>
      <Whatsapp/>
    </div>
  );
};

export default TallerChico;
