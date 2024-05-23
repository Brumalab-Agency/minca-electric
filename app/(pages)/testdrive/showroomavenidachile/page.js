import Loading from "@/loading";
import CedritosWidget from "@/components/simplybook/scripts/CedritosScript";
import React, { Suspense } from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import Whatsapp from "@/components/whatsapp/Whatsapp";
import AvenidaChileWidget from "@/components/simplybook/scripts/AvenidaChileScript";

export const ShowRoomAvenidaChile = () => {
  return (
    <div>
      <Header />
      <div className="p-4 text-center lg:px-[100px]">
        <h1 className="text-left text-[32px] font-bold lg:mt-[155px] lg:text-[62px]">
          Showroom Avenida Chile
        </h1>
        <p className="m-auto text-left text-base text-[#111] lg:text-[20px]">
          Bienvenido a Nuestro Rincón de la Movilidad Sostenible! Experimenta la
          Elegancia de la Electricidad en Minca Electric Showroom Cedritos. Tu
          Oportunidad de Descubrir el Futuro de la Conducción Está a Solo un
          Paso. ¡Agenda Tu Test Drive Hoy y Vive el Encanto de los Scooters
          Eléctricos!
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        <AvenidaChileWidget />
      </Suspense>
      <Footer />
      <Whatsapp />
    </div>
  );
};

export default ShowRoomAvenidaChile;
