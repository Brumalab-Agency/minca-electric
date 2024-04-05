"use client";

import { useState, useContext } from "react";
import cx from "classnames";

import YourOrder from "./YourOrder";
import PaymentModes from "./PaymentModes";
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
import BtnMercadoPago from "../mercadopago/BtnMercadoPago";
import { manrope } from "@/ui/fonts";
import Link from "next/link";

// Utilice esto con fines de prueba, para que no tenga que completar el formulario de pago una y otra vez.
const defaultCustomerInfo = {
  firstName: "Lenin",
  lastName: "Mendoza",
  address1: "123 Abc farm",
  address2: "Hill Road",
  city: "Medellín",
  country: "CO",
  state: "En medellín",
  postcode: "221029",
  email: "mendoza124302@gmail.com",
  phone: "9883778278",
  company: "Freelance",
  emailEmpresa: "empresa@empresa.com",
  recogida: "En algún lado de medellín",
  tipoIdentificacion: ["Cédula de Ciudadanía", "Cédula de Extranjería", "Número de pasaporte"],
  numeroIdentificacion: "123456789",
  razonSocial: "Anonimo",
  nit: "1234567-8",
  telefonoTrabajo: "3022222222",
  errors: null,
};

/* const defaultCustomerInfo = {
	firstName: '',
	lastName: '',
	address1: '',
	address2: '',
	city: '',
	country: '',
	state: '',
	postcode: '',
	email: '',
	phone: '',
	company: '',
	errors: null
} */

const CheckoutForm = ({ countriesData }) => {
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

  /**
   * Handle form submit.
   *
   * @param {Object} event Event Object.
   *
   * @return Null.
   */
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setTemporalCarrito(cart);
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
    if ("stripe" === input.paymentMethod) {
      const createdOrderData = await handleStripeCheckout(
        input,
        cart?.cartItems,
        setRequestError,
        setCart,
        setIsOrderProcessing,
        setCreatedOrderData,
      );
      return null;
    }
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

    if ("createAccount" === target.name) {
      handleCreateAccount(input, setInput, target);
    } else if ("billingDifferentThanShipping" === target.name) {
      handleBillingDifferentThanShipping(input, setInput, target);
    } else if (isBillingOrShipping) {
      if (isShipping) {
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
  return (
    <>
      {cart || (idOrder && temporalCarrito) ? (
        <form
          className="woo-next-checkout-form px-4 lg:px-[100px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
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

                <h2 className="mb-4 text-xl font-medium">Mis datos</h2>
                <UserAdress
                  states={theShippingStates}
                  countries={shippingCountries}
                  input={input?.shipping}
                  handleOnChange={(event) => handleOnChange(event, true, true)}
                  isFetchingStates={isFetchingShippingStates}
                  isShipping
                  isBillingOrShipping
                />
                
              </div>
              <div>
                <CheckboxField
                  name="billingDifferentThanShipping"
                  type="checkbox"
                  checked={input?.billingDifferentThanShipping}
                  handleOnChange={handleOnChange}
                  label="Facturación diferente al envío."
                  containerClassNames="mb-4 pt-4"
                />
              </div>
              <CheckboxField
                name="notificaciones"
                type="checkbox"
                checked={input?.billingDifferentThanShipping}
                handleOnChange={handleOnChange}
                label="Me gustaría recibir información sobre ofertas y promociones de Samsung Electronics"
                containerClassNames="pt-4"
                textCheckBox="text-[10px]"
              />
              <CheckboxField
                name="notificaciones"
                type="checkbox"
                required
                checked={input?.billingDifferentThanShipping}
                handleOnChange={handleOnChange}
                label="Acepto los Términos y condiciones"
                containerClassNames=""
                textCheckBox="text-[10px]"
              />
              <CheckboxField
                name="notificaciones"
                type="checkbox"
                required
                checked={input?.billingDifferentThanShipping}
                handleOnChange={handleOnChange}
                label="Autorizo el tratamiento de mis datos personales , con las siguientes condiciones."
                containerClassNames="mb-10"
                textCheckBox="text-[10px]"
              />
              <img src="/mercado pago .png" />
                <p className="my-10 text-[12px]">
                  Para consultas comunicarse al : WhatsApp: +573222102466
                </p>
              {/*Billing Details*/}
              {input?.billingDifferentThanShipping ? (
                <div className="billing-details">
                  <h2 className="mb-4 text-xl font-medium">
                    Detalles de facturación
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
            </div>
            {/* Order & Payments*/}
            <div className="your-orders h-fit w-full rounded-md bg-[#F0F1EB] p-8">
              {/*	Order*/}
              <h2 className="mb-4 text-xl font-medium">Resumen del pedido</h2>
              <hr className="mb-3"></hr>

              <YourOrder cart={cart ? cart : temporalCarrito} />
              {/*Metodo de envio*/}
              <h2
                className={`${manrope.className} text-base font-bold lg:text-[24px]`}
              >
               
              </h2>

              {/* <PaymentModes input={input} handleOnChange={handleOnChange} /> */}
              <div className="woo-next-place-order-btn-wrap mt-5">
              {!idOrder? 
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

               {idOrder ? <BtnMercadoPago preciopagar={cart?.totalPrice ? cart?.totalPrice : temporalCarrito?.totalPrice} idOrder={idOrder}/> : null }
              </div>

              {/* Checkout Loading*/}
              {isOrderProcessing && <p>Procesando orde...</p>}
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
