"use client";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/Context";
import Link from "next/link"

export const Mercadopago = ({preciopagar,idOrder}) => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [totalPrice, setDefinitivePrice] = useState(sessionStorage.getItem("price"));
  const [input, setInput] = useState(sessionStorage.getItem("data"));
  const [cart, setCarrt] = useState(sessionStorage.getItem("cart"));
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
/*       const price = preciopagar.preciopagar;
      const qty = preciopagar.cantidad */

      const response = await axios.post(
        `/api/apimercadopago`,
        {
          title: "Total a pagar",
          quantity: 1,
          price: Number(totalPrice),
          idComplete: idOrder,
          inputData: input,
          cartData: cart,
        },
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const customization ={
    texts: {
      action: 'pay',
      valueProp: 'security_details',
    },
    visual: {
      buttonBackground: 'black',
      borderRadius: '16px',
      valuePropColor: 'white'
  },
  }


  return (
    <div className="m-auto h-auto w-full lg:w-[300px]">
      {preferenceId && (
        <Link
        href={{
          query: { idOrder: idOrder },
        }}
      >
        <Wallet
          initialization={{ preferenceId: preferenceId, redirectMode: "modal" }}
          customization={customization}
        />
      </Link>
      )}
    </div>
  );
};

export default Mercadopago;
