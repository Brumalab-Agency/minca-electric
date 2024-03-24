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
  recogida:"En algún lado de medellín",
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

    setTemporalCarrito(cart)
    /**
     * Validate Billing and Shipping Details
     *
     * Note:
     * 1. If billing is different than shipping address, only then validate billing.
     * 2. We are passing theBillingStates?.length and theShippingStates?.length, so that
     * the respective states should only be mandatory, if a country has states.
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
    const createdOrderData = await handleOtherPaymentMethodCheckout( input, cart?.cartItems, setRequestError, setCart, setIsOrderProcessing, setCreatedOrderData );
    setIdOrder(createdOrderData.orderId)
		if ( createdOrderData.paymentUrl ) {
    

			/* window.location.href = createdOrderData.paymentUrl; */

		}

    setRequestError(null);
  };

  /*
   * Handle onchange input.
   *
   * @param {Object} event Event Object.
   * @param {bool} isShipping If this is false it means it is billing.
   * @param {bool} isBillingOrShipping If this is false means its standard input and not billing or shipping.
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
        <form className="woo-next-checkout-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
            <div>
              {/*Shipping Details*/}
              <div className="billing-details">
                <h2 className="mb-4 text-xl font-medium">Detalles de envío</h2>
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
              {/*Billing Details*/}
              {input?.billingDifferentThanShipping ? (
                <div className="billing-details">
                  <h2 className="mb-4 text-xl font-medium">Detalles de facturación</h2>
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
            <div className="your-orders">
              {/*	Order*/}
              <h2 className="mb-4 text-xl font-medium">Tu Orden</h2>
              {console.log(cart)}
              <YourOrder cart={cart?cart:temporalCarrito} />
              {/*Metodo de envio*/}
              <h2 className={`${manrope.className} text-base lg:text-[24px] font-bold`}>Metodo de envío</h2>
            
              {/* <PaymentModes input={input} handleOnChange={handleOnChange} /> */}
              <div className="woo-next-place-order-btn-wrap mt-5">

               {!idOrder? <button
                  disabled={isOrderProcessing}
                  className={cx(
                    "w-auto rounded-sm bg-purple-600 px-5 py-3 text-white xl:w-full",
                    { "opacity-50": isOrderProcessing },
                  )}
                  type="button"
                  onClick={handleFormSubmit}
                >
                  Realizar pedido
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
