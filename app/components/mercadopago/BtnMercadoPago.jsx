"use client";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState, useEffect } from "react";

export const Mercadopago = ({preciopagar}) => {


  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("APP_USR-b5e5c8f0-8f0b-469f-81ad-525142372167", {
    locale: "es-CO",
  });

  useEffect(() => {
    const fetchData = async () => {
      const id = await createPreference({preciopagar});
      if (id) {
        setPreferenceId(id);
      }
    };

    fetchData();
  }, []);

  const createPreference = async (preciopagar, cantidad) => {
    console.log(preciopagar);
    try {
      const price = preciopagar.preciopagar;
      const qty = preciopagar.cantidad
      const response = await axios.post(
        "http://localhost:3000/api/apimercadopago",
        {
          title: "Total a pagar",
          quantity: 1,
          price: price,
        },
      );
      const { id } = response.data;

      return id;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-auto h-auto w-[300px]">
      {preferenceId && (
        <Wallet
          initialization={{ preferenceId: preferenceId, redirectMode: "modal" }}
        />
      )}
    </div>
  );
};

export default Mercadopago;
