import ArrowDown from '@/components/checkout/iconCheckOut/ArrowDown';
import React from 'react';

const Guaviare = ({ onChange }) => {
  const municipios = [
    "Calamar",
    "El Retorno",
    "Miraflores",
    "San jose del guaviare"
  ];

  return (
    <div className="relative">
      <select
        name="Direccion1"
        id="Guaviare"
        className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500 font-light text-[14px]"
        onChange={onChange}
      >
        <option value="">Por favor seleccione</option>
        {municipios.map((municipio, index) => (
          <option key={index} value={municipio}>{municipio}</option>
        ))}
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

export default Guaviare;
