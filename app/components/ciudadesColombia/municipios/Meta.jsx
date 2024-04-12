import React from 'react';

const Meta = ({ onChange }) => {
  const municipios = [
    "Acacias",
    "Apiay",
    "Barranca de upia",
    "Castilla la nueva",
    "Cubarral san luis",
    "Cumaral",
    "Fuente de oro",
    "Granada",
    "Guamal",
    "La macarena",
    "Pachaquiaro",
    "Puerto concordia",
    "Puerto gaitan",
    "Puerto lleras",
    "Puerto lopez",
    "Puerto rico",
    "Restrepo",
    "San juan de arama",
    "San martin",
    "Uribe",
    "Villavicencio",
    "Vista hermosa",
  ];

  return (
    <select
      name="Direccion1"
      id="Meta"
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

export default Meta;