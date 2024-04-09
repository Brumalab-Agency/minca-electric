import validator from 'validator';
import isEmpty from './is-empty';


const validateAndSanitizeCheckoutForm = ( data, hasStates = true ) => {
	
	let errors = {};
	let sanitizedData = {};
	
	/**
	 * Set the firstName value equal to an empty string if user has not entered the firstName, otherwise the Validator.isEmpty() wont work down below.
	 * Note that the isEmpty() here is our custom function defined in is-empty.js and
	 * Validator.isEmpty() down below comes from validator library.
	 * Similarly we do it for for the rest of the fields
	 */
	data.Nombre = ( ! isEmpty( data.Nombre ) ) ? data.Nombre : '';
	data.Apellido = ( ! isEmpty( data.Apellido ) ) ? data.Apellido : '';
	data.numeroIdentificacion =(! isEmpty( data.numeroIdentificacion ) ) ? data.numeroIdentificacion : '';
	data.Empresa = ( ! isEmpty( data.Empresa ) ) ? data.Empresa : '';
	data.country = ( ! isEmpty( data.country ) ) ? data.country : '';
	data.Direccion1 = ( ! isEmpty( data.Direccion1 ) ) ? data.Direccion1 : '';
	data.Direccion2 = ( ! isEmpty( data.Direccion2 ) ) ? data.Direccion2 : '';
	data.Ciudad = ( ! isEmpty( data.Ciudad ) ) ? data.Ciudad : '';
	data.Estado = ( ! isEmpty( data.Estado ) ) ? data.Estado : '';
	data.Codigopostal = ( ! isEmpty( data.Codigopostal ) ) ? data.Codigopostal : '';
	data.Telefono = ( ! isEmpty( data.Telefono ) ) ? data.Telefono : '';
	data.Email = ( ! isEmpty( data.Email ) ) ? data.Email : '';
	data.createAccount = ( ! isEmpty( data.createAccount ) ) ? data.createAccount : '';
	data.orderNotes = ( ! isEmpty( data.orderNotes ) ) ? data.orderNotes : '';
	// data.paymentMethod = ( ! isEmpty( data.paymentMethod ) ) ? data.paymentMethod : '';
	
	/**
	 * Checks for error if required is true
	 * and adds Error and Sanitized data to the errors and sanitizedData object
	 *
	 * @param {String} fieldName Field name e.g. First name, last name
	 * @param {String} errorContent Error Content to be used in showing error e.g. First Name, Last Name
	 * @param {Integer} min Minimum characters required
	 * @param {Integer} max Maximum characters required
	 * @param {String} type Type e.g. email, phone etc.
	 * @param {boolean} required Required if required is passed as false, it will not validate error and just do sanitization.
	 */
	const addErrorAndSanitizedData = ( fieldName, errorContent, min, max, type = '', required ) => {
		
		/**
		 * Please note that this isEmpty() belongs to validator and not our custom function defined above.
		 *
		 * Check for error and if there is no error then sanitize data.
		 */
		if (!isEmpty(data[fieldName]) && !validator.isLength(data[fieldName], { min, max })) {
			errors[fieldName] = `${errorContent} must be ${min} to ${max} characters`;
		  }
		
		if ( 'Email' === type && ! validator.isEmail( data[ fieldName ] ) ){
			errors[ fieldName ] = `${errorContent} is not valid`;
		}
		
		if ( 'Telefono' === type && ! validator.isMobilePhone( data[ fieldName ] ) ) {
			errors[ fieldName ] = `${errorContent} is not valid`;
		}
		if (required && !isEmpty(data[fieldName]) && validator.isEmpty(data[fieldName])) {
			errors[fieldName] = `${errorContent} is required`;
		  }
		
		// If no errors
		if (!errors[fieldName]) {
			if (!isEmpty(data[fieldName])) {
			  sanitizedData[fieldName] = validator.trim(data[fieldName]);
			  sanitizedData[fieldName] = ('Email' === type) ? validator.normalizeEmail(sanitizedData[fieldName]) : sanitizedData[fieldName];
			  sanitizedData[fieldName] = validator.escape(sanitizedData[fieldName]);
			} else {
			  sanitizedData[fieldName] = '';
			}
		  }
		
	};
	
	addErrorAndSanitizedData( 'Nombre', 'First name', 2, 35, 'string', true );
	addErrorAndSanitizedData( 'Apellido', 'Last name', 2, 35, 'string', true );
	addErrorAndSanitizedData( 'Empresa', 'Company Name', 0, 35, 'string', false );
	addErrorAndSanitizedData( 'Pais', 'Country name', 2, 55, 'string', true );
	addErrorAndSanitizedData( 'Direccion1', 'Street address line 1', 12, 100,'string',true );
	addErrorAndSanitizedData( 'Direccion2', '', 0, 254, 'string', false );
	addErrorAndSanitizedData( 'state', 'City field', 3, 25, 'string', true );
	addErrorAndSanitizedData( 'Ciudad', 'State/County', 0, 254, 'string', hasStates );
	addErrorAndSanitizedData( 'Codigopostal', 'Post code', 2, 10, 'Codigopostal', true );
	addErrorAndSanitizedData( 'phone', 'Phone number', 10, 15, 'phone', true );
	addErrorAndSanitizedData( 'Email', 'Email', 11, 254, 'Email', true );
	
	// The data.createAccount is a boolean value.
	sanitizedData.createAccount = data.createAccount;
	addErrorAndSanitizedData( 'orderNotes', '', 0, 254, 'string', false );
	// @TODO Payment mode error to be handled later.
	// addErrorAndSanitizedData( 'paymentMethod', 'Payment mode field', 2, 50, 'string', false );

	return {
		sanitizedData,
		errors,
		isValid: isEmpty( errors )
	}
};

export default validateAndSanitizeCheckoutForm;