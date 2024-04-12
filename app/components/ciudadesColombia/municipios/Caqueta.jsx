import React from 'react';

const Caqueta = ({ onChange }) => {
  const municipios = [
    "Albania",
    "Belen de los andaquies",
    "Cartagena del chaira",
    "Curillo",
    "El doncello",
    "El paujil",
    "Florencia",
    "La montañita",
    "Morelia",
    "Puerto rico",
    "Rionegro",
    "San jose del fragua",
    "San vicente del caguan",
    "Solita",
    "Valparaiso"
  ];

  return (
    <select
      name="Direccion1"
      id="Caqueta"
      className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"
     
    >
      <option value="">Elige una opción…</option>
      {municipios.map((municipio, index) => (
        <option key={index} value={municipio}>{municipio}</option>
      ))}
    </select>
  );
};

export default Caqueta;
