import { Footer } from "@/components/home/Footer";
import { DescargaManual } from "@/components/descarga/DescargaManual";
import { Acordion } from "@/components/reusable/Acordion";
import { HeroContext } from "@/components/reusable/HeroContext";
import { Testimonios } from "@/components/testimonio/Testimonios";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export const metadata = {
  title: {
    template: "Minca Electric | %s",
    default: "Minca Electric | Recursos",
  },
  description:
    "Resuelve tus dudas, consulta manuales y descubre la garantía Minca. ¡Todo aquí!",
  metadataBase: new URL("https://www.mincaelectric.com/recursos"),
  alternates: {
    canonical: "/Recursos",
  },
  openGraph: {
    title: "Recursos | Información relevante sobre tus compras",
    description:
      "Resuelve tus dudas, consulta manuales y descubre la garantía Minca. ¡Todo aquí!",
    url: "/Recursos",
    siteName: "Minca Electric",
    images: "/og/Recursos  Información relevante sobre tus compras.jpg",
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

const Recursos = () => {
  return (
    <>
      <HeroContext titulo="Recursos" ocultar="hidden" />
      <DescargaManual />
      <Acordion clase="mb-10" />
      <Testimonios clase3="lg:mt-[0px]" />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Recursos;
