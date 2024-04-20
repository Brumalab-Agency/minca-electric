"use client";

import { useState, useContext, useEffect, useRef } from "react";
import cx from "classnames";

import YourOrder from "./YourOrder";
import validateAndSanitizeCheckoutForm from "@/validator/chekout";
import UserAdress from "./UserAdress";
import { AppContext } from "../context/Context";
import CheckboxField from "./fomr-elements/CheckboxField";
import {
  handleBillingDifferentThanShipping,
  handleCreateAccount,
  handleOtherPaymentMethodCheckout,
  handleStripeCheckout,
  setStatesForCountry,
} from "@/utils/checkout/utilsCheckout";
import { manrope } from "@/ui/fonts";
import Link from "next/link";
import InputCustomField from "./fomr-elements/InputCustomField";
import { useRouter } from "next/router";
import useShowroomStore from "@/store/orden.store";

// Utilice esto con fines de prueba, para que no tenga que completar el formulario de pago una y otra vez.
const defaultCustomerInfo = {
  Nombre: "Lenin",
  Apellido: "Mendoza",
  Direccion1: "Medellín - Antioquia",
  Direccion2: "Hill Road",
  Ciudad: "Medellín",
  Pais: "CO",
  Email: "mendoza124302@gmail.com",
  Telefono: "9883778278",
  Empresa: "Freelance",
  EmailEmpresa: "empresa@empresa.com",
  RazonSocial: "Anonimo",
  Nit: "1147696023-8",
  TelefonoTrabajo: "3022222222",
  NumeroIdentificacion: "1147696023",
  errors: null,
};

/* const defaultCustomerInfo = {
  Nombre: "",
  Apellido: "",
  Direccion1: "",
  Direccion2: "",
  Ciudad: "",
  Pais: "CO",
  Email: "",
  Telefono: "",
  Empresa: "",
  EmailEmpresa: "",
  RazonSocial: "",
  Nit: "",
  TelefonoTrabajo: "",
  NumeroIdentificacion: "",
  CiudadesColombia: "",
  DireccionSamsung1: "",
  DireccionSamsung2: "",
  DireccionSamsung3: "",
  Barrio: "",
  RecibirInfo: "",
  AceptarTerminos: "",
  TratamientoDatos: "",
  TipoVivienda: "",
  Referencia: "",
  Quienrecibe: "",
  Receptor: "",
  errors: null,
}; */

// el state o estado del país es parte del componente Pais y este ya tiene sus campos predeterminados

const CheckoutForm = ({ countriesData, onFormSubmit }) => {
  const { billingCountries, shippingCountries } = countriesData || {};

  const initialState = {
    billing: {
      ...defaultCustomerInfo,
    },
    shipping: {
      ...defaultCustomerInfo,
    },
    createAccount: false,
    orderNotes: "",
    billingDifferentThanShipping: false,
    recibirInfo: false,
    aceptarTerminos: false,
    tratamientoDatos: false,
    paymentMethod: "",
  };

  const [cart, setCart] = useContext(AppContext);
  const [input, setInput] = useState(initialState);
  const [requestError, setRequestError] = useState(null);
  const [idOrder, setIdOrder] = useState(null);
  const [temporalCarrito, setTemporalCarrito] = useState(AppContext);
  const [theShippingStates, setTheShippingStates] = useState([]);
  const [isFetchingShippingStates, setIsFetchingShippingStates] =
    useState(false);
  const [theBillingStates, setTheBillingStates] = useState([]);
  const [isFetchingBillingStates, setIsFetchingBillingStates] = useState(false);
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  const [createdOrderData, setCreatedOrderData] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);
  const [showAdditionalContent, setShowAdditionalContent] = useState(true);
  const selectedShowroom = useShowroomStore((state) => state.selectedShowroom);
  const shippingCharge = useShowroomStore((state) => state.shippingCharge);

  /**
   * Handle form submit.
   *
   * @param {Object} event Event Object.
   *
   * @return Null.
   */

  /*  Ocultar la imagen y texto despues de ser seleccionado una 'Facturacion Diferente' */

  const handleCheckboxChange = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };

  /* Validacion para inhabilitar el boton de envio de formulario hasta que todos los campos requeridos esten llenos */
  const checkFormValidity = () => {
    const requiredFields = document.querySelectorAll("input[required]");
    const requiredCheckboxes = document.querySelectorAll(
      "input[type='checkbox']",
    );
    let isValid = true;

    requiredFields.forEach((field) => {
      if (field.value.trim() === "") {
        isValid = false;
      }
    });
    // RecibirInfo

    requiredCheckboxes.forEach((checkbox) => {
      if (
        checkbox.name !== "billingDifferentThanShipping" &&
        checkbox.name !== "RecibirInfo" &&
        checkbox.name !== "mostrarEmpresa" &&
        !checkbox.checked
      ) {
        isValid = false;
      }
    });

    setFormIsValid(isValid);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setTemporalCarrito(cart);

    if (typeof onFormSubmit === "function") {
      onFormSubmit();
    }

    /* const formEl = document.querySelector("#gas");
    alert("Formulario enviado");
    const formData = new FormData(formEl);
    fetch(
      "https://script.google.com/macros/s/AKfycby94az2J5ToSKdvjDSrk8LUb6RV7YXV4Nx3j5o34Lsl_Z3yPpn58nmv3B07LQ487Zuc/exec",
      {
        method: "POST",
        body: formData,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error)); */
    /**
     * Validar Detalles de Facturación y Envío
     *
     * Nota:
     * 1. Si la dirección de facturación es diferente a la dirección de envío, entonces validar solo la facturación.
     * 2. Estamos pasando theBillingStates?.length y theShippingStates?.length, de manera que
     * los estados respectivos solo deben ser obligatorios si un país tiene estados.
     */
    const billingValidationResult = input?.billingDifferentThanShipping
      ? validateAndSanitizeCheckoutForm(
          input?.billing,
          theBillingStates?.length,
        )
      : {
          errors: null,
          isValid: true,
        };
    const shippingValidationResult = validateAndSanitizeCheckoutForm(
      input?.shipping,
      theShippingStates?.length,
    );

    setInput({
      ...input,
      billing: { ...input.billing, errors: billingValidationResult.errors },
      shipping: { ...input.shipping, errors: shippingValidationResult.errors },
    });

    // Si hay algún error, regrese.
    if (!shippingValidationResult.isValid || !billingValidationResult.isValid) {
      return null;
    }

    // Para el modo de pago con STRIPE, maneje el pago con STRIPE y gracias.
    /* if ("stripe" === input.paymentMethod) {
      const createdOrderData = await handleStripeCheckout(
        input,
        cart?.cartItems,
        setRequestError,
        setCart,
        setIsOrderProcessing,
        setCreatedOrderData,
      );
      return null;
    } */
    // Para cualquier otro modo de pago, cree el pedido y redirija al usuario a la URL de pago.
    const createdOrderData = await handleOtherPaymentMethodCheckout(
      input,
      cart?.cartItems,
      setRequestError,
      setCart,
      setIsOrderProcessing,
      setCreatedOrderData,
    );
    setIdOrder(createdOrderData.orderId);

    /* if ( createdOrderData.paymentUrl ) {
    

			window.location.href = createdOrderData.paymentUrl;

		} */

    setRequestError(null);
  };

  /*
   * Manejar el cambio de entrada.
   *
   * @param {Object} event Objeto de Evento.
   * @param {bool} isShipping Si es falso, significa que es de facturación.
   * @param {bool} isBillingOrShipping Si es falso, significa que es una entrada estándar y no de facturación o envío.
   *
   * @return {void}
   */

  const handleOnChange = async (
    event,
    isShipping = false,
    isBillingOrShipping = false,
  ) => {
    const { target } = event || {};

    if (!target || !target.name) {
      return;
    }

    checkFormValidity();
    if (target.name === "billingDifferentThanShipping") {
      handleCheckboxChange();
    }

    // createAccount no esta haciendo nada pero por motivos de evitar errores más adelante se ha dejado, ya luego se eliminara!
    if ("createAccount" === target.name) {
      handleCreateAccount(input, setInput, target);
    } else if ("billingDifferentThanShipping" === target.name) {
      handleBillingDifferentThanShipping(input, setInput, target);
    } else if (isBillingOrShipping) {
      if (isShipping) {
        if (target.name === "RetirarEn" && target.value === "Bogotá: $45.000") {
          // Agregar el cargo adicional al carrito
          setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            updatedCart.totalPrice += 45000;
            return updatedCart;
          });
        } else if (
          target.name === "Envio" &&
          target.value ===
            "Fuera de Bogotá. Entrega de 3 a 5 días hábiles: $90.000"
        ) {
          // Agregar el cargo adicional al carrito
          setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            updatedCart.totalPrice += 90000;
            return updatedCart;
          });
        } else {
          // Restaurar el totalPrice original del carrito
          setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            updatedCart.totalPrice = prevCart.cartItems.reduce(
              (total, item) => total + item.line_total,
              0,
            );
            return updatedCart;
          });
        }
        await handleShippingChange(target);
      } else {
        await handleBillingChange(target);
      }
    } else {
      const newState = { ...input, [target.name]: target.value };
      setInput(newState);
    }
  };

  const handleShippingChange = async (target) => {
    const newState = {
      ...input,
      shipping: { ...input?.shipping, [target.name]: target.value },
    };
    setInput(newState);
    await setStatesForCountry(
      target,
      setTheShippingStates,
      setIsFetchingShippingStates,
    );
  };

  const handleBillingChange = async (target) => {
    const newState = {
      ...input,
      billing: { ...input?.billing, [target.name]: target.value },
    };
    setInput(newState);
    await setStatesForCountry(
      target,
      setTheBillingStates,
      setIsFetchingBillingStates,
    );
  };

  // Separador de miles
  const separadorDeMiles = (numero) => {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  };

  return (
    <>
      {cart || (idOrder && temporalCarrito) ? (
        <form
          id="gas"
          className="woo-next-checkout-form px-4 lg:px-[85px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              {/*Shipping Details*/}
              <div className="billing-details">
                <div className="mb-5 rounded-md bg-[#F0F1EB] p-4">
                  <p>
                    Recuerda hacer el proceso de compra con los datos completos
                    y originales del tipo de identificación (cédula o
                    pasaporte).
                  </p>
                </div>

                <h2 className={` ${manrope.className} text-[24px] font-bold`}>
                  Mis datos
                </h2>
                <UserAdress
                  idOrder={idOrder}
                  setFormIsValid={setFormIsValid}
                  states={theShippingStates}
                  countries={shippingCountries}
                  input={input?.shipping}
                  handleOnChange={(event) => handleOnChange(event, true, true)}
                  isFetchingStates={isFetchingShippingStates}
                  isShipping
                  isBillingOrShipping
                />
              </div>

              {/* <div className="DetallesFacturacion mt-4">
                <h2 className="mb-4 text-[20px] font-bold">
                  Detalles de facturación
                </h2>
                <div className="flex items-center py-4">
                  <CheckboxField
                  name="billingDifferentThanShipping"
                  type="checkbox"
                  checked={input?.billingDifferentThanShipping}
                  handleOnChange={handleOnChange}
                  label="Igual que el envío"
                  containerClassNames="mb-4 pt-4"
                />
                  <div>
                
              </div>
                </div>
                <hr className="my-6 border-[1px] border-[#111] stroke-black"></hr>
              </div> */}
              {/*Billing Details*/}
              {input?.billingDifferentThanShipping ? (
                <div className="billing-details">
                  <h2 className="mb-4 text-xl font-medium">
                    Detalles de facturación diferente al envio
                  </h2>
                  <UserAdress
                    states={theBillingStates}
                    countries={
                      billingCountries.length
                        ? billingCountries
                        : shippingCountries
                    }
                    input={input?.billing}
                    handleOnChange={(event) =>
                      handleOnChange(event, false, true)
                    }
                    isFetchingStates={isFetchingBillingStates}
                    isShipping={false}
                    isBillingOrShipping
                  />
                </div>
              ) : null}
              <div className="mt-4">
                <InputCustomField
                  name="RecibirInfo"
                  type="checkbox"
                  inputValue={input?.RecibirInfo ? "Sí" : "No"}
                  handleOnChange={handleOnChange}
                  label="Me gustaría recibir información sobre ofertas y promociones de MINCA"
                  placeholder=""
                  containerClassNames="mb-4 flex items-center"
                  classInput="w-[5%] h-[5%] order-first mr-2 "
                  classLabel="grow"
                />

                <InputCustomField
                  name="AceptarTerminos"
                  required
                  type="checkbox"
                  inputValue={input?.AceptarTerminos ? "Sí" : "No"}
                  handleOnChange={handleOnChange}
                  label="Acepto los Términos y condiciones"
                  placeholder=""
                  containerClassNames="mb-4 flex items-center"
                  classInput="w-[5%] h-[5%] order-first mr-2 "
                  classLabel="grow"
                />
                <InputCustomField
                  name="TratamientoDatos"
                  required
                  type="checkbox"
                  inputValue={input?.TratamientoDatos ? "Sí" : "No"}
                  handleOnChange={handleOnChange}
                  label="Autorizo el tratamiento de mis datos personales , con las siguientes condiciones."
                  placeholder=""
                  containerClassNames="mb-4 flex items-center"
                  classInput="w-[5%] h-[5%] order-first mr-2 "
                  classLabel="grow"
                />
              </div>

              <div className="mt-14">
                <p>Tipos de pago admitidos:</p>
                <img src="/mercado pago .png" />
                <p className="my-10 text-[12px]">
                  Para consultas comunicarse al : WhatsApp: +573222102466
                </p>
              </div>
            </div>
            {/* Order & Payments*/}
            <div className="your-orders order-first h-fit w-full rounded-md bg-[#F0F1EB] p-8 lg:order-none lg:mb-0 lg:mb-14">
              {/*	Order*/}
              <h2 className="mb-4 text-xl font-medium">Resumen del pedido</h2>
              <hr className="mb-3"></hr>

              <YourOrder cart={cart ? cart : temporalCarrito} />
              {shippingCharge ? (
                <div className="rounded-sm bg-slate-200 text-center">
                  <small className="w-full">
                    Se ha asignado un recargo por tu zona destino de:{" "}
                    <b>{separadorDeMiles(shippingCharge)}$ COP</b>{" "}
                  </small>
                </div>
              ) : selectedShowroom ? (
                <div className="rounded-sm bg-slate-200 text-center">
                  <small className="w-full">
                    Has seleccionado retirar en: <b>{selectedShowroom}</b>{" "}
                  </small>
                </div>
              ) : null}
              {/*Metodo de envio*/}
              <h2
                className={`${manrope.className} text-base font-bold lg:text-[24px]`}
              ></h2>

              {/* <PaymentModes input={input} handleOnChange={handleOnChange} /> */}
              <div className="woo-next-place-order-btn-wrap mt-5">
                {/* {!idOrder? 
                <button
                  disabled={isOrderProcessing}
                  className={cx(
                    "rounded-[52px] bg-[#111] px-[54px] py-[16px] text-white h-[60px] w-[300px]",
                    { "opacity-50": isOrderProcessing },
                  )}
                  type="button"
                  onClick={handleFormSubmit}
                >

                  Confirmar Compra
                </button>:null}

                {idOrder ? <BtnMercadoPago preciopagar={cart?.totalPrice ? cart?.totalPrice : temporalCarrito?.totalPrice} idOrder={idOrder}/> : null } */}

                {/*  */}

                {!idOrder ? (
                  <button
                    disabled={!formIsValid || isOrderProcessing}
                    className={cx(
                      "h-[60px] w-full rounded-[52px] bg-[#111] px-[54px] py-[16px] text-white",
                      { "opacity-50": !formIsValid || isOrderProcessing },
                    )}
                    type="button"
                    onClick={handleFormSubmit}
                  >
                    Continuar
                  </button>
                ) : null}

                {idOrder ? (
                  <Link
                    href={{
                      pathname: "/checkout/pago",
                      query: { idOrder: idOrder },
                    }}
                    className="block h-[60px] w-full rounded-[52px] bg-[#111] px-[54px] py-[16px] text-center text-white"
                  >
                    Continuar
                  </Link>
                ) : null}
              </div>

              {isOrderProcessing && <p>Procesando orden...</p>}
              {requestError && (
                <p>Error : {requestError} : Por favor intenta de nuevo</p>
              )}
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
};

export default CheckoutForm;
