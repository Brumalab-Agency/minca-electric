import PropTypes from 'prop-types';

const CheckboxField = ({ handleOnChange, checked, name, label, placeholder, containerClassNames, textCheckBox, required }) => {
	
	return (
		<div className={containerClassNames}>
			<label className={`radio-container leading-7 text-md text-gray-700 flex items-center cursor-pointer ${textCheckBox}`} htmlFor={name}>
				<input
					onChange={ handleOnChange }
					placeholder={placeholder}
					type="checkbox"
					checked={checked}
					name={name}
					id={name}
					required={required}
					className="radio-input"
				/>
				<span className="ml-2 radio-custom"></span>
				{ label || '' }
			</label>
		</div>
	)
}

CheckboxField.propTypes = {
	handleOnChange: PropTypes.func,
	checked: PropTypes.bool,
	name: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	containerClassNames: PropTypes.string
}

CheckboxField.defaultProps = {
	handleOnChange: () => null,
	checked: false,
	name: '',
	label: '',
	placeholder: '',
	errors: {},
	containerClassNames: ''
}

export default CheckboxField;