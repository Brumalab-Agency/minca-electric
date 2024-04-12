import React from 'react';

const Cauca = ({ onChange }) => {
  const municipios = [
    "Almaguer",
    "Argelia",
    "Balboa",
    "Bolívar",
    "Buenos Aires",
    "Cajibío",
    "Caldono",
    "Caloto",
    "Corinto",
    "El tambo",
    "Florencia",
    "Guachené",
    "Guapi",
    "Inzá",
    "Jambaló",
    "La Sierra",
    "La Vega",
    "Mercaderes",
    "Miranda",
    "Morales",
    "Padilla",
    "Paez",
    "Patía",
    "Piamonte",
    "Piendamó",
    "Popayán",
    "Puerto Tejada",
    "Puracé",
    "Rosas",
    "San Sebastian",
    "Santander de Quilichao",
    "Santa Rosa",
    "Silvia",
    "Sotara",
    "Suárez",
    "Sucre",
    "Timbío",
    "Timbiquí",
    "Toribio",
    "Totoró",
    "Villa Rica"
  ];

  return (
    <select
      name="Direccion1"
      id="Cauca"
      className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"
     
    >
      <option value="">Elige una opción…</option>
      {municipios.map((municipio, index) => (
        <option key={index} value={municipio}>{municipio}</option>
      ))}
    </select>
  );
};

export default Cauca;
