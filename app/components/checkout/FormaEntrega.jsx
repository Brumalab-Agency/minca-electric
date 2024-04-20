import React, { useState } from "react";
import Envio from "./Envio";
import ElegirShowroom from "./ElegirShoroom";
import CiudadesColombia from "../ciudadesColombia/CiudadesColombia";
import useShowroomStore from "@/store/orden.store";
import { manrope } from "@/ui/fonts";


const FormaEntrega = ({
  input,
  handleOnChange,
  handleShippingFee,
  setFormIsValid,
  isShipping,
}) => {
  const [formaEntrega, setFormaEntrega] = useState(""); // Estado para almacenar la forma de entrega seleccionada
  const setSelectedShowroom = useShowroomStore((state) => state.setSelectedShowroom);

  // Función para manejar el cambio de forma de entrega
  const handleFormaEntregaChange = (event) => {
    setFormaEntrega(event.target.value);
  };

  return (
    <div>
      {/* Input para seleccionar la forma de entrega */}
      <div className="mb-3 w-full h-auto rounded-[10px] border-[3px] border-[#464646] bg-[#F0F1EB]">
        <div className="flex flex-col items-start">
          <div className="grid place-items-center justify-start ml-3 w-full h-[50px]">
            <label className="radio-container mr-4">
              <input
                type="radio"
                name="formaEntrega"
                value="envia"
                checked={formaEntrega === "envia"}
                onChange={handleFormaEntregaChange}
                className="radio-input mr-2"
              />
              <div className="flex items-center justify-start ">
                <span className="radio-custom"></span>
                <img
                  className="h-auto w-[25px] -ml-1 mr-1"
                  src="/carrito/envio-formulario.svg"
                  alt="store"
                />
                <p>Envía</p>
              </div>
            </label>
          </div>
          <hr className="w-full border-b-[1px] border-[#464646]" />
          <div className="grid place-items-center justify-start ml-3 w-full h-[50px]">
            <label className="radio-container mr-2">
              <input
                type="radio"
                name="formaEntrega"
                value="recogida"
                checked={formaEntrega === "recogida"}
                onChange={handleFormaEntregaChange}
                className="radio-input"
              />
              <div className="flex items-center justify-start ">
                <span className="radio-custom"></span>
                <img
                  className="h-auto w-[30px] -ml-2"
                  src="/carrito/stor-formulario.svg"
                  alt="store"
                />
                <p>Recogida en showrooms</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Renderizado condicional del componente dependiendo de la forma de entrega seleccionada */}
      {formaEntrega === "envia" && (
        <>
          <div>
            <p className={` ${manrope.className} font-bold text-[24px] my-10`}>Datos de envío</p>
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
          <h2 className={` ${manrope.className} font-medium text-[20px] mb-4 mt-10`}>Elige un showroom para recoger tu compra</h2>
          <ElegirShowroom input={input} handleShowroomSelection={setSelectedShowroom}/>
          <hr className="border-b-[1px] border-[#111] mt-10"/>
          <div>
            <p className={` ${manrope.className} font-bold text-[24px] my-10`}>Datos de facturación</p>
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
