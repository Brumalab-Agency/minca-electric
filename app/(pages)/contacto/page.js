import { Footer } from "@/components/home/Footer";
import { FormularioContacto } from "@/components/contacto/FormularioContacto";
import { IconosContacto } from "@/components/contacto/IconosContacto";
import { HeroContext } from "@/components/reusable/HeroContext";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export const metadata = {
  title: {
    template: "Minca Electric | %s",
    default: "Minca Electric | Contacto",
  },
  description:
    "Contacta con Minca: Soporte para patinetas eléctricas, dudas y sugerencias.",
  metadataBase: new URL("https://www.mincaelectric.com/contacto"),
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Estamos atentos a tus solicitudes",
    description:
      "Contacta con Minca: Soporte para patinetas eléctricas, dudas y sugerencias.",
    url: "/contacto",
    siteName: "Minca Electric",
    images: "/og/Contacto  Estamos atentos a tus solicitudes.jpg",
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

const Contact = () => {
  return (
    <>
      <HeroContext titulo="Contacto" ocultar="hidden" />
      <FormularioContacto />
      <IconosContacto />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Contact;
