import React from 'react';

const Arauca = ({ onChange }) => {
  return (
    <select
      name="Direccion1"
      id="Arauca"
      className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"

    >
      <option value="">Elige una opción…</option>
      <option value="Arauca">Arauca</option>
      <option value="Arauquita">Arauquita</option>
      <option value="Cravo norte">Cravo norte</option>
      <option value="Fortul">Fortul</option>
      <option value="La esmeralda">La esmeralda</option>
      <option value="La pesquera">La pesquera</option>
      <option value="Puerto nariño">Puerto nariño</option>
      <option value="Puerto rondon">Puerto rondon</option>
      <option value="Saravena">Saravena</option>
      <option value="Tame">Tame</option>
    </select>
  );
};

export default Arauca;
