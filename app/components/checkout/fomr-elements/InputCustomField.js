import Error from "../Error";
import PropTypes from "prop-types";
import Abbr from "./Abbr";

const InputCustomField = ({
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
  classInput
}) => {
  const inputId = `${name}-${isShipping ? "shipping" : ""}`;

  return (
    <div className={containerClassNames}>
      <label className={`lg:text-[13px] text-[8px] leading-4 text-[#111] font-bold labelTypeCheckBox ${classLabel} labelContainer`} >
        {label || ""}
        <Abbr required={required} />
      <input
        onChange={handleOnChange}
        value={inputValue}
        placeholder={placeholder}
        type={type}
        name={name}
        required={required}
        className={`inputTypeCheckbox w-full rounded border border-[#F0F1EB] bg-white bg-opacity-50 px-3 py-[5px] text-base leading-8 text-gray-800 outline-none transition-colors duration-200 ease-in-out focus:border-slate-500 focus:bg-transparent focus:ring-2 focus:ring-slate-200 ${classInput} placeholder:text-[14px]`}
        id={inputId}
        />
      <span className="spanTypeCheckbox mr-2"></span>
        </label>
      <Error errors={errors} fieldName={name} />
    </div>
  );
};

InputCustomField.propTypes = {
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

InputCustomField.defaultProps = {
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

export default InputCustomField;
