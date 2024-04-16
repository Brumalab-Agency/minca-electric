import ArrowDown from '@/components/checkout/iconCheckOut/ArrowDown';
import React from 'react';

const Atlantico = ({ onChange }) => {
  return (
    <div className="relative">
      <select
        name="Direccion1"
        id="Atlantico"
        className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500 font-light text-[14px]"
      >
        <option value="">Por favor seleccione</option>
        <option value="Arroyo de piedra">Arroyo de piedra</option>
        <option value="Baranoa">Baranoa</option>
        <option value="Barranquilla">Barranquilla</option>
        <option value="Campeche">Campeche</option>
        <option value="Campo de la cruz">Campo de la cruz</option>
        <option value="Candelaria">Candelaria</option>
        <option value="Galapa">Galapa</option>
        <option value="Isabel lopez">Isabel lopez</option>
        <option value="Juan de acosta">Juan de acosta</option>
        <option value="Juan mina">Juan mina</option>
        <option value="La peña">La peña</option>
        <option value="Luruaco">Luruaco</option>
        <option value="Malambo">Malambo</option>
        <option value="Manati">Manati</option>
        <option value="Molineros">Molineros</option>
        <option value="Palmar de varela">Palmar de varela</option>
        <option value="Piojo">Piojo</option>
        <option value="Playa mendoza">Playa mendoza</option>
        <option value="Polonuevo">Polonuevo</option>
        <option value="Ponedera">Ponedera</option>
        <option value="Puerto colombia">Puerto colombia</option>
        <option value="Puerto giraldo">Puerto giraldo</option>
        <option value="Repelon">Repelon</option>
        <option value="Sabanagrande">Sabanagrande</option>
        <option value="Sabanalarga">Sabanalarga</option>
        <option value="Salgar">Salgar</option>
        <option value="Santa lucia">Santa lucia</option>
        <option value="Santa veronica">Santa veronica</option>
        <option value="Santo tomas">Santo tomas</option>
        <option value="Soledad">Soledad</option>
        <option value="Suan">Suan</option>
        <option value="Tubara">Tubara</option>
        <option value="Usiacuri">Usiacuri</option>
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

export default Atlantico;
