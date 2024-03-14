import Error from "./Error";

const PaymentModes = ( { input, handleOnChange } ) => {
	const { errors, paymentMethod } = input || {}
	

	return (
		<div className="mt-3">
			<Error errors={ errors } fieldName={ 'paymentMethod' }/>
			{/*Fuera de Bogotá. Entrega de 3 a 5 días hábiles: $90.000*/}
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="bacs" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'bacs' === paymentMethod}/>
					<span className="woo-next-payment-content">Fuera de Bogotá. Entrega de 3 a 5 días hábiles: $90.000</span>
				</label>
			</div>
			{/*Javeriana Cra. 7 #45-10*/}
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="paypal" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'paypal' === paymentMethod}/>
					<span className="woo-next-payment-content">Javeriana Cra. 7 #45-10</span>
				</label>
			</div>
			{/*Chico Cra. 11a #94a-56*/}
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="cheque" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'cheque' === paymentMethod}/>
					<span className="woo-next-payment-content">Chico Cra. 11a #94a-56</span>
				</label>
			</div>
			{/*Cedritos Av. Cra 19 #143a-8*/}
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="cod" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'cod' === paymentMethod}/>
					<span className="woo-next-payment-content">Cedritos Av. Cra 19 #143a-8</span>
				</label>
			</div>
		</div>
	);
};

export default PaymentModes;