import React from 'react';

const Santander = ({ onChange }) => {
  const municipios = [
    "Acapulco",
    "Aguada",
    "Aratoca",
    "Barbosa",
    "Barichara",
    "Barrancabermeja",
    "Betulia",
    "Bolivar",
    "Bucaramanga",
    "Capitanejo",
    "Cerrito",
    "Charala",
    "Chipata",
    "Cimitarra",
    "Concepcion",
    "Contratacion",
    "Curiti",
    "El carmen de chucuri",
    "El centro",
    "El peñon",
    "El playon",
    "Enciso",
    "Florian",
    "Floridablanca",
    "Galan",
    "Gambita",
    "Giron",
    "Guaca",
    "Guadalupe",
    "Guavata",
    "Guepsa",
    "Jesus maria",
    "La belleza",
    "La granja",
    "Landazuri",
    "La paz",
    "Lebrija",
    "Los santos",
    "Malaga",
    "Matanza",
    "Mogotes",
    "Molagavita",
    "Oiba",
    "Olival",
    "Onzaga",
    "Paramo",
    "Pescadero",
    "Piedecuesta",
    "Pinchote",
    "Puente nacional",
    "Puerto araujo",
    "Puerto olaya",
    "Puerto parra",
    "Puerto wilches",
    "Rionegro",
    "Sabana de torres",
    "San andres",
    "San benito",
    "San gil",
    "San joaquin",
    "San jose de miranda",
    "Santa helena del opon",
    "San vicente de chucuri",
    "Simacota",
    "Socorro",
    "Suaita",
    "Sucre",
    "Vado real",
    "Valle de san jose",
    "Velez",
    "Villanueva",
    "Zapatoca"
  ];

  return (
    <select
      name="Direccion1"
      id="Santander"
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

export default Santander;