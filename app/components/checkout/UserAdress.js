import PropTypes from "prop-types";
import InputField from "./fomr-elements/InputField";
import RecogidaSelection from "./Recogida";
import TipoIdentificacion from "./TipoIdentificacion";
import CiudadesColombia from "../ciudadesColombia/CiudadesColombia";
import { useState } from "react";
import DireccionSamsung from "../ciudadesColombia/direccion/DireccionSamsung";
import Abbr from "./fomr-elements/Abbr";
import TipoViviendaSamsung from "../ciudadesColombia/direccion/TipoViviendaSamsung";

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
        label="Dirección de correo electrónico"
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
          label="Nombres Completos"
          errors={errors}
          isShipping={isShipping}
          containerClassNames="w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
        />

        <InputField
          name="Apellido"
          inputValue={input?.Apellido}
          required
          handleOnChange={handleOnChange}
          label="Apellidos Completos"
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
          placeholder="#"
          errors={errors}
          isShipping={isShipping}
          containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
        />
      </div>

      {/* Input de tipo check para mostrar/ocultar */}
      {/* <div className="py-4">
        <input
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          type="checkbox"
          id="mostrarEmpresa"
          name="mostrarEmpresa"
          onChange={handleCheckChange}
        />
        <label className="text-[14px] font-medium" htmlFor="mostrarEmpresa">
          Compra (Empresa)
        </label>
      </div> */}
      <div className="flex items-center py-4">
        <label className="radio-container text-[14px] font-medium">
          <input
            type="checkbox"
            id="mostrarEmpresa"
            name="mostrarEmpresa"
            onChange={handleCheckChange}
            className="radio-input"
          />
          <span className="radio-custom"></span>
          Compra (Empresa)
        </label>
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
      <hr className="my-4 border-[1px] border-[#111] stroke-black"></hr>
      <div>
        <p className="text-[20px] font-bold">Datos de envío</p>
      </div>
      {/*  Ciudades de Colombia*/}
      <CiudadesColombia
        inputValue={input?.CiudadesColombia}
        input={input}
        handleOnChange={handleOnChange}
        setFormIsValid={setFormIsValid}
        isShipping={isShipping}
      />
      {/* <div>
        <div className="flex">
          <h2 className="text-sm font-bold leading-7 text-[#111]">Dirección</h2>
          <Abbr required />
        </div>
        <div className="relative w-full overflow-hidden ">
          <DireccionSamsung
            inputValue={input?.CiudadesColombia}
            handleOnChange={handleOnChange}
            setFormIsValid={setFormIsValid}
            isShipping={isShipping}
          />
          <div className="flex items-center gap-3">
            <InputField
              name="DireccionSamsung1"
              type="text"
              inputValue={input?.DireccionSamsung1}
              handleOnChange={handleOnChange}
              errors={errors}
              isShipping={isShipping}
              containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
            />
            <span className="text-base font-bold">#</span>
            <InputField
              name="DireccionSamsung2"
              type="text"
              inputValue={input?.DireccionSamsung2}
              handleOnChange={handleOnChange}
              errors={errors}
              isShipping={isShipping}
              containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
            />
            <span className="text-base font-bold">-</span>
            <InputField
              name="DireccionSamsung3"
              type="text"
              inputValue={input?.DireccionSamsung3}
              handleOnChange={handleOnChange}
              errors={errors}
              isShipping={isShipping}
              containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <InputField
            name="Barrio"
            type="text"
            label="Barrio"
            required
            inputValue={input?.Barrio}
            handleOnChange={handleOnChange}
            errors={errors}
            isShipping={isShipping}
            containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
          />
          <div className="mb-4 w-full overflow-hidden sm:my-2 md:w-1/2">
            <div className="flex">
              <h2 className="text-sm font-bold leading-7 text-[#111]">
                Tipo de Inmueble
              </h2>
              <Abbr required />
            </div>
            <TipoViviendaSamsung
              inputValue={input?.TipoViviendaSamsung}
              handleOnChange={handleOnChange}
              setFormIsValid={setFormIsValid}
              isShipping={isShipping}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="mb-4 w-full overflow-hidden sm:my-2 md:w-1/2">
            <div className="flex">
              <h2 className="text-sm font-bold leading-7 text-[#111]">
                Nombre de la persona que recibe
              </h2>
              <Abbr required />
            </div>
            <InputField
              name="Quienrecibe"
              type="text"
              label=""
              inputValue={input?.Quienrecibe}
              handleOnChange={handleOnChange}
              errors={errors}
              isShipping={isShipping}
              containerClassNames="w-full overflow-hidden sm:my-2"
            />
          </div>
          <div className="mb-4 w-full overflow-hidden sm:my-2 md:w-1/2">
            <div className="flex">
              <h2 className="text-sm font-bold leading-7 text-[#111]">
                Teléfono celular (Persona receptora)
              </h2>
              <Abbr required />
            </div>
            <InputField
              name="Receptor"
              type="tel"
              label=""
              inputValue={input?.Receptor}
              handleOnChange={handleOnChange}
              errors={errors}
              isShipping={isShipping}
              containerClassNames="w-full overflow-hidden sm:my-2"
            />
          </div>
        </div>

        <InputField
          name="Referencia"
          type="text"
          label="Lugar de referencia: calle , lugar o punto de
          indicación para encontrar tu direccion (opcional)"
          required
          inputValue={input?.Referencia}
          handleOnChange={handleOnChange}
          errors={errors}
          isShipping={isShipping}
          containerClassNames="w-full overflow-hidden sm:my-2"
          classLabel="w-[60%] block 2xl:w-[43%]"
        />

        <RecogidaSelection
          handleShippingFee={handleShippingFee}
          handleOnChange={handleOnChange}
        />
        <hr className="my-8 border-[1px] border-[#111] stroke-black"></hr>
      </div> */}
      {/* <InputField
        name="Direccion1"
        inputValue={input?.Direccion1}
        required
        handleOnChange={handleOnChange}
        label="Municipio"
        placeholder="Por favor seleccione"
        errors={errors}
        isShipping={isShipping}
        containerClassNames="mb-4 w-full overflow-hidden sm:my-2 md:w-1/2"
      /> */}
      {/* Sitio de recogida */}

      {/* <InputField
        name="Direccion2"
        required
        inputValue={input?.Direccion2}
        handleOnChange={handleOnChange}
        label="Agrega la dirección de tu Vivienda"
        placeholder="Dirección de tu Vivienda"
        errors={errors}
        isShipping={isShipping}
        containerClassNames="mb-4"
      /> */}

      {/* <div className="flex gap-3">
        <InputField
          name="Barrio"
          type="text"
          label="Barrio"
          required
          inputValue={input?.Barrio}
          handleOnChange={handleOnChange}
          errors={errors}
          isShipping={isShipping}
          containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
        />
        <div className="mb-4 w-full overflow-hidden sm:my-2 md:w-1/2">
          <div className="flex">
            <h2 className="text-sm font-bold leading-7 text-[#111]">
              Tipo de Inmueble
            </h2>
            <Abbr required />
          </div>
          <TipoViviendaSamsung
            inputValue={input?.TipoViviendaSamsung}
            handleOnChange={handleOnChange}
            setFormIsValid={setFormIsValid}
            isShipping={isShipping}
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="mb-4 w-full overflow-hidden sm:my-2 md:w-1/2">
          <div className="flex">
            <h2 className="text-sm font-bold leading-7 text-[#111]">
              Nombre de la persona que recibe
            </h2>
            <Abbr required />
          </div>
          <InputField
            name="Quienrecibe"
            type="text"
            label=""
            inputValue={input?.Quienrecibe}
            handleOnChange={handleOnChange}
            errors={errors}
            isShipping={isShipping}
            containerClassNames="w-full overflow-hidden sm:my-2"
          />
        </div>
        <div className="mb-4 w-full overflow-hidden sm:my-2 md:w-1/2">
          <div className="flex">
            <h2 className="text-sm font-bold leading-7 text-[#111]">
              Teléfono celular (Persona receptora)
            </h2>
            <Abbr required />
          </div>
          <InputField
            name="Receptor"
            type="tel"
            label=""
            inputValue={input?.Receptor}
            handleOnChange={handleOnChange}
            errors={errors}
            isShipping={isShipping}
            containerClassNames="w-full overflow-hidden sm:my-2"
          />
        </div>
      </div>

      <InputField
        name="Referencia"
        type="text"
        label="Lugar de referencia: calle , lugar o punto de
          indicación para encontrar tu direccion (opcional)"
        required
        inputValue={input?.Referencia}
        handleOnChange={handleOnChange}
        errors={errors}
        isShipping={isShipping}
        containerClassNames="w-full overflow-hidden sm:my-2"
        classLabel="w-[60%] block 2xl:w-[43%]"
      />

      <RecogidaSelection
        handleShippingFee={handleShippingFee}
        handleOnChange={handleOnChange}
      />
      <hr className="my-8 border-[1px] border-[#111] stroke-black"></hr> */}
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
        classInput="w-[5%] h-[5%] order-first mr-2 claseCheckBoxFormCheckOut"
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
        classInput="w-[5%] h-[5%] order-first mr-2 claseCheckBoxFormCheckOut"
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
        classInput="w-[5%] h-[5%] order-first mr-2 claseCheckBoxFormCheckOut"
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
