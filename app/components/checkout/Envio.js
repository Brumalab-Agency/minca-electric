import Error from "./Error";
import Abbr from "./fomr-elements/Abbr";
import ArrowDown from "./iconCheckOut/ArrowDown";

const Envio = ({ input, handleOnChange }) => {
  const { Envio, errors } = input || {};

  const inputId = "Envio";

  return (
    <div className="mb-3 w-full rounded-[10px] border-[3px] border-[#464646] bg-[#F0F1EB] p-[18px]">
      <div className="ml-3 grid h-[50px] w-full place-items-center justify-start">
        <label className="radio-container mr-4">
          <input
            type="radio"
            name="fueraBogota"
            value="Envio"
            checked={
              Envio ===
              "Fuera de Bogotá. Entrega de 3 a 5 días hábiles: $90.000"
            }
            onChange={handleOnChange}
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
