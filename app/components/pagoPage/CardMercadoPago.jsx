import React from 'react';

const CardMercadoPago = () => {
  return (
    <div className="mb-3 w-full h-auto rounded-[10px] border-[3px] border-[#464646] bg-[#F0F1EB]">
      <div className="flex items-center justify-between ml-3 h-[63px]">
        <label className="radio-container mr-4">
          <input
            type="radio"
            name="formaEntrega"
            value="envia"
            className="radio-input mr-2"
            checked
          />
          <div className="flex items-center justify-start">
            <span className="radio-custom"></span>
            <p className="grow">Checkout Mercado Pago</p>
          </div>
        </label>
        <img
          className="h-auto w-[110px] -ml-1 mr-1 pr-3"
          src="/pagoPage/mercadoPado_pago_page.png"
          alt="store"
        />
      </div>
    </div>
  );
};

export default CardMercadoPago;
