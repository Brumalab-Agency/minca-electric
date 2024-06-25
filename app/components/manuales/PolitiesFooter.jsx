"use client";

import Link from "next/link";
import { ubuntu } from "@/ui/fonts"; // Asegúrate de importar las fuentes correctamente

const DownloadPdfFooter = ({ garantia, name }) => {
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
        {name}
      </Link>
    </>
  );
};

export default DownloadPdfFooter;
