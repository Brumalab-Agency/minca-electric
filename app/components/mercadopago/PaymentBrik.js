import { Payment } from '@mercadopago/sdk-react';
import { useState } from 'react';
import { initializeMercadoPago } from '@/lib/MercadoPagoInit';

export default function PaymentBrick() {
  const [formData, setFormData] = useState({});

  initializeMercadoPago(); // Inicializar Mercado Pago

  const initialization = {
    amount: 10000, // Monto del pago (ejemplo)
    preferenceId: "<PREFERENCE_ID>", // ID de la preferencia (obtenido de Mercado Pago)
  };

  const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    // Lógica para enviar los datos del formulario al servidor
    // Ejemplo: fetch('/process_payment', { method: 'POST', body: JSON.stringify(formData) });
  };

  const onError = async (error) => {
    console.log(error); // Manejar errores
  };

  const onReady = async () => {
    // Lógica cuando el Brick está listo
  };

  return (
    <Payment
      initialization={initialization}
      customization={customization}
      onSubmit={onSubmit}
      onReady={onReady}
      onError={onError}
    />
  );
}
