import React from 'react';

const Casanare = ({ onChange }) => {
  const municipios = [
    "Aguaclara",
    "Aguazul",
    "Araguaney",
    "Cusiana pozo",
    "Chámeza",
    "Hato corozal",
    "La chaparrera",
    "La salina",
    "Mani",
    "Monterrey",
    "Nunchia",
    "Orocue",
    "Paz de ariporo",
    "Pore",
    "Recetor",
    "Sabanalarga",
    "Sácama",
    "San luis de palenque",
    "Támara",
    "Tauramena",
    "Trinidad",
    "Villacarola",
    "Villanueva",
    "Yopal"
  ];

  return (
    <select
      name="Direccion1"
      id="Casanare"
      className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"
  
    >
      <option value="">Elige una opción…</option>
      {municipios.map((municipio, index) => (
        <option key={index} value={municipio}>{municipio}</option>
      ))}
    </select>
  );
};

export default Casanare;
