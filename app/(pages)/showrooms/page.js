import { HeroContext } from "@/components/reusable/HeroContext";
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct";
import { Testimonios } from "@/components/testimonio/Testimonios";
import { Footer } from "@/components/home/Footer";
import SpiningText from "@/components/home/SpiningText"
import { CardHoverEffect } from "@/components/cardhovereffect/CardHoverEffect";
import TituloCardHoverEffect from "@/components/cardhovereffect/TituloCardHoverEffect";
import { CardHoverEffectShowrooms } from "@/components/cardhovereffect/CardHoverEffectShowrooms";
import Whatsapp from "@/components/whatsapp/Whatsapp";



const Sedes = () => {
  return (
    <>
      <HeroContext titulo="SHOWROOMS" ocultar="hidden"/>
      <HeroVideoSingleProduct
        titulo=""
        tituloSecundarioNegrita=""
        clases="normal-case"
        urlVideo="https://test.mincaelectric.com/wp-content/uploads/2024/03/sedes.mp4"
      />
      <TituloCardHoverEffect/>
      <CardHoverEffectShowrooms/>
      <div className="spin-text-sedes flex justify-between lg:px-[100px] lg:mb-[50px] mb-[20px] relative px-4">
        <p className="lg:mt-[80px] mt-[50px]">No solo estamos cambiando el juego,<br></br> <b>¡estamos cambiando tu viaje!</b></p>
        <SpiningText text=" • Agenda tu • test drive 1">
            <img src="/imagotipo-negro.png" alt="logo tipo" />
        </SpiningText>
      </div>
      <Testimonios clases="mb-[70px]" clase2="mb-[81px]" />
      <Footer />
      <Whatsapp/>
    </>
  );
};

export default Sedes;
