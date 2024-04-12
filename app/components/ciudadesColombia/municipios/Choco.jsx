import React from 'react';

const Choco = ({ onChange }) => {
  const municipios = [
    "Acandi",
    "Alto baudo",
    "Andagoya",
    "Animas",
    "Bahia solano mutis",
    "Bajo baudo pizarro",
    "Belen de bajira",
    "Bojaya",
    "Capurgana",
    "Certegui",
    "Condoto",
    "El carmen de atrato",
    "Guarato",
    "Istmina",
    "Jurado",
    "Lloro",
    "Novita",
    "Nuqui",
    "Quibdo",
    "Riosucio",
    "San jose del palmar",
    "Santa maria del darien",
    "Sipi",
    "Tado",
    "Tutunendo",
    "Unguia",
    "Yuto"
  ];

  return (
    <select
      name="Direccion1"
      id="Choco"
      className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"
 
    >
      <option value="">Elige una opción…</option>
      {municipios.map((municipio, index) => (
        <option key={index} value={municipio}>{municipio}</option>
      ))}
    </select>
  );
};

export default Choco;
