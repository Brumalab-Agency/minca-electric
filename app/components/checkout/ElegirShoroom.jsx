import { useState } from "react";
import Error from "./Error";

const ElegirShowroom = ({ input }) => {
  const { RetirarEn, errors } = input || {};
  const inputId = "RetirarEn";
  const [selectedOption, setSelectedOption] = useState(RetirarEn || "");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="mb-3 w-full rounded-[10px] border-[3px] border-[#464646] bg-[#F0F1EB]">
      <div className="flex flex-col items-start">
        <div className="p-[18px]">
          <label className="mr-4 radio-container">
            <input
              type="radio"
              name={inputId}
              value="Javeriana Cra. 7 #45-10"
              checked={selectedOption === "Javeriana Cra. 7 #45-10"}
              onChange={handleRadioChange}
              className="mr-2 radio-input"
            />
            <span className="radio-custom"></span> Javeriana Cra. 7 #45-10
          </label>
        </div>
        <hr className="w-full border-b-[1px] border-[#464646]" />
        <div className="p-[18px]">
          <label className="mr-4 radio-container">
            <input
              type="radio"
              id="chico"
              name={inputId}
              value="Chico Cra. 11a #94a-56"
              checked={selectedOption === "Chico Cra. 11a #94a-56"}
              onChange={handleRadioChange}
              className="mr-2 radio-input"
            />
            <span className="radio-custom"></span> Chico Cra. 11a #94a-56
          </label>
        </div>
        <hr className="w-full border-b-[1px] border-[#464646]" />
        <div className="p-[18px]">
          <label className="mr-4 radio-container">
            <input
              type="radio"
              id="cedritos"
              name={inputId}
              value="Cedritos Av. Cra 19 #143a-8"
              checked={selectedOption === "Cedritos Av. Cra 19 #143a-8"}
              onChange={handleRadioChange}
              className="mr-2 radio-input"
            />
            <span className="radio-custom"></span> Cedritos Av. Cra 19 #143a-8
          </label>
        </div>
      </div>
      <Error errors={errors} fieldName={inputId} />
    </div>
  );
};

export default ElegirShowroom;