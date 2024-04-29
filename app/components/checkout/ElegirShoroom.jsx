import { useState } from "react";
import Error from "./Error";
import useShowroomStore from "@/store/orden.store";

const ElegirShowroom = ({ input }) => {
  const { RetirarEn, errors } = input || {};
  const inputId = "RetirarEn";
  const [selectedOption, setSelectedOption] = useState(RetirarEn || "");
  const setSelectedShowroom = useShowroomStore((state) => state.setSelectedShowroom);

  const handleRadioChange = (event) => {
    const selectedOption = event.target.value;
    let charge = 0;
  
    if (selectedOption === "Javeriana Cra. 7 #45-10") {
      charge = 0; 
    } else if (selectedOption === "Chico Cra. 11a #94a-56") {
      charge = 0; 
    } else if (selectedOption === "Cedritos Av. Cra 19 #143a-8") {
      charge = 0; 
    } else if (selectedOption === "Fuera de Bogotá. Entrega de 3 a 5 días hábiles: $90.000") {
      charge = 90000;
    }
  
    setSelectedOption(selectedOption);
    sessionStorage.setItem("ShowRoom", selectedOption);
    setSelectedShowroom(selectedOption, charge);
  };

  return (
    <div className="mb-3 w-full h-auto rounded-[10px] border-[3px] border-[#464646] bg-[#F0F1EB]">
      <div className="flex flex-col items-start">
        <div className="grid place-items-center justify-start ml-3 w-full h-[50px]">
          <label className="radio-container mr-2">
            <input
              type="radio"
              name={inputId}
              value="Javeriana Cra. 7 #45-10"
              checked={selectedOption === "Javeriana Cra. 7 #45-10"}
              onChange={handleRadioChange}
              className="radio-input mr-2"
            />
            <span className="radio-custom" style={{marginRight:0}}></span> Showroom Javeriana - Carrera
            7 # 45-10 , Bogotá
          </label>
        </div>
        <hr className="w-full border-b-[1px] border-[#464646]" />
        <div className="grid place-items-center justify-start ml-3 w-full h-[50px]">
          <label className="radio-container mr-2">
            <input
              type="radio"
              id="chico"
              name={inputId}
              value="Chico Cra. 11a #94a-56"
              checked={selectedOption === "Chico Cra. 11a #94a-56"}
              onChange={handleRadioChange}
              className="radio-input mr-2"
            />
            <span className="radio-custom" style={{marginRight:0}}></span> Showroom Chicó - Cra. 11a
            #94a-56 , Bogotá
          </label>
        </div>
        <hr className="w-full border-b-[1px] border-[#464646]" />
        <div className="grid place-items-center justify-start ml-3 w-full h-[50px]">
          <label className="radio-container mr-2">
            <input
              type="radio"
              id="cedritos"
              name={inputId}
              value="Cedritos Av. Cra 19 #143a-8"
              checked={selectedOption === "Cedritos Av. Cra 19 #143a-8"}
              onChange={handleRadioChange}
              className="radio-input mr-2"
            />
            <span className="radio-custom" style={{marginRight:0}}></span> Showroom Cedritos - Av. Cra
            19 #143A - 08 , Bogotá
          </label>
        </div>
      </div>
      <Error errors={errors} fieldName={inputId} />
    </div>
  );
};

export default ElegirShowroom;
