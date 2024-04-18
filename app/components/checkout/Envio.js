import Error from "./Error";
import Abbr from "./fomr-elements/Abbr";
import ArrowDown from "./iconCheckOut/ArrowDown";

const Envio = ({ input, handleOnChange }) => {
  const { Envio, errors } = input || {};

  const inputId = "Envio";

  return (
    <div className="mb-3 w-full rounded-[10px] border-[3px] border-[#464646] bg-[#F0F1EB] p-[18px]">
      <div className="flex items-center">
        <input
          type="radio"
          id="fueraBogota"
          name="Envio"
          value="Fuera de Bogotá. Entrega de 3 a 5 días hábiles: $90.000"
          checked={Envio === "Fuera de Bogotá. Entrega de 3 a 5 días hábiles: $90.000"}
          onChange={handleOnChange}
          className="mr-2"
        />
        <label htmlFor="fueraBogota">Fuera de Bogotá. Entrega de 3 a 5 días hábiles: $90.000</label>
      </div>
      <Error errors={errors} fieldName="Envio" />
    </div>
  );
};

export default Envio;
