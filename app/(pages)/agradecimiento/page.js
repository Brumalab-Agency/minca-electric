"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

export const Agradecimiento = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  function handleWindowsSize(){
    setWindowSize(
      {
        width: window.innerWidth,
        height: window.innerHeight
      }
    )
  }

  useEffect(()=>{
    window.onresize = () => handleWindowsSize();
  });

  return (
    <div className="flex h-screen w-full justify-center items-center flex-col text-center">
      <Confetti  width={windowSize.width} height={windowSize.height}/>
      <h1 className="text-[32px] font-bold text-[#111]">
        Gracias tus datos fueron enviados correctamente!!!
      </h1>
      <div className="w-full my-[50px]">
        <Link className="bg-[#111] h-[52px] lg:w-[210px] w-full text-white px-[50px] py-[16px] rounded-[62px]" href="/">Volver al Inicio</Link>
      </div>
    </div>
  );
};

export default Agradecimiento;
