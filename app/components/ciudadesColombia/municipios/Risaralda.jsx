import React from 'react';

const Risaralda = ({ onChange }) => {
  const municipios = [
    "Apia",
    "Balboa",
    "Belén de Umbria",
    "Dosquebradas",
    "Guática",
    "Irra",
    "La Celia",
    "La Virginia",
    "Marsella",
    "Mistrato",
    "Pereira",
    "Pueblo Rico",
    "Quinchía",
    "San Clemente",
    "Santa Rosa de Cabal",
    "Santuario"
  ];

  return (
    <select
      name="Direccion1"
      id="Risaralda"
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

export default Risaralda;