"use client";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState, useEffect } from "react";

export const Mercadopago = ({preciopagar,idOrder}) => {

  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
    locale: "es-CO",
  });

  useEffect(() => {
    const fetchData = async () => {
      const id = await createPreference({preciopagar});
      console.log(id);
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
        `${window.location.protocol}//${window.location.host}/api/apimercadopago`,
        {
          title: "Total a pagar",
          quantity: 1,
          price: price,
          idComplete: idOrder
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
