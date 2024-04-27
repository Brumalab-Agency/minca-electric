import ArrowDown from '@/components/checkout/iconCheckOut/ArrowDown';
import React from 'react';

const Magdalena = ({ onChange }) => {
  const municipios = [
    "Algarrobo",
    "Aracataca",
    "Cerro san antonio",
    "Chivolo",
    "Cienaga",
    "Concordia",
    "El banco",
    "El dificil",
    "El piñon",
    "El reten",
    "Fundacion",
    "Gaira",
    "Guacamayal",
    "Guaimaro",
    "Guamal",
    "La gran via",
    "Media luna",
    "Nueva granada",
    "Orihueca",
    "Palermo",
    "Pedraza",
    "Pijiño del carmen",
    "Pivijay",
    "Plato",
    "Prado sevilla",
    "Pueblonuevo",
    "Puebloviejo",
    "Remolino",
    "Riofrio",
    "Sabanas de san angel",
    "Salamina",
    "San fernando",
    "San sebast de buenavi",
    "Santa ana",
    "Santa barbara de pinto",
    "Santa marta",
    "San zenon",
    "Sitio nuevo",
    "Taganga",
    "Tenerife",
    "Tucurinca",
  ];

  return (
    <div className="relative">
      <select
        name="Direccion1"
        id="Magdalena"
        className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500 font-light text-[14px]"
        onChange={onChange}
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

export default Magdalena;