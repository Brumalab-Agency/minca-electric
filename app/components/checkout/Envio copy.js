import useShowroomStore from "@/store/orden.store";
import Error from "./Error";
import Abbr from "./fomr-elements/Abbr";
import ArrowDown from "./iconCheckOut/ArrowDown";
import { useState } from "react";

const Envio = ({ input }) => {
  const { Envio, errors } = input || {};

  const inputId = "fueraBogota";
  const [selectedOption, setSelectedOption] = useState(Envio || "");
  const setSelectedEnvio = useShowroomStore((state) => state.setSelectedEnvio);

  const handleRadioChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    setSelectedEnvio(selectedOption);
  };

  return (
    <div className="mb-3 w-full rounded-[10px] border-[3px] border-[#464646] bg-[#F0F1EB] p-[18px]">
      <div className="ml-3 grid h-[50px] w-full place-items-center justify-start">
        <label className="radio-container mr-4">
          <input
            type="radio"
            name={inputId}
            value="Fuera de Bogotá. Entrega de 3 a 5 días hábiles: $90.000"
            checked={
              selectedOption ===
              "Fuera de Bogotá. Entrega de 3 a 5 días hábiles: $90.000"
            }
            onChange={handleRadioChange}
            className="radio-input mr-2"
          />
          <div className="flex items-center justify-start ">
            <span className="radio-custom"></span>
            <img
              className="-ml-1 mr-1 h-auto w-[25px]"
              src="/carrito/envio-formulario.svg"
              alt="store"
            />
            <p>Fuera de Bogotá. Entrega de 3 a 5 días hábiles: $90.000</p>
          </div>
        </label>
      </div>

      <Error errors={errors} fieldName="Envio" />
    </div>
  );
};

export default Envio;
