import React from 'react';

const Quindio = ({ onChange }) => {
  const municipios = [
    "Armenia",
    "Barcelona",
    "Buenavista",
    "Calarca",
    "Circasia",
    "Cordoba",
    "Filandia",
    "Genova",
    "La tebaida",
    "Montenegro",
    "Pijao",
    "Quimbaya",
    "Salento"
  ];

  return (
    <select
      name="Direccion1"
      id="Quindio"
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

export default Quindio;