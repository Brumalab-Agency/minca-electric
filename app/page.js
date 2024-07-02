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

export default function Home() {
  return (
    <main>
      <Hero />
      <CarruselScooters />
      {/* <HeroImagenSec />
      <CarruselEbikes /> */}
      <PruebaMinca />
      <CarruselAccesorios />
      <CambiaRuta />
      <SolucionesComodidad />
      <Testimonios />
      <ShowRoomComponent />
      {/* <TalleresComponent/> */}
      <MovileCardTalleres/>
      <TalleresSingleComponents/>
      <ClientesAliados />
      <Footer />
      <Whatsapp/>
    </main>
  );
}
