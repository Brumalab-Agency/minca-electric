import { HeroContext } from "@/components/reusable/HeroContext";
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct";
import { Section5 } from "@/components/sigle-product/Section5";
import { Separador } from "../separador/Separador";
import { SolucionesComodidad } from "@/components/home/SolucionesComodidad";
import { Footer } from "@/components/home/Footer";
import { ComponentTallerChico } from "@/components/reusable/ComponentTallerChico";
import { ScootersRendimiento } from "@/components/home/ScootersRendimiento";
import { ComponentTallerJaveriana } from "@/components/reusable/ComponentTallerJaveriana";
import { Testimonios } from "@/components/testimonio/Testimonios";
import Whatsapp from "@/components/whatsapp/Whatsapp";
import { CambiaRuta } from "@/components/home/CambiaRuta";
import { ComponentTallerCedritos } from "@/components/reusable/ComponentTallerCedritros";
import { ComponentAvenidaChile } from "@/components/reusable/ComponentAvenidaChile";

export const metadata = {
  title: {
    template: "Minca Electric | %s",
    default: "Minca Electric | Servicio técnico",
  },
  description:
    "Tu especialista en patinetas eléctricas. Servicio técnico y mantenimiento de calidad.",
  metadataBase: new URL("https://www.mincaelectric.com/servicios"),
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicio técnico | Mantenimiento",
    description:
      "Tu especialista en patinetas eléctricas. Servicio técnico y mantenimiento de calidad.",
    url: "/servicios",
    siteName: "Minca Electric",
    images: "/og/Servicio técnico  Mantenimiento .jpg",
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

const Servicios = () => {
  return (
    <>
      <HeroContext titulo="Servicio" tituloNegrita="técnico" ocultar="hidden" />
      <HeroVideoSingleProduct
        ocultar="lg:hidden"
        urlVideo="https://test.mincaelectric.com/wp-content/uploads/2024/05/posventa-horizontal.mp4"
      />
      <Section5 />
      <ComponentTallerChico />
      <ComponentTallerJaveriana />
      <ComponentTallerCedritos />
      <ComponentAvenidaChile />
      <Separador
        clases="lg:px-[100px] px-4"
        clase2="mt-[80px]"
        clase3="lg:mb-[50px] lg:mt-[100px]"
        claseText="2xl:text-[28px]"
      />
      <CambiaRuta />
      <SolucionesComodidad />
      <Testimonios />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Servicios;
