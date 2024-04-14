import FinanciaminetoComponent from "@/components/financiamiento/FinanciaminetoComponent";
import { Footer } from "@/components/home/Footer";
import { HeroContext } from "@/components/reusable/HeroContext";
import Whatsapp from "@/components/whatsapp/Whatsapp";
import React from "react";

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
