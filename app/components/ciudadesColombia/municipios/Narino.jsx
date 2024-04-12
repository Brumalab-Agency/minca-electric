import React from 'react';

const Narino = ({ onChange }) => {
  const municipios = [
    "Aldana",
    "Altaquer",
    "Ancuya",
    "Barbacoas",
    "Belen",
    "Berruecos arboleda",
    "Buesaco",
    "Buesaquillo",
    "Cabrera",
    "Cajapi",
    "Candelillas",
    "Carlosama cuaspud",
    "Catambuco",
    "Cebadal",
    "Chachagui",
    "Chucunes",
    "Consaca",
    "Contadero",
    "Cordoba",
    "Cuatro esquinas",
    "Cumbal",
    "Cumbitara",
    "Daza",
    "El charco",
    "El diviso",
    "El encano",
    "El espino",
    "El peñol",
    "El remolino",
    "El rosario",
    "El tablon de gomez",
    "El tambo",
    "Espriella",
    "Funes",
    "Genova",
    "Genoy",
    "Guachavez san cruz",
    "Guachucal",
    "Guaitarilla",
    "Gualmatan",
    "Iles",
    "Imbili",
    "Imues",
    "Ipiales",
    "Jose maria hernandez",
    "Junin",
    "La cruz",
    "La florida",
    "La guayacana",
    "La llanada",
    "Las lajas",
    "La union",
    "Leiva",
    "Linares",
    "Llorente",
    "Mocondino",
    "Nariño",
    "Obonuco",
    "Ospina",
    "Pasto",
    "Piedrahancha",
    "Pilcuan",
    "Pinzon",
    "Policarpa",
    "Potosi",
    "Providencia",
    "Puerres",
    "Pupiales",
    "Ricaurte",
    "Samaniego",
    "San bernardo",
    "Sandona",
    "San jose de alban",
    "San lorenzo",
    "San pablo",
    "San pedro de cartago",
    "Sapuyes",
    "Sotomayor",
    "Taminango",
    "Tangareal carretera",
    "Tangareal del mira",
    "Tangua",
    "Tumaco",
    "Tuquerres",
    "Yacuanquer",
  ];

  return (
    <select
      name="Direccion1"
      id="Narino"
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

export default Narino;