import React from "react";
import ArrowDown from "../checkout/iconCheckOut/ArrowDown";

const CitySelect = ({ cities, onChange }) => {
  return (
    <div id="Ciudad" className="mb-3">
      <div className="relative w-full border-none">
        <select
          name="Ciudad"
          className="inline-block w-full appearance-none rounded border border-[#F0F1EB] bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500 font-light text-[14px]"
          id="city-select"
          onChange={onChange}
        >
          <option value="">Por favor seleccione</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
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
    </div>
  );
};

export default CitySelect;
