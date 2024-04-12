import React from 'react';

const Vichada = ({ onChange }) => {
  const municipios = [
    "Cumaribo",
    "La primavera",
    "Puerto carreño",
    "Santa rosalia"
  ];

  return (
    <select
      name="Direccion1"
      id="Vichada"
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

export default Vichada;
