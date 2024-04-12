import React from 'react';

const Vaupes = ({ onChange }) => {
  const municipios = [
    "Acaricuara",
    "Carurú",
    "Mitu",
    "Papanaua",
    "Taraira",
    "Tío barbas",
    "Yavaraté"
  ];

  return (
    <select
      name="Direccion1"
      id="Vaupes"
      className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"

    >
      <option value="">Elige una opción…</option>
      {municipios.map((municipio, index) => (
        <option key={index} value={municipio}>
          {municipio}
        </option>
      ))}
    </select>
  );
};

export default Vaupes;