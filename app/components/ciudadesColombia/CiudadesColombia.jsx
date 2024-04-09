"use client"
import React, { useState } from 'react';
import CitySelect from './CitySelect';
import Abbr from '../checkout/fomr-elements/Abbr';


const CiudadesColombia = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const cities = [
    "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare",
    "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Bogotá", "Guainía", "Guaviare", "Huila", "La Guajira",
    "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "Santander", "San Andrés y Providencia",
    "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
  ];

  return (
    <div>
      <div className='flex'>
          <h2 className="text-sm leading-7 text-gray-700">Selecciona un Estado/Municipio de Colombia</h2>
          <Abbr required />
      </div>
      <CitySelect cities={cities} onChange={handleCityChange} />
    </div>
  );
};

export default CiudadesColombia;
