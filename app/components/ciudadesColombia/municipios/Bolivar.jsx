import ArrowDown from "@/components/checkout/iconCheckOut/ArrowDown";
import React from "react";

const Bolivar = ({ onChange }) => {
  return (
    <div className="relative">
      <select
        name="Direccion1"
        id="Bolivar"
        className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500 font-light text-[14px]"
      >
        <option value="">Por favor seleccione</option>
        <option value="Achi">Achi</option>
        <option value="Arenal">Arenal</option>
        <option value="Arjona">Arjona</option>
        <option value="Ballestas">Ballestas</option>
        <option value="Barranco de loba">Barranco de loba</option>
        <option value="Baru">Baru</option>
        <option value="Bayunca">Bayunca</option>
        <option value="Buena sena">Buena sena</option>
        <option value="Calamar">Calamar</option>
        <option value="Cantagallo">Cantagallo</option>
        <option value="Cartagena">Cartagena</option>
        <option value="Cicuco">Cicuco</option>
        <option value="Clemencia">Clemencia</option>
        <option value="Cordoba">Cordoba</option>
        <option value="El carmen de bolivar">El carmen de bolivar</option>
        <option value="El guamo">El guamo</option>
        <option value="Galerazamba">Galerazamba</option>
        <option value="Hatillo de loba">Hatillo de loba</option>
        <option value="Juan arias">Juan arias</option>
        <option value="La boquilla">La boquilla</option>
        <option value="Loma de arena">Loma de arena</option>
        <option value="Magangue">Magangue</option>
        <option value="Mahates">Mahates</option>
        <option value="Margarita">Margarita</option>
        <option value="Maria la baja">Maria la baja</option>
        <option value="Mompos">Mompos</option>
        <option value="Montecristo">Montecristo</option>
        <option value="Morales">Morales</option>
        <option value="Norosi">Norosi</option>
        <option value="Pasacaballos">Pasacaballos</option>
        <option value="Pontezuela">Pontezuela</option>
        <option value="Puerto rico - tiquisio">Puerto rico - tiquisio</option>
        <option value="Regidor">Regidor</option>
        <option value="Rio viejo">Rio viejo</option>
        <option value="San estanislao">San estanislao</option>
        <option value="San fernando">San fernando</option>
        <option value="San jacinto">San jacinto</option>
        <option value="San juan nepomuceno">San juan nepomuceno</option>
        <option value="San martin de loba">San martin de loba</option>
        <option value="San pablo">San pablo</option>
        <option value="Santa ana">Santa ana</option>
        <option value="Santa catalina">Santa catalina</option>
        <option value="Santa rosa">Santa rosa</option>
        <option value="Santa rosa del sur">Santa rosa del sur</option>
        <option value="Simiti">Simiti</option>
        <option value="Soplaviento">Soplaviento</option>
        <option value="Talaigua nuevo">Talaigua nuevo</option>
        <option value="Turbaco">Turbaco</option>
        <option value="Turbana">Turbana</option>
        <option value="Villanueva">Villanueva</option>
        <option value="Zambrano">Zambrano</option>
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

export default Bolivar;
