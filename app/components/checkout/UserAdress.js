import PropTypes from "prop-types";
import CountrySelection from "./CountrySelection";
import StateSelection from "./StateSelection";
import InputField from "./fomr-elements/InputField";
import RecogidaSelection from "./Recogida";
import TipoIdentificacion from "./TipoIdentificacion";
import CheckboxField from "./fomr-elements/CheckboxField";
import CiudadesColombia from "../ciudadesColombia/CiudadesColombia";
import LocalidadesColombia from "../ciudadesColombia/LocalidadesColombia";
import { useState } from "react";

export const UserAdress = ({
  input,
  countries,
  states,
  handleOnChange,
  isFetchingStates,
  isShipping,
}) => {
  const { errors } = input || {};
  const [cart, setCart] = useState([]);

  const handleShippingFee = (fee) => {
    // Lógica para agregar el cargo adicional al carrito
    const newCartItem = { name: 'Cargo de envío', price: fee };
    setCart([...cart, newCartItem]);
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
          label="Correo electrónico de la empresa"
          errors={errors}
          isShipping={isShipping}
          containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
        />
        <InputField
          name="RazonSocial"
          inputValue={input?.RazonSocial}
          handleOnChange={handleOnChange}
          label="Razon Social"
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
          label="NIT"
          errors={errors}
          isShipping={isShipping}
          containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
        />
        <InputField
          name="TelefonoTrabajo"
          type="tel"
          inputValue={input?.TelefonoTrabajo}
          handleOnChange={handleOnChange}
          label="Número de teléfono del trabajo"
          errors={errors}
          isShipping={isShipping}
          containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
        />
      </div>
      {/*  Ciudades de Colombia*/}
      <CiudadesColombia />
      {/* Localidades de Colombia */}
      <LocalidadesColombia />
      {/* Sitio de recogida */}
      <RecogidaSelection handleShippingFee={handleShippingFee} handleOnChange={handleOnChange}/>
      <InputField
        name="Direccion1"
        inputValue={input?.Direccion1}
        required
        handleOnChange={handleOnChange}
        label="Dirección"
        placeholder="House number and street name"
        errors={errors}
        isShipping={isShipping}
        containerClassNames="mb-4"
      />
      <InputField
        name="Direccion2"
        inputValue={input?.Direccion2}
        handleOnChange={handleOnChange}
        label="Segunda dirección"
        placeholder="Apartment floor unit building floor etc(optional)"
        errors={errors}
        isShipping={isShipping}
        containerClassNames="mb-4"
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
