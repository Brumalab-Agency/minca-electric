import Error from "../Error";
import PropTypes from "prop-types";
import Abbr from "./Abbr";

const InputField = ({
  handleOnChange,
  inputValue,
  name,
  type,
  label,
  errors,
  placeholder,
  required,
  containerClassNames,
  isShipping,
  classLabel,
  classInput,
}) => {
  const inputId = `${name}-${isShipping ? "shipping" : ""}`;

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10) {
      handleOnChange(e);
    }
  };

  const handlePhoneKeyDown = (e) => {
    const keyCode = e.keyCode || e.which;
    const allowedKeys = [8, 9, 37, 39, 46]; // Códigos de teclas para backspace, tab, flechas y suprimir
    if (!(keyCode >= 48 && keyCode <= 57) && !allowedKeys.includes(keyCode)) {
      e.preventDefault();
    }
  };
  

  
  const handlePhoneBlur = (e) => {
    const value = e.target.value;
    if (value.length !== 10) {
    }
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]*$/;
    if (regex.test(value)) {
      handleOnChange(e);
    }
  };

  const handleEmailBlur = (e) => {
    const value = e.target?.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      console.log("El formato del correo electrónico no es válido");
      // Aquí puedes manejar el caso donde el correo electrónico no tiene el formato correcto
    }
  };
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  return (
    <div className={containerClassNames}>
      <label
        className={`text-sm font-bold leading-7 text-[#111] ${classLabel}`}
        htmlFor={inputId}
      >
        {label || ""}
        <Abbr required={required} />
      </label>
      <input
        onChange={
          type === "tel"
            ? handlePhoneChange
            : type === "number"
              ? handleNumberChange
                : handleOnChange
        }
        onBlur={type=== "tel" ? handlePhoneBlur : (type==="email" ? handleEmailBlur: null)}
        onKeyDown={type === "tel" ? handlePhoneKeyDown : null}
        value={inputValue}
        placeholder={placeholder}
        type={type}
        name={name}
        required={required}
        className={`w-full rounded border border-[#F0F1EB] bg-white bg-opacity-50 px-3 py-[5px] text-base leading-8 text-gray-800 outline-none transition-colors duration-200 ease-in-out focus:border-slate-500 focus:bg-transparent focus:ring-2 focus:ring-slate-200 ${classInput} placeholder:text-[14px]`}
        id={inputId}
      />
      {type === "tel" && required && inputValue.length === 0 && (
        <span className="text-red-600">Este campo es obligatorio.</span>
      )}
      {type === "tel" && inputValue.length > 0 && inputValue.length !== 10 && (
        <span className="text-red-600">
          El número de teléfono debe tener exactamente 10 caracteres.
        </span>
      )}
      {type === "number" && required && isNaN(inputValue) && (
        <span className="text-red-600">
          Este campo debe contener solo números.
        </span>
      )}
      {type === "email" && required && !isValidEmail(inputValue) && <span className="text-red-600">Por favor, ingrese un correo electrónico válido.</span>}
      <Error errors={errors} fieldName={name} />
    </div>
  );
};

InputField.propTypes = {
  handleOnChange: PropTypes.func,
  inputValue: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.object,
  required: PropTypes.bool,
  containerClassNames: PropTypes.string,
};

InputField.defaultProps = {
  handleOnChange: () => null,
  inputValue: "",
  name: "",
  type: "text",
  label: "",
  placeholder: "",
  errors: {},
  required: false,
  containerClassNames: "",
};

export default InputField;
