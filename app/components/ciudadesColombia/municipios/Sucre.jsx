import React from 'react';

const Sucre = ({ onChange }) => {
  const municipios = [
    "Caimito",
    "Corozal",
    "Coveñas",
    "Galeras",
    "Guaranda",
    "La union",
    "Los palmitos",
    "Majagual",
    "Morroa",
    "Ovejas",
    "Sampues",
    "San benito abad",
    "San marcos",
    "San onofre",
    "San pedro",
    "Sincelejo",
    "Since",
    "Sucre",
    "Tolu",
    "Tolu viejo"
  ];

  return (
    <select
      name="Direccion1"
      id="Sucre"
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

export default Sucre;