import ArrowDown from "@/components/checkout/iconCheckOut/ArrowDown";
import React from "react";

const Amazonas = ({ onChange }) => {
  return (
    <div className="relative">
      <select
        name="Direccion1"
        id="Amazonas"
        className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-white bg-opacity-50 py-3 pl-3 pr-8 text-[14px] font-light leading-tight text-gray-500"
      >
        <option value="">Por favor seleccione</option>
        <option value="El encanto">El encanto</option>
        <option value="La Chorrera">La Chorrera</option>
        <option value="La Pedrera">La Pedrera</option>
        <option value="La Victoria">La Victoria</option>
        <option value="Miriti Paraná">Miriti Paraná</option>
        <option value="Leticia">Leticia</option>
        <option value="Puerto Alegría">Puerto Alegría</option>
        <option value="Puerto Arica">Puerto Arica</option>
        <option value="Puerto Nariño">Puerto Nariño</option>
        <option value="Puerto Santander">Puerto Santander</option>
        <option value="Tarapacá">Tarapacá</option>
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

export default Amazonas;
