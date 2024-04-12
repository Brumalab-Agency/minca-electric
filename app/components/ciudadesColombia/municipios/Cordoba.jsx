import React from 'react';

const Cordoba = ({ onChange }) => {
  const municipios = [
    "Ayapel",
    "Buena vista",
    "Canalete",
    "Carillo",
    "Cerete",
    "Chima",
    "Chinu",
    "Cienaga de oro",
    "Colomboy",
    "Cotorra",
    "El carito",
    "El varal",
    "El viajano",
    "La apartada",
    "La ye",
    "Lorica",
    "Los cordobas",
    "Momil",
    "Moñitos",
    "Montelibano",
    "Monteria",
    "Planeta rica",
    "Pueblo nuevo",
    "Puerto escondido",
    "Puerto libertador",
    "Purisima",
    "Sahagun",
    "San andres de sotavento",
    "San antero",
    "San bernardo del viento",
    "San carlos",
    "San jose de ure",
    "San pelayo",
    "San sebastian",
    "Tierra alta",
    "Tuchin",
    "Valencia",
    "Villa fatima"
  ];

  return (
    <select
      name="Direccion1"
      id="Cordoba"
      className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"

    >
      <option value="">Elige una opción…</option>
      {municipios.map((municipio, index) => (
        <option key={index} value={municipio}>{municipio}</option>
      ))}
    </select>
  );
};

export default Cordoba;
