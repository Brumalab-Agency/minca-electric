import Error from "./Error";
import Abbr from "./fomr-elements/Abbr";
import ArrowDown from "./iconCheckOut/ArrowDown";

const TipoIdentificacion = ({ input, handleOnChange }) => {
  const { tipoIdentificacion, errors } = input || {};

  const inputId = "Identificacion";

  return (
    <div className="w-full overflow-hidden sm:my-2 md:w-1/2">
      <label className="text-sm leading-7 text-gray-700" htmlFor={inputId}>
        Tipo de identificación
        <Abbr required />
      </label>
      <div className="relative w-full border-none">
        <select
          onChange={handleOnChange}
          value={tipoIdentificacion}
          name="Identificacion"
          defaultValue="Cédula de Ciudadanía" // Valor predeterminado
          className="inline-block w-full appearance-none rounded border border-[#F0F1EB] bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"
          id={inputId}
        >
          <option value="">Identificación</option>
          <option value="Cédula de Ciudadanía">
            Cédula de Ciudadanía
          </option>
          <option value="Cédula de Extranjería">Cédula de Extranjería</option>
          <option value="Número de pasaporte">Número de pasaporte</option>
        </select>
        <span className="absolute right-0 mr-1 text-gray-500" style={{ top: "25%" }}>
          <ArrowDown width={24} height={24} className="fill-current" />
        </span>
      </div>
      <Error errors={errors} fieldName="Identificacion" />
    </div>
  );
};

export default TipoIdentificacion;

