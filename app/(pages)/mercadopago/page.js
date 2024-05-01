"use client";

import PaymentBrick from "@/components/mercadopago/PaymentBrik";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState, useEffect } from "react";

export const Mercadopago = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
    locale: "es-CO",
  });

  useEffect(() => {
    const fetchData = async () => {
      const id = await createPreference();
      console.log(id, "meercadopago page")
      if (id) {
        setPreferenceId(id);
      }
    };

    fetchData();
  }, []);

  console.log(preferenceId)

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://www.mincaelectric.com/api/apimercadopago",
        {
          title: "Una Card",
          quantity: 1,
          price: 150,
        },
        {
          title: "Tarjeta",
          quantity: 2,
          price: 300,
        },
        {
          title: "Scooter",
          quantity: 1,
          price: 500,
        },
      );
      const { id } = response.data;


      return id;
    } catch (error) {
      console.log(error);
    }
  };

  /* const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  }; */

  return (
    <div className="m-auto h-auto w-[300px]">
     
      {/* <button
        onClick={handleBuy}
        class="inline-block rounded border border-indigo-600 bg-indigo-600 px-[100px] py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        href="#"
      >
        Comprar
      </button> */}
      {preferenceId && (
        <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'modal' }} />
      )}

      <h2>Checkout Briks</h2>
      <PaymentBrick/>

    </div>
  );
};

export default Mercadopago;