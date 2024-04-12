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
    <select
      name="Direccion1"
      id="Putumayo"
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

export default Putumayo;