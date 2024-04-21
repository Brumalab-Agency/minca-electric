"use client";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/Context";
import Link from "next/link"

export const Mercadopago = ({preciopagar,idOrder}) => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
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
        <Link
        href={{
          pathname: "/gracias-por-tu-compra",
          query: { idOrder: idOrder },
        }}
      >
        {console.log(idOrder)}
        <Wallet
          initialization={{ preferenceId: preferenceId, redirectMode: "modal" }}
        />
      </Link>
      )}
    </div>
  );
};

export default Mercadopago;
