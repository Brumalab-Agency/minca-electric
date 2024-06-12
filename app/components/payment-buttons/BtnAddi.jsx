"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export const BtnAddi = ({ preciopagar, idOrder }) => {
  const [totalPrice, setDefinitivePrice] = useState(sessionStorage.getItem("price"));
  const [input, setInput] = useState(sessionStorage.getItem("data"));
  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem("cart")));

  const handlePayment = async () => {
    const paymentData = {
      orderId: idOrder,
      totalAmount: totalPrice,
      shippingAmount: "50000.0", // Example value, update as needed
      currency: "COP",
      items: cart.map(item => ({
        sku: item.sku,
        name: item.name,
        quantity: item.quantity.toString(),
      })),
      client: {
        idType: "CC",
        idNumber: "354125896", // Example value, update as needed
        firstName: "Juanes", // Example value, update as needed
        lastName: "hernandez", // Example value, update as needed
        email: "jehp01104006@gmail.com", // Example value, update as needed
        cellphone: "3211236584",  // Example value, update as needed
        cellphoneCountryCode: "+57",
        address: {
          lineOne: "cr 48 156 25 25",
          city: "Bogotá D.C",
          country: "CO",
        },
      },
      allyUrlRedirection: {
        callbackUrl: "https://www.mincaelectric.com/api/webhook-addi",
        redirectionUrl: "https://www.mincaelectric.com/gracias-por-tu-compra",
      },
      geoLocation: {
        latitude: "0",
        longitude: "0"
      }
    };

    const response = await fetch('/api/addi', {
      method: 'POST',
      headers: {
        "Content-Type": "text/html"
      },
      body: JSON.stringify(paymentData),
    });
    
    const data = await response.json();
    if (data.url) {
        window.location.href = data.url;
    } else {
        console.error('Redirection URL not provided');
    }
  };

  return (
    <div className="m-auto h-auto w-full lg:w-[300px]">
      <button onClick={handlePayment} className="btn-addi">
      <img
          className="h-auto w-[50px] mt-2 -ml-3 pr-3"
          src="/pagoPage/addi_checkout.png"
          alt="store"
        />
        Pagar con Addi
      </button>
    </div>
  );
};

export default BtnAddi;
