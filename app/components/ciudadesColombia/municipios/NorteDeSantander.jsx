import React from 'react';

const NorteDeSantander = ({ onChange }) => {
  const municipios = [
    "Ábrego",
    "Arboledas",
    "Bochalema",
    "Bucarasica",
    "Cáchira",
    "Cácota",
    "Chinácota",
    "Chitagá",
    "Convención",
    "Cúcuta",
    "Cucutilla",
    "Durania",
    "El Carmen",
    "El Zulia",
    "Gramalote",
    "Hacarí",
    "Herrán",
    "Labateca",
    "La Esperanza",
    "Los Patios",
    "Lourdes",
    "Mutiscua",
    "Ocaña",
    "Pamplona",
    "Pamplonita",
    "Puerto Santander",
    "Ragonvalia",
    "Salazar",
    "San Calixto",
    "San Cayetano",
    "Santiago",
    "Sardinata",
    "Silos",
    "Teorama",
    "Tibú",
    "Toledo",
    "Villa Caro",
    "Villa del Rosario"
  ];

  return (
    <select
      name="Direccion1"
      id="NorteDeSantander"
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

export default NorteDeSantander;