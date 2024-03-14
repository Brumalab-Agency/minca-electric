import { Hero } from "./components/home/Hero";
import { ClientesAliados } from "./components/home/ClientesAliados";
import { Footer } from "./components/home/Footer";
import {CarruselScooters} from "./components/carruseles/CarruselScooters";
import { CarruselEbikes } from "./components/carruseles/CarruselEbikes";
import { HeroImagenSec } from "./components/home/HeroImagenSec";
import { PruebaMinca } from "./components/home/PruebaMinca";
import { CambiaRuta } from "./components/home/CambiaRuta";
import { SolucionesComodidad } from "./components/home/SolucionesComodidad";
import { Testimonios } from "./components/testimonio/Testimonios";
import { ShowRoomComponent } from "./components/showroom/ShowRoomComponent";
import { CarruselAccesorios } from "./components/carruseles/accesorios/CarruselAccesorios";
import BookingWidget from "./components/simplybook/SimplyBook";



export default function Home() {

  return (
    <main>
      <Hero />
      <CarruselScooters />
      <HeroImagenSec/>
      <CarruselEbikes />
      <PruebaMinca/>
      <CarruselAccesorios/>
      <CambiaRuta/>
      <SolucionesComodidad/>
      <Testimonios/>
      <ShowRoomComponent/>
      <ClientesAliados />
      <Footer />
    </main>
  );
}
