import React from 'react';

const SanAndres = ({ onChange }) => {
  const municipios = [
    "Providencia",
    "San andres isla",
    "Santa catalina"
  ];

  return (
    <select
      name="Direccion1"
      id="SanAndres"
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

export default SanAndres;