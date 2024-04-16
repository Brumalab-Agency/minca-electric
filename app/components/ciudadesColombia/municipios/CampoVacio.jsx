import ArrowDown from "@/components/checkout/iconCheckOut/ArrowDown";
import React from "react";

const CampoVacio = ({ onChange }) => {
  return (
    <div className="relative">
      <select
        name="Direccion1"
        id="Amazonas"
        className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-[#F0F1EB] bg-white bg-opacity-50 py-3 pl-3 pr-8 text-[14px] font-light leading-tight text-gray-500"
      >
        <option value="">Por favor seleccione</option>
        
      </select>
      <span
        className="absolute right-0 mr-1 text-[#111]"
        style={{ top: "25%" }}
      >
        <ArrowDown width={24} height={24} className="fill-current" />
      </span>
    </div>
  );
};

export default CampoVacio;
