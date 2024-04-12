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
    <select
      name="Direccion1"
      id="Magdalena"
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

export default Magdalena;