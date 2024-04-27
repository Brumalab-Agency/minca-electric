import ArrowDown from '@/components/checkout/iconCheckOut/ArrowDown';
import React from 'react';

const Caldas = ({ onChange }) => {
  return (
    <div className="relative">
      <select
        name="Direccion1"
        id="Caldas"
        className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500 font-light text-[14px]"
        onChange={onChange}
      >
        <option value="">Por favor seleccione</option>
        <option value="Aguadas">Aguadas</option>
        <option value="Anserma">Anserma</option>
        <option value="Aranzazu">Aranzazu</option>
        <option value="Arauca">Arauca</option>
        <option value="Arboleda">Arboleda</option>
        <option value="Arma">Arma</option>
        <option value="Belalcazar">Belalcazar</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Bonafont">Bonafont</option>
        <option value="Castilla">Castilla</option>
        <option value="Chinchina">Chinchina</option>
        <option value="Filadelfia">Filadelfia</option>
        <option value="Florencia">Florencia</option>
        <option value="Guarinocito">Guarinocito</option>
        <option value="La dorada">La dorada</option>
        <option value="La felisa">La felisa</option>
        <option value="La merced">La merced</option>
        <option value="Manizales">Manizales</option>
        <option value="Manzanares">Manzanares</option>
        <option value="Marmato">Marmato</option>
        <option value="Marquetalia">Marquetalia</option>
        <option value="Marulanda">Marulanda</option>
        <option value="Montebonito">Montebonito</option>
        <option value="Neira">Neira</option>
        <option value="Norcasia">Norcasia</option>
        <option value="Pacora">Pacora</option>
        <option value="Palestina">Palestina</option>
        <option value="Pensilvania">Pensilvania</option>
        <option value="Riosucio">Riosucio</option>
        <option value="Risaralda">Risaralda</option>
        <option value="Salamina">Salamina</option>
        <option value="Samana">Samana</option>
        <option value="Samaria">Samaria</option>
        <option value="San bartolome">San bartolome</option>
        <option value="San daniel">San daniel</option>
        <option value="San diego">San diego</option>
        <option value="San felix">San felix</option>
        <option value="San jose">San jose</option>
        <option value="Supia">Supia</option>
        <option value="Victoria">Victoria</option>
        <option value="Villamaria">Villamaria</option>
        <option value="Viterbo">Viterbo</option>
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

export default Caldas;
