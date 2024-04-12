import React from 'react';

const Guajira = ({ onChange }) => {
  const municipios = [
    "Albania",
    "Barrancas",
    "Buenavista",
    "Distraccion",
    "El molino",
    "Fonseca",
    "Hato nuevo",
    "La jagua del pilar",
    "Maicao",
    "Manaure",
    "Mingueo",
    "Riohacha",
    "San juan del cesar",
    "Uribia",
    "Urumita",
    "Villanueva"
  ];

  return (
    <select
      name="Direccion1"
      id="Guajira"
      className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"

    >
      <option value="">Elige una opción…</option>
      {municipios.map((municipio, index) => (
        <option key={index} value={municipio}>{municipio}</option>
      ))}
    </select>
  );
};

export default Guajira;
