import ArrowDown from '@/components/checkout/iconCheckOut/ArrowDown';
import React from 'react';

const ValleDelCauca = ({ onChange }) => {
  const municipios = [
    "Alcala",
    "Andalucía",
    "Ansermanuevo",
    "Argelia",
    "Bolivar",
    "Buenaventura",
    "Buga",
    "Bugalagrande",
    "Caicedonia",
    "Cali",
    "Calima",
    "Candelaria",
    "Cartago",
    "Dagua",
    "El Águila",
    "El Cairo",
    "El Carmelo",
    "El Cerrito",
    "El Dovio",
    "Florida",
    "Ginebra",
    "Guacarí",
    "Jamundí",
    "La Cumbre",
    "La Paila",
    "La Union",
    "La Victoria",
    "Obando",
    "Palmira",
    "Pradera",
    "Restrepo",
    "Riofrío",
    "Roldanillo",
    "San Pedro",
    "Sevilla",
    "Toro",
    "Trujillo",
    "Tuluá",
    "Ulloa",
    "Versalles",
    "Vijes",
    "Yotoco",
    "Yumbo",
    "Zarzal"
  ];

  return (
    <div className="relative">
      <select
        name="Direccion1"
        id="ValledelCauca"
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

export default ValleDelCauca;