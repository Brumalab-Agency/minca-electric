import ArrowDown from '@/components/checkout/iconCheckOut/ArrowDown';
import React from 'react';

const Boyaca = ({ onChange }) => {
  return (
    <div className="relative">
      <select
        name="Direccion1"
        id="Boyaca"
        className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500 font-light text-[14px]"
      >
        <option value="">Por favor seleccione</option>
        <option value="Almeida">Almeida</option>
        <option value="Aquitania">Aquitania</option>
        <option value="Arcabuco">Arcabuco</option>
        <option value="Belen">Belen</option>
        <option value="Belencito">Belencito</option>
        <option value="Berbeo">Berbeo</option>
        <option value="Beteitiva">Beteitiva</option>
        <option value="Boavita">Boavita</option>
        <option value="Boyaca">Boyaca</option>
        <option value="Briceño">Briceño</option>
        <option value="Buenavista">Buenavista</option>
        <option value="Busbanza">Busbanza</option>
        <option value="Caldas">Caldas</option>
        <option value="Campohermoso">Campohermoso</option>
        <option value="Cerinza">Cerinza</option>
        <option value="Chinavita">Chinavita</option>
        <option value="Chiquinquira">Chiquinquira</option>
        <option value="Chiquiza">Chiquiza</option>
        <option value="Chiscas">Chiscas</option>
        <option value="Chita">Chita</option>
        <option value="Chitaraque">Chitaraque</option>
        <option value="Chivata">Chivata</option>
        <option value="Chivor">Chivor</option>
        <option value="Ciénega">Ciénega</option>
        <option value="Combita">Combita</option>
        <option value="Coper">Coper</option>
        <option value="Corrales">Corrales</option>
        <option value="Coscuez">Coscuez</option>
        <option value="Covarachia">Covarachia</option>
        <option value="Cubara">Cubara</option>
        <option value="Cucaita">Cucaita</option>
        <option value="Cuitiva">Cuitiva</option>
        <option value="Duitama">Duitama</option>
        <option value="El cocuy">El cocuy</option>
        <option value="El espino">El espino</option>
        <option value="Firavitoba">Firavitoba</option>
        <option value="Floresta">Floresta</option>
        <option value="Gachantiva">Gachantiva</option>
        <option value="Gameza">Gameza</option>
        <option value="Garagoa">Garagoa</option>
        <option value="Guacamayas">Guacamayas</option>
        <option value="Guateque">Guateque</option>
        <option value="Guayata">Guayata</option>
        <option value="Guicán">Guicán</option>
        <option value="Iza">Iza</option>
        <option value="Jenesano">Jenesano</option>
        <option value="Jericó">Jericó</option>
        <option value="Labranzagrande">Labranzagrande</option>
        <option value="La capilla">La capilla</option>
        <option value="La uvita">La uvita</option>
        <option value="La victoria">La victoria</option>
        <option value="Macanal">Macanal</option>
        <option value="Maripi">Maripi</option>
        <option value="Miraflores">Miraflores</option>
        <option value="Mongua">Mongua</option>
        <option value="Mongui">Mongui</option>
        <option value="Moniquira">Moniquira</option>
        <option value="Motavita">Motavita</option>
        <option value="Muzo">Muzo</option>
        <option value="Nariño">Nariño</option>
        <option value="Nobsa">Nobsa</option>
        <option value="Nuevo colon">Nuevo colon</option>
        <option value="Oicata">Oicata</option>
        <option value="Otanche">Otanche</option>
        <option value="Pachavita">Pachavita</option>
        <option value="Paez">Paez</option>
        <option value="Paipa">Paipa</option>
        <option value="Pajarito">Pajarito</option>
        <option value="Panqueba">Panqueba</option>
        <option value="Pantano de vargas">Pantano de vargas</option>
        <option value="Pauna">Pauna</option>
        <option value="Paz de rio">Paz de rio</option>
        <option value="Pesca">Pesca</option>
        <option value="Puente boyaca">Puente boyaca</option>
        <option value="Puerto boyaca">Puerto boyaca</option>
        <option value="Puerto serviez">Puerto serviez</option>
        <option value="Quipama">Quipama</option>
        <option value="Ramiriqui">Ramiriqui</option>
        <option value="Raquira">Raquira</option>
        <option value="Rondon">Rondon</option>
        <option value="Saboya">Saboya</option>
        <option value="Sachica">Sachica</option>
        <option value="Samaca">Samaca</option>
        <option value="San eduardo">San eduardo</option>
        <option value="San jose de pare">San jose de pare</option>
        <option value="San luis de gaceno">San luis de gaceno</option>
        <option value="San mateo">San mateo</option>
        <option value="San miguel de sema">San miguel de sema</option>
        <option value="San pablo de borbur">San pablo de borbur</option>
        <option value="Santa barbara">Santa barbara</option>
        <option value="Santa maria">Santa maria</option>
        <option value="Santana">Santana</option>
        <option value="Santa rosa de viterbo">Santa rosa de viterbo</option>
        <option value="Santa sofia">Santa sofia</option>
        <option value="Sativanorte">Sativanorte</option>
        <option value="Sativasur">Sativasur</option>
        <option value="Siachoque">Siachoque</option>
        <option value="Soata">Soata</option>
        <option value="Socha">Socha</option>
        <option value="Socota">Socota</option>
        <option value="Sogamoso">Sogamoso</option>
        <option value="Somondoco">Somondoco</option>
        <option value="Sora">Sora</option>
        <option value="Soraca">Soraca</option>
        <option value="Sotaquirá">Sotaquirá</option>
        <option value="Susacon">Susacon</option>
        <option value="Sutamarchan">Sutamarchan</option>
        <option value="Sutatenza">Sutatenza</option>
        <option value="Tasco">Tasco</option>
        <option value="Tenza">Tenza</option>
        <option value="Tibana">Tibana</option>
        <option value="Tibasosa">Tibasosa</option>
        <option value="Tinjaca">Tinjaca</option>
        <option value="Tipacoque">Tipacoque</option>
        <option value="Toca">Toca</option>
        <option value="Togui">Togui</option>
        <option value="Topaga">Topaga</option>
        <option value="Tota">Tota</option>
        <option value="Tunja">Tunja</option>
        <option value="Tunungua">Tunungua</option>
        <option value="Turmeque">Turmeque</option>
        <option value="Tuta">Tuta</option>
        <option value="Tutaza">Tutaza</option>
        <option value="Umbita">Umbita</option>
        <option value="Ventaquemada">Ventaquemada</option>
        <option value="Villa de leyva">Villa de leyva</option>
        <option value="Viracacha">Viracacha</option>
        <option value="Zetaquira">Zetaquira</option>
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

export default Boyaca;
