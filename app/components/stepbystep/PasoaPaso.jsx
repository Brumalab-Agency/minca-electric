import React from "react";

const PasoaPaso = ({inactivo1, inactivo2, inactivo3}) => {
  return (
    <div className="w-full h-[120px] lg:h-[150px] lg:mt-[130px] mt-8">
      <div className="relative m-auto grid h-[30px] w-full lg:w-[500px] grid-cols-3 place-items-center">
        <div className={`z-10 grid h-[30px] w-[30px] place-items-center rounded-full bg-[#111] text-white ${inactivo1} `}>
          1
        </div>

        <div className={`z-10 grid h-[30px] w-[30px] place-items-center rounded-full ${inactivo2} bg-[#111] text-white`}>
          2
        </div>
        <div className={`z-10 grid h-[30px] w-[30px] place-items-center rounded-full ${inactivo3} bg-[#111] text-white`}>
          3
        </div>
        <div className="absolute left-[75px] right-[75px] top-[calc(50%-0.5px)] z-0 h-px bg-black"></div>
      </div>
      <div className="relative m-auto grid h-[15px] w-full lg:w-[500px] grid-cols-3 place-items-center">
        <p>Tus datos</p>
        <p>Pago</p>
        <p className="text-center">Pedido terminado</p>
      </div>
    </div>
  );
};

export default PasoaPaso;
