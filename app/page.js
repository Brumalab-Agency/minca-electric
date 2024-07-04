// pages/index.js
import { Hero } from "./components/home/Hero";
import { ClientesAliados } from "./components/home/ClientesAliados";
import { Footer } from "./components/home/Footer";
import { CarruselScooters } from "./components/carruseles/CarruselScooters";
import { PruebaMinca } from "./components/home/PruebaMinca";
import { CambiaRuta } from "./components/home/CambiaRuta";
import { SolucionesComodidad } from "./components/home/SolucionesComodidad";
import { Testimonios } from "./components/testimonio/Testimonios";
import { ShowRoomComponent } from "./components/showroom/ShowRoomComponent";
import { CarruselAccesorios } from "./components/carruseles/accesorios/CarruselAccesorios";
import TalleresSingleComponents from "./components/talleres/TalleresSingleComponents";
import Whatsapp from "./components/whatsapp/Whatsapp";
import { MovileCardTalleres } from "./components/showroom/movileCardTalleres";
import { CarruselMincaCity } from "./components/carruseles/CarruselMincaCity";
import { CarruselEbikes } from "./components/carruseles/CarruselEbikes";
import { CarrouselMovileShowroom } from "./components/home/CarrouselMovileShowroom";
import { TalleresComponent } from "./components/showroom/TalleresComponent";
import { CarrouselMovileTalleres } from "./components/home/CarrouselTalleres";

export default function Home() {
  return (
    <main>
      <Hero />
      <CarruselScooters />

      {/* <CarruselEbikes /> */}
      {/* <CarruselMincaCity /> */}
      <PruebaMinca />
      <CarruselAccesorios />
      <CambiaRuta />
      <SolucionesComodidad />
      <Testimonios />
      <ShowRoomComponent />
      <br />
      <div className="mt-50">
        <TalleresComponent />
      </div>
      {/* <MovileCardTalleres /> */}
      {/* <TalleresSingleComponents /> */}
      <ClientesAliados />
      <Footer />
      <Whatsapp />
    </main>
  );
}
