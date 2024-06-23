"use client";
import { useState } from "react";


export const BtnAddi = ({ preciopagar, idOrder }) => {
  const [totalPrice, setDefinitivePrice] = useState(sessionStorage.getItem("price"));
  const [input, setInput] = useState(JSON.parse(sessionStorage.getItem("data")));
  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem("cart")));
  const shiipinPrice = sessionStorage.getItem("shippingPrice")

  const dataOrder = {
    order_id: idOrder,
    first_name: input.shipping.Nombre || input.billing.Nombre,
    last_name: input.shipping.Apellido || input.billing.Apellido,
    principal_address: input.shipping.Direccion1 || input.billing.Direccion1,
    showroom_address: input.shipping.Direccion2 || input.billing.Direccion2,
    city: input.shipping.Ciudad || input.billing.Ciudad,
    region: input.shipping.Departamento || input.billing.Departamento,
    type_of_housing: input.shipping.TipoVivienda || input.billing.TipoVivienda,
    coutry: "CO",
    email: input.shipping.Email || input.billing.Email,
    phone: input.shipping.Telefono || input.billing.Telefono,
    identification: input.shipping.NumeroIdentificacion || input.billing.NumeroIdentificacion,
    neighborhood: input.shipping.Barrio || input.billing.Barrio,
    addressee: input.shipping.Destinatario || input.billing.Destinatario,
    recipient_phone: input.shipping.TelefonoDestinatario || input.billing.TelefonoDestinatario,
    company: input.shipping.Empresa || input.billing.Empresa,
    email_company: input.shipping.EmailEmpresa || input.billing.EmailEmpresa,
    nit: input.shipping.Nit || input.billing.Nit,
    phone_company: input.shipping.TelefonoTrabajo || input.billing.TelefonoTrabajo,
    business_name: input.shipping.RazonSocial || input.billing.RazonSocial,
  }

  const products = cart.map(item => ({
    order_id: idOrder,
    name: item.name,
    quantity: item.quantity.toString(),
    price: item.price.toString(),
    shippingPrice: item.shippingPrice,
    difference: item.difference.toString(),
    totalPrice: item.totalPrice,
    image: item.image,
  }));

  const handlePayment = async () => {
    await fetch('/api/orders-complete', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataOrder),
    });

    for (let i = 0; i < products.length; i++) {
      await fetch('/api/products-complete', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(products[i]),
      });
    }

    const paymentData = {
      orderId: idOrder,
      totalAmount: totalPrice,
      shippingAmount: shiipinPrice,
      currency: "COP",
      items: cart.map(item => ({
        sku: item.sku,
        name: item.name,
        quantity: item.quantity.toString(),
      })),
      client: {
        idType: "CC",
        idNumber: input.shipping.NumeroIdentificacion || input.billing.NumeroIdentificacion, 
        firstName: input.shipping.Nombre || input.billing.Nombre, 
        lastName: input.shipping.Apellido || input.billing.Apellido,
        email: input.shipping.Email || input.billing.Email,
        cellphone: input.shipping.Telefono || input.billing.Telefono,
        cellphoneCountryCode: "+57",
        address: {
          lineOne: input.shipping.Direccion1 || input.billing.Direccion1,
          city: input.shipping.Ciudad || input.billing.Ciudad,
          country: "CO",
        },
      },
      allyUrlRedirection: {
        callbackUrl: "https://4be1-2800-e2-57f-f643-813b-4807-943d-368.ngrok-free.app/api/webhook-addi",
        redirectionUrl: `https://4be1-2800-e2-57f-f643-813b-4807-943d-368.ngrok-free.app/pagoAddi/${idOrder}`,
      },
      geoLocation: {
        latitude: "0",
        longitude: "0"
      }
    };

    const response = await fetch('/api/addi', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
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
    <div className="m-auto h-auto w-full lg:w-[300px] ">
      <button onClick={handlePayment}>
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
