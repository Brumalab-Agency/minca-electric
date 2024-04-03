import FinanciaminetoComponent from "@/components/financiamiento/FinanciaminetoComponent";
import { Footer } from "@/components/home/Footer";
import { HeroContext } from "@/components/reusable/HeroContext";
import React from "react";

const FinaciamientoPage = () => {
  return (
    <>
      <HeroContext titulo="FINANCIAMIENTO" />
      <FinanciaminetoComponent />
      <Footer/>
    </>
  );
};

export default FinaciamientoPage;
