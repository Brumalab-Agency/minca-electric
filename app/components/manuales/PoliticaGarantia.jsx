"use client";

import Link from "next/link";
import { ubuntu } from "@/ui/fonts"; // Asegúrate de importar las fuentes correctamente

const PoliticasGarantia = ({ garantia }) => {
  const downLoad = (url) => {
    const filename = url.split("/").pop();
    const element = document.createElement("a");
    element.href = url;
    element.download = filename;
    element.target = "_blank";
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  return (
    <>
      <Link
        href={garantia}
        onClick={(e) => {
          e.preventDefault();
          downLoad(garantia);
        }}
        className="btn-scooter lg: relative z-10 lg:top-[60%] lg:flex"
      >
        <button
          type="button"
          className={` my-3 h-[52px] w-full rounded-[62px] bg-[#111] text-[16px] text-white  lg:w-[210px]`}
        >
          {`Política de garantías`}
        </button>
      </Link>
    </>
  );
};

export default PoliticasGarantia;
