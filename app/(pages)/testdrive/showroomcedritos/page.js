import Loading from "@/loading";
import CedritosWidget from "@/components/simplybook/scripts/CedritosScript";
import React, { Suspense } from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export const TallerCedritos = () => {
  return (
    <div>
      <Header />
      <div className="p-4 text-center lg:px-[100px]">
        <h1 className="text-left text-[32px] font-semibold lg:mt-[155px] lg:text-[48px]">
          Showroom Cedritos
        </h1>
        <div className="pb-100 lg:max-w-[70%]">
          <p className="m-auto  text-left text-base font-light text-[#111]  lg:text-[20px]">
            ¡Bienvenido a Nuestro Rincón de la Movilidad Sostenible! Tu
            Oportunidad de Descubrir el Futuro de la Conducción Está a Solo un
            Paso.
          </p>
          <br />
          <p className="m-auto text-left text-base font-light text-[#111]  lg:text-[20px]">
            ¡Agenda Tu Test Drive!
          </p>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <CedritosWidget />
      </Suspense>
      <Footer />
      <Whatsapp />
    </div>
  );
};

export default TallerCedritos;
