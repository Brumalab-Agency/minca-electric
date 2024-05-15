import { HeroContext } from "@/components/reusable/HeroContext";
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct";
import { Testimonios } from "@/components/testimonio/Testimonios";
import { Footer } from "@/components/home/Footer";
import SpiningText from "@/components/home/SpiningText";
import { CardHoverEffect } from "@/components/cardhovereffect/CardHoverEffect";
import TituloCardHoverEffect from "@/components/cardhovereffect/TituloCardHoverEffect";
import { CardHoverEffectShowrooms } from "@/components/cardhovereffect/CardHoverEffectShowrooms";
import Whatsapp from "@/components/whatsapp/Whatsapp";
import { ShowRoomComponent } from "@/components/showroom/ShowRoomComponent";



export const metadata = {
  title: {
    template: "Minca Electric | %s",
    default: "Minca Electric | Showrooms",
  },
  description:
    "Encuentra tu showroom Minca más cercano y enamórate de nuestras patinetas eléctricas.",
  metadataBase: new URL("https://www.mincaelectric.com/showrooms"),
  alternates: {
    canonical: "/Showrooms",
  },
  openGraph: {
    title: "Showrooms | Visita nuestras sedes",
    description:
      "Encuentra tu showroom Minca más cercano y enamórate de nuestras patinetas eléctricas.",
    url: "/Showrooms",
    siteName: "Minca Electric",
    images: "/og/Showrooms  Visita nuestras sedes .jpg",
    locale: "es_LA",
    type: "website",
  },
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
};

const Sedes = () => {
  return (
    <>
      <HeroContext titulo="SHOWROOMS" ocultar="hidden" />
      <HeroVideoSingleProduct
        titulo=""
        tituloSecundarioNegrita=""
        clases="normal-case"
        urlVideo="https://test.mincaelectric.com/wp-content/uploads/2024/03/sedes.mp4"
      />
      <ShowRoomComponent />
      <TituloCardHoverEffect />
      <CardHoverEffectShowrooms />
      <div className="spin-text-sedes relative mb-[20px] flex justify-between px-4 lg:mb-[50px] lg:px-[100px]">
        <p className="mt-[50px] lg:mt-[80px]">
          No solo estamos cambiando el juego,<br></br>{" "}
          <b>¡estamos cambiando tu viaje!</b>
        </p>
        <SpiningText text=" • Agenda tu • test drive 1">
          <img src="/imagotipo-negro.png" alt="logo tipo" />
        </SpiningText>
      </div>
      <Testimonios clases="mb-[70px]" clase2="lg:mb-[30px] mb-[81px]" />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Sedes;
