import ArrowDown from '@/components/checkout/iconCheckOut/ArrowDown';
import React from 'react';

const TipoViviendaSamsung = ({ onChange }) => {
  const options = [
    "Apartamento", "Casa", "Edificio", "Hotel", "Oficina", "Otro"
  ];

  return (
    <div className='relative'>
      <select
        data-automation-id="address.line1"
        id="CHECKOUT_SHIPPING_ADDRESS_street_shipping_co"
        name="CHECKOUT_SHIPPING_ADDRESS_line1"
        className="w-full select2-hidden-accessible inline-block appearance-none rounded border border-[#F0F1EB]  bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500 font-light text-[14px]"
        onChange={onChange}
        required
      >
        <option value="" disabled selected>
          Por favor seleccione
        </option>
        {options.map((option, index) => (
          <option key={index} value={option} data-information={option}>
            {option}
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

export default TipoViviendaSamsung;
