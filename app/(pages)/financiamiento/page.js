import FinanciaminetoComponent from "@/components/financiamiento/FinanciaminetoComponent";
import { Footer } from "@/components/home/Footer";
import { HeroContext } from "@/components/reusable/HeroContext";
import Whatsapp from "@/components/whatsapp/Whatsapp";
import React from "react";

export const metadata = {
  title: {
    template: "Minca Electric | %s",
    default: "Minca Electric | Financiamiento",
  },
  description:
    "Múltiples opciones de financiamiento para tu patineta eléctrica Minca. ¡Empieza a rodar!",
  metadataBase: new URL("https://www.mincaelectric.com/financiamiento"),
  alternates: {
    canonical: "/Financiamiento",
  },
  openGraph: {
    title: "Financiamiento | Nuestras opciones de crédito",
    description:
      "Múltiples opciones de financiamiento para tu patineta eléctrica Minca. ¡Empieza a rodar!",
    url: "/Financiamiento",
    siteName: "Minca Electric",
    images: "/og/Financiamiento  Nuestras opciones de crédito.jpg",
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


const FinaciamientoPage = () => {
  return (
    <>
      <HeroContext titulo="FINANCIAMIENTO" />
      <FinanciaminetoComponent />
      <Footer/>
      <Whatsapp/>
    </>
  );
};

export default FinaciamientoPage;
