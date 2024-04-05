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
}) => {
  const inputId = `${name}-${isShipping ? "shipping" : ""}`;

  return (
    <div className={containerClassNames}>
      <label className="text-sm leading-7 text-gray-700" htmlFor={inputId}>
        {label || ""}
        <Abbr required={required} />
      </label>
      <input
        onChange={handleOnChange}
        value={inputValue}
        placeholder={placeholder}
        type={type}
        name={name}
        className="w-full rounded border border-[#F0F1EB] bg-gray-100 bg-opacity-50 px-3 py-[5px] text-base leading-8 text-gray-800 outline-none transition-colors duration-200 ease-in-out focus:border-slate-500 focus:bg-transparent focus:ring-2 focus:ring-slate-200"
        id={inputId}
      />
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
