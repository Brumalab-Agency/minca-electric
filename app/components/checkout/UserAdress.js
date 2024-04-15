import PropTypes from "prop-types";
import InputField from "./fomr-elements/InputField";
import RecogidaSelection from "./Recogida";
import TipoIdentificacion from "./TipoIdentificacion";
import CiudadesColombia from "../ciudadesColombia/CiudadesColombia";
import { useState } from "react";
import CountrySelection from "./CountrySelection";
import StateSelection from "./StateSelection";

export const UserAdress = ({
  input,
  countries,
  states,
  handleOnChange,
  isFetchingStates,
  isShipping,
  setFormIsValid,
}) => {
  const { errors } = input || {};
  const [cart, setCart] = useState([]);
  const [hasCheckedCheckbox, setHasCheckedCheckbox] = useState(false);
  const [mostrarEmpresa, setMostrarEmpresa] = useState(false);

  const handleShippingFee = (fee) => {
    // Lógica para agregar el cargo adicional al carrito
    const newCartItem = { name: "Cargo de envío", price: fee };
    setCart([...cart, newCartItem]);
  };

  const handleCheckChange = () => {
    setMostrarEmpresa(!mostrarEmpresa);
  };

  return (
    <>
      <InputField
        name="Email"
        type="email"
        inputValue={input?.Email}
        required
        handleOnChange={handleOnChange}
        label="Correo"
        errors={errors}
        isShipping={isShipping}
        containerClassNames="mb-4"
      />
      <div className="flex flex-wrap overflow-hidden sm:-mx-3">
        <InputField
          name="Nombre"
          inputValue={input?.Nombre}
          required
          handleOnChange={handleOnChange}
          label="Nombre"
          errors={errors}
          isShipping={isShipping}
          containerClassNames="w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
        />

        <InputField
          name="Apellido"
          inputValue={input?.Apellido}
          required
          handleOnChange={handleOnChange}
          label="Apellido"
          errors={errors}
          isShipping={isShipping}
          containerClassNames="w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
        />
      </div>
      <InputField
        name="Telefono"
        type="tel"
        inputValue={input?.Telefono}
        required
        handleOnChange={handleOnChange}
        label="Teléfono Celular"
        errors={errors}
        isShipping={isShipping}
        containerClassNames="w-full overflow-hidden sm:my-2 md:w-full"
      />
      <div className="flex gap-4">
        <TipoIdentificacion />
        <InputField
          name="NumeroIdentificacion"
          inputValue={input?.NumeroIdentificacion}
          required
          handleOnChange={handleOnChange}
          label="Número (Identificación)"
          errors={errors}
          isShipping={isShipping}
          containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
        />
      </div>

       {/* Input de tipo check para mostrar/ocultar */}
       <div className="py-4">
        <input
          style={{ width: "15px", height: "15px", borderRadius: "50%", marginRight:"10px" }}
          type="checkbox"
          id="mostrarEmpresa"
          name="mostrarEmpresa"
          onChange={handleCheckChange}
        />
        <label className="text-[20px] font-bold" htmlFor="mostrarEmpresa">¿Eres Empresa?</label>
      </div>
      {mostrarEmpresa && (
      <div className="Empresa pb-6">
        <InputField
          name="Empresa"
          inputValue={input?.Empresa}
          handleOnChange={handleOnChange}
          label="Empresa (Opcional)"
          errors={errors}
          isShipping={isShipping}
          containerClassNames="mb-4"
        />
        <div className="flex gap-4">
          <InputField
            name="EmailEmpresa"
            type="email"
            inputValue={input?.EmailEmpresa}
            handleOnChange={handleOnChange}
            label="Correo electrónico de la empresa (Opcional)"
            errors={errors}
            isShipping={isShipping}
            containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
          />
          <InputField
            name="RazonSocial"
            inputValue={input?.RazonSocial}
            handleOnChange={handleOnChange}
            label="Razon Social (Opcional)"
            errors={errors}
            isShipping={isShipping}
            containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
          />
        </div>
        <div className="flex gap-4">
          <InputField
            name="Nit"
            type="tel"
            inputValue={input?.Nit}
            handleOnChange={handleOnChange}
            label="NIT (Opcional)"
            errors={errors}
            isShipping={isShipping}
            containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
          />
          <InputField
            name="TelefonoTrabajo"
            type="tel"
            inputValue={input?.TelefonoTrabajo}
            handleOnChange={handleOnChange}
            label="Número de teléfono del trabajo (Opcional)"
            errors={errors}
            isShipping={isShipping}
            containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
          />
        </div>
      </div>
      )}
      <div><p className="text-[20px] font-bold">Datos de envio</p></div>
      {/*  Ciudades de Colombia*/}
      {/* <CiudadesColombia
        handleOnChange={handleOnChange}
        setFormIsValid={setFormIsValid}
      /> */}
      <CountrySelection
				input={input}
				handleOnChange={handleOnChange}
				countries={countries}
				isShipping={isShipping}
			/>

      <InputField
				name="city"
				required
				inputValue={input?.city}
				handleOnChange={handleOnChange}
				label="Pueblo/Ciudad"
				errors={errors}
				isShipping={isShipping}
				containerClassNames="mb-4"
			/>
			{/* State */}
			<StateSelection
				input={input}
				handleOnChange={handleOnChange}
				states={states}
				isShipping={isShipping}
				isFetchingStates={isFetchingStates}
			/>

       <InputField
        name="Direccion1"
        inputValue={input?.Direccion1}
        required
        handleOnChange={handleOnChange}
        label="Agrega la dirección de tu Localidad ó Municipio"
        placeholder="Dirección de tu Localidad ó Municipio"
        errors={errors}
        isShipping={isShipping}
        containerClassNames="mb-4"
      />
      {/* Sitio de recogida */}
      <RecogidaSelection
        handleShippingFee={handleShippingFee}
        handleOnChange={handleOnChange}
      />
     
      <InputField
        name="Direccion2"
        required
        inputValue={input?.Direccion2}
        handleOnChange={handleOnChange}
        label="Agrega la dirección de tu Vivienda"
        placeholder="Dirección de tu Vivienda"
        errors={errors}
        isShipping={isShipping}
        containerClassNames="mb-4"
      />
     

      
      {/* Campos Checkbox */}
      <InputField
        name="RecibirInfo"
        type="checkbox"
        inputValue={input?.RecibirInfo ? "Sí" : "No"}
        handleOnChange={handleOnChange}
        label="Me gustaría recibir información sobre ofertas y promociones de MINCA"
        placeholder=""
        errors={errors}
        isShipping={isShipping}
        containerClassNames="mb-4 flex items-center"
        classInput="w-[3%] order-first mr-2 claseCheckBoxFormCheckOut" 
        classLabel="grow"
      />

      <InputField
        name="AceptarTerminos"
        required
        type="checkbox"
        inputValue={input?.AceptarTerminos ? "Sí" : "No"}
        handleOnChange={handleOnChange}
        label="Acepto los Términos y condiciones"
        placeholder=""
        errors={errors}
        isShipping={isShipping}
        containerClassNames="mb-4 flex items-center"
        classInput="w-[3%] order-first mr-2 claseCheckBoxFormCheckOut" 
        classLabel="grow"
      />
      <InputField
        name="TratamientoDatos"
        required
        type="checkbox"
        inputValue={input?.TratamientoDatos ? "Sí" : "No"}
        handleOnChange={handleOnChange}
        label="Autorizo el tratamiento de mis datos personales , con las siguientes condiciones."
        placeholder=""
        errors={errors}
        isShipping={isShipping}
        containerClassNames="mb-4 flex items-center"
        classInput="w-[3%] order-first mr-2 claseCheckBoxFormCheckOut" 
        classLabel="grow"
      />
      

      {/*	@TODO Create an Account */}
      {/*<div className="form-check">*/}
      {/*	<label className="leading-7 text-sm text-gray-600" className="form-check-label">*/}
      {/*		<input onChange={ handleOnChange } className="form-check-input" name="createAccount" type="checkbox"/>*/}
      {/*			Create an account?*/}
      {/*	</label>*/}
      {/*</div>*/}
      {/*<h2 className="mt-4 mb-4">Additional Information</h2>*/}
      {/* @TODO Order Notes */}
      {/*<div className="form-group mb-3">*/}
      {/*	<label className="leading-7 text-sm text-gray-600" htmlFor="order-notes">Order Notes</label>*/}
      {/*	<textarea onChange={ handleOnChange } defaultValue={ input.orderNotes } name="orderNotes" className="form-control woo-next-checkout-textarea" id="order-notes" rows="4"/>*/}
      {/*	<Error errors={ input.errors } fieldName={ 'orderNotes' }/>*/}
      {/*</div>*/}
    </>
  );
};

UserAdress.propTypes = {
  input: PropTypes.object,
  countries: PropTypes.array,
  handleOnChange: PropTypes.func,
  isFetchingStates: PropTypes.bool,
  isShipping: PropTypes.bool,
};

UserAdress.defaultProps = {
  input: {},
  countries: [],
  handleOnChange: () => null,
  isFetchingStates: false,
  isShipping: false,
};

export default UserAdress;
