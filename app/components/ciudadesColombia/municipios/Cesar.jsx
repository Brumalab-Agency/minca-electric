import React from 'react';

const Cesar = ({ onChange }) => {
  const municipios = [
    "Aguachica",
    "Arjona",
    "Astrea",
    "Ayacucho",
    "Becerril",
    "Bosconia",
    "Caracolicito",
    "Chimichagua",
    "Chiriguana",
    "Codazzi",
    "Curumani",
    "El copey",
    "El paso",
    "Gamarra",
    "Gonzalez",
    "La gloria",
    "La jagua de ibirico",
    "La loma",
    "La paz",
    "Manaure balcon del cesar",
    "Pailitas",
    "Pelaya",
    "Pueblo bello",
    "Rincon hondo",
    "Rio de oro",
    "San alberto",
    "San diego",
    "San martin",
    "San roque",
    "Tamalameque",
    "Valledupar"
  ];

  return (
    <select
      name="Direccion1"
      id="Cesar"
      className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"

    >
      <option value="">Elige una opción…</option>
      {municipios.map((municipio, index) => (
        <option key={index} value={municipio}>{municipio}</option>
      ))}
    </select>
  );
};

export default Cesar;
