import ArrowDown from "@/components/checkout/iconCheckOut/ArrowDown";
import React from "react";

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
    "Villa fatima",
  ];

  return (
    <div className="relative">
      <select
        name="Direccion1"
        id="Cordoba"
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

export default Cordoba;
