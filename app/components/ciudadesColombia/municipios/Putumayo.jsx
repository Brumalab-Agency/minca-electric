import ArrowDown from '@/components/checkout/iconCheckOut/ArrowDown';
import React from 'react';

const Putumayo = ({ onChange }) => {
  const municipios = [
    "Colon",
    "El tigre",
    "La dorada san miguel",
    "La hormiga - valle guamuez",
    "Mocoa",
    "Orito",
    "Puerto asis",
    "Puerto caicedo",
    "Puerto guzman",
    "Puerto leguizamo",
    "Puerto umbria",
    "San francisco",
    "Santana",
    "Santiago",
    "Sibundoy",
    "Villagarzon"
  ];

  return (
    <div className="relative">
      <select
        name="Direccion1"
        id="Putumayo"
        className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500 font-light text-[14px]"
        onChange={onChange}
      >
        <option value="">Por favor seleccione</option>
        {municipios.map((municipio, index) => (
          <option key={index} value={municipio}>
            {municipio}
          </option>
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

export default Putumayo;