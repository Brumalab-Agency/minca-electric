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
    <select
      name="Direccion1"
      id="ValledelCauca"
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

export default ValleDelCauca;