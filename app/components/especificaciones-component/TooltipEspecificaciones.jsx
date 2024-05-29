"use client";
import { Tooltip } from "@material-tailwind/react";

const TooltipEspecificaciones = ({ tooltips }) => {
  return (
    <Tooltip
      className="z-50 bg-[#F0F1EB] text-black"
      content={
        <div className="max-w-md rounded-lg bg-[#F0F1EB] p-4">
          <h4 className="text-xl font-semibold">
            Fecha de entrega aproximada: última semana de junio del 2024. Se te
            confirmará la entrega a través de nuestros medios de comunicación.
          </h4>
          <p className="mt-2 text-gray-800">
            Nuestro sistema de preventa es sencillo y conveniente. Los clientes
            pueden asegurar su scooter eléctrica con un anticipo del 50% del
            valor final. El 50% restante se paga cuando las scooters estén
            disponibles para entrega. Así, garantizamos que tu scooter estará
            reservada y lista para ti en cuanto llegue al stock.
          </p>
        </div>
      }
    >
      <img
        src="/especificaciones/tooltipEspecificaciones.svg"
        alt="tooltips icon"
        style={{ width: "23px", height: "23px" }}
      />
    </Tooltip>
  );
};

export default TooltipEspecificaciones;
