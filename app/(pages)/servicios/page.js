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

export const metadata = {
  title: "Servicios",
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
  icons: {
    icon: "/favicon.ico",
  },
};

const Servicios = () => {
  return (
    <>
      <HeroContext titulo="Servicio" tituloNegrita="técnico" ocultar="hidden" />
      <HeroVideoSingleProduct
        ocultar="lg:hidden"
        urlVideo="https://test.mincaelectric.com/wp-content/uploads/2024/03/Servicio-Tecnico-Minca-Electric.mp4"
      />
      <Section5 />
      <ComponentTallerChico />
      <ComponentTallerJaveriana />
      <Separador clases="lg:px-[100px] px-4" clase2="mt-[80px]" clase3="lg:mb-[50px] lg:mt-[100px]" claseText="2xl:text-[28px]"/>
      <ScootersRendimiento />
      <SolucionesComodidad />
      <Testimonios/>
      <Footer />
      <Whatsapp/>
    </>
  );
};

export default Servicios;
