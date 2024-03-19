"use client";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";

export const Mercadopago = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-f06eabcb-7ef3-41ee-a379-e532b2658022", {
    locale: "es-CO",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://headless-woocommerce-nu.vercel.app/api/apimercadopago",
        {
          title: "Una Card",
          quantity: 1,
          price: 100,
        },
      );
      const { id } = response.data;

      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className="m-auto h-auto w-[300px]">
      
      <button
        onClick={handleBuy}
        class="inline-block rounded border border-indigo-600 bg-indigo-600 px-[100px] py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        href="#"
      >
        Comprar
      </button>
      {preferenceId && (
        <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'blank' }} />
      )}
    </div>
  );
};

export default Mercadopago;