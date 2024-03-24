import Image from "next/image";

export const HotSpot = (scooters) => {
  const markers = {
    casco1: {
      title: "Freno de Banda Trasero ",
    },
    casco2: {
      title: " Display digital",
    },
    casco3: {
      title: " Altura Ajustable",
    },
    casco4: {
      title: "Luz Led y Claxon Electrónico",
    },
    casco4: {
      title: "Luz Led y Claxon Electrónico",
    },
    casco5: {
      title: " Llanta Antipinchazos de 8 Pulgadas",
    },
    casco6: {
      title: " Monoshock",
    },
    casco7: {
      title: " Plegado Facíl ",
    },
    casco8: {
      title: "Luces Laterales y Stop Trasero",
    },
    casco9: {
      title: "Posapié con caucho antideslizante ",
    },
    casco10: {
      title: "Doble Suspensión Trasera ",
    },
    casco11: {
      title: "Llanta Antipinchazos de 8 Pulgadas",
    },
  };
  return (
    <div className="carrusel relative grid h-[494px] grid-cols-12 grid-rows-12 bg-[#F4F5F0] px-4 lg:h-[663px] lg:grid-cols-12 lg:grid-rows-12 lg:px-[48px] overflow-hidden">
      <div className="pointer-events-none col-span-full row-span-full grid h-auto w-full place-items-center overflow-hidden">
        <Image
          className="scale-x-[-1] lg:w-[40%] 2xl:w-[30%]"
          placeholder="empty"
          alt="scooter"
          src="/sigleProduct/scooter-single-product3.png"
          priority={true}
          width={569}
          height={570}
        />
      </div>

      {/* Markers 1 Frenos*/}
      <section
        className="btn-pulse markers -left-[3%] top-[2%] col-span-1 row-span-1 lg:-top-[1%] lg:left-[24%] 2xl:-top-[2%] 2xl:left-[28%] w-auto"
        style={{ gridColumn: "4 / 12", gridRow: "3 / 12" }}
      >
        <div class="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px]">
          <p class="text-nowrap marker__card__title text-white">{markers.casco1.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>

      {/* Markers 2 Display digital*/}
      <section
        className="btn-pulse markers  left-[4%] top-[2%] col-span-1 row-span-1 lg:-top-[7%] lg:left-[17%] 2xl:-top-[7%] 2xl:left-[20%]"
        style={{ gridColumn: "5 / 12", gridRow: "4 / 12" }}
      >
        <div class="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px]">
          <p class="text-nowrap marker__card__title text-white">{markers.casco2.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 3 Altura ajustable*/}
      <section
        className="btn-pulse markers  left-[13%] -top-[36%] col-span-1 row-span-1 lg:left-[33%] lg:-top-[38%] 2xl:left-[36%] 2xl:-top-[40%]"
        style={{ gridColumn: "3 / 12", gridRow: "7 / 12" }}
      >
        <div class="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px] ">
          <p class="text-nowrap marker__card__title text-white">{markers.casco3.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 4 Luz Claxon*/}
      <section
        className="btn-pulse markers  left-[7%] -top-[18%] col-span-1 row-span-1 lg:left-[35%] -lg:top-[0%] 2xl:left-[39%] 2xl:-top-[9%]"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
      >
        <div class="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px] ">
          <p class="text-nowrap marker__card__title text-white">{markers.casco4.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
       {/* Markers 5 Llanta*/}
       <section
        className="btn-pulse markers  left-[4%] top-[22%] col-span-1 row-span-1 lg:left-[33%] lg:top-[40%] 2xl:left-[37%] 2xl:top-[40%]"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
      >
        <div class="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px] ">
          <p class="text-nowrap marker__card__title text-white">{markers.casco5.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
       {/* Markers 6 Monoshock*/}
       <section
        className="btn-pulse markers  left-[14%] -top-[1%] col-span-1 row-span-1 lg:left-[37%] lg:top-[6%] 2xl:left-[40%] 2xl:top-[9%]"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
      >
        <div class="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px] ">
          <p class="text-nowrap marker__card__title text-white">{markers.casco6.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
       {/* Markers 7 Plegado*/}
       <section
        className="btn-pulse markers  left-[25%] top-[0%] col-span-1 row-span-1 lg:left-[41%] lg:top-[10%] 2xl:left-[43%] 2xl:top-[9%]"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
      >
        <div class="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px] ">
          <p class="text-nowrap marker__card__title text-white">{markers.casco7.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 8 Luces laterales*/}
      <section
        className="btn-pulse markers  col-span-1 row-span-1 lg:-left-[6%] lg:top-[13%] 2xl:-left-[11%] 2xl:top-[27%]"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div class="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px] ">
          <p class="text-nowrap marker__card__title text-white">{markers.casco8.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 9 Posa pie*/}
      <section
        className="btn-pulse markers  left-[30%] -top-[15%] col-span-1 row-span-1 lg:left-[3%] lg:-top-[3%] 2xl:-left-[4%] 2xl:top-[4%]"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div class="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px] ">
          <p class="text-nowrap marker__card__title text-white">{markers.casco9.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 10 Suspensión*/}
      <section
        className="btn-pulse markers  left-[30%] top-[5%] col-span-1 row-span-1 lg:left-[3%] lg:top-[17%] 2xl:-left-[4%] 2xl:top-[24%]"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div class="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px] ">
          <p class="text-nowrap marker__card__title text-white">{markers.casco10.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 11 Llanta*/}
      <section
        className="btn-pulse markers  left-[70%] top-[5%] col-span-1 row-span-1 lg:left-[13%] lg:top-[23%] 2xl:left-[4%] 2xl:top-[34%]"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div class="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px] ">
          <p class="text-nowrap marker__card__title text-white">{markers.casco11.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
    </div>
  );
};
