import ArrowDown from '@/components/checkout/iconCheckOut/ArrowDown';
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
    <div className="relative">
      <select
        name="Direccion1"
        id="Cauca"
        className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500 font-light text-[14px]"
        onChange={onChange}
      >
        <option value="">Por favor seleccione</option>
        {municipios.map((municipio, index) => (
          <option key={index} value={municipio}>{municipio}</option>
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

export default Cauca;
