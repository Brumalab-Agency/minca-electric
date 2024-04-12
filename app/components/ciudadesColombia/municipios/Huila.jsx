import React from 'react';

const Huila = ({ onChange }) => {
  const municipios = [
    "Acevedo",
    "Agrado",
    "Aipe",
    "Algeciras",
    "Altamira",
    "Argentina",
    "Baraya",
    "Belen",
    "Bruselas",
    "Campoalegre",
    "Colombia",
    "Garzon",
    "Gigante",
    "Guadalupe",
    "Hobo",
    "Iquira",
    "La plata",
    "Nataga",
    "Neiva",
    "Oporapa",
    "Paicol",
    "Palermo",
    "Palestina",
    "Pital",
    "Pitalito",
    "Rivera",
    "Salado blanco",
    "San adolfo",
    "San agustin",
    "San jose de isnos",
    "Santa maria",
    "Suaza",
    "Tarqui",
    "Tello",
    "Teruel",
    "Tesalia",
    "Timana",
    "Vegalarga",
    "Villa vieja",
    "Yaguara"
  ];

  return (
    <select
      name="Direccion1"
      id="Huila"
      className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"
    
    >
      <option value="">Elige una opción…</option>
      {municipios.map((municipio, index) => (
        <option key={index} value={municipio}>{municipio}</option>
      ))}
    </select>
  );
};

export default Huila;
