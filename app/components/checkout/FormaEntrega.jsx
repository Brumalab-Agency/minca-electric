import React, { useState } from "react";
import Envio from "./Envio";
import ElegirShowroom from "./ElegirShoroom";
import CiudadesColombia from "../ciudadesColombia/CiudadesColombia";

const FormaEntrega = ({
  input,
  handleOnChange,
  handleShippingFee,
  setFormIsValid,
  isShipping,
}) => {
  const [formaEntrega, setFormaEntrega] = useState(""); // Estado para almacenar la forma de entrega seleccionada

  // Función para manejar el cambio de forma de entrega
  const handleFormaEntregaChange = (event) => {
    setFormaEntrega(event.target.value);
  };

  return (
    <div>
      {/* Input para seleccionar la forma de entrega */}
      <div className="mb-3 w-full rounded-[10px] border-[3px] border-[#464646] bg-[#F0F1EB]">
        <div className="flex flex-col items-start">
          <div className="p-[18px]">
            <label className="radio-container mr-4">
              <input
                type="radio"
                name="formaEntrega"
                value="envia"
                checked={formaEntrega === "envia"}
                onChange={handleFormaEntregaChange}
                className="radio-input mr-2"
              />
              <span className="radio-custom"></span>
              Envía
            </label>
          </div>
          <hr className="w-full border-b-[1px] border-[#464646]" />
          <div className="p-[18px]">
            <label className="radio-container mr-4">
              <input
                type="radio"
                name="formaEntrega"
                value="recogida"
                checked={formaEntrega === "recogida"}
                onChange={handleFormaEntregaChange}
                className="radio-input mr-2"
              />
              <span className="radio-custom"></span>
              Recogida en showrooms
            </label>
          </div>
        </div>
      </div>

      {/* Renderizado condicional del componente dependiendo de la forma de entrega seleccionada */}
      {formaEntrega === "envia" && (
        <>
          <div>
            <p className="text-[20px] font-bold">Datos de envío</p>
          </div>
          {/*  Ciudades de Colombia*/}
          <CiudadesColombia
            inputValue={input?.CiudadesColombia}
            input={input}
            handleOnChange={handleOnChange}
            handleShippingFee={handleShippingFee}
            setFormIsValid={setFormIsValid}
            isShipping={isShipping}
          />
        </>
      )}
      {formaEntrega === "recogida" && (
        <>
          <ElegirShowroom />
          <div>
            <p className="text-[20px] font-bold">Datos de facturación</p>
          </div>
          {/*  Ciudades de Colombia*/}
          <CiudadesColombia
            inputValue={input?.CiudadesColombia}
            input={input}
            handleOnChange={handleOnChange}
            handleShippingFee={handleShippingFee}
            setFormIsValid={setFormIsValid}
            isShipping={isShipping}
          />
        </>
      )}
    </div>
  );
};

export default FormaEntrega;
