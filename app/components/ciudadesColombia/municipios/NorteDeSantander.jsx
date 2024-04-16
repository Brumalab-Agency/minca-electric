import ArrowDown from '@/components/checkout/iconCheckOut/ArrowDown';
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
    <div className="relative">
      <select
        name="Direccion1"
        id="NorteDeSantander"
        className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500 font-light text-[14px]"
      
      >
        <option value="">Por favor seleccione</option>
        {municipios.map((municipio, index) => (
          <option key={index} value={municipio}>
            {municipio}
          </option>
        ))}
      </select>
      <span
        className="absolute right-0 mr-1 text-[#111]"
        style={{ top: "25%" }}
      >
        <ArrowDown width={24} height={24} className="fill-current" />
      </span>
    </div>
  );
};

export default NorteDeSantander;