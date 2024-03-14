import { HeroContext } from "@/components/reusable/HeroContext";
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct";
import { CarruselTaller } from "@/components/reusable/CarruselTaller";
import { CarruselShowRoom } from "@/components/reusable/CarruselShowRoom";
import { Testimonios } from "@/components/testimonio/Testimonios";
import { Footer } from "@/components/home/Footer";
import SpiningText from "@/components/home/SpiningText"



const Sedes = () => {
  return (
    <>
      <HeroContext titulo="SEDES" />
      <HeroVideoSingleProduct
        titulo="MINCA"
        tituloSecundarioNegrita="Servicios."
        clases="normal-case"
      />
      <CarruselTaller />
      <CarruselShowRoom />
      <div className="spin-text-sedes flex justify-between lg:px-[100px] lg:mb-[50px] mb-[20px]">
        <p className="px-4 lg:mt-[80px] mt-[50px]">No solo estamos cambiando el juego,<br></br> <b>¡estamos cambiando tu viaje!</b></p>
        <SpiningText text=" • Agenda tu • test drive 1">
            <img src="/imagotipo-negro.png" alt="logo tipo" />
        </SpiningText>
      </div>
      <Testimonios clases="mb-[70px]" clase2="mb-[81px]" />
      <Footer />
    </>
  );
};

export default Sedes;
