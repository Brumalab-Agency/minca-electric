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
      title: "Luces Laterales y Stop Trasero",
    },
    casco5: {
      title: " Llanta Antipinchazos de 8 Pulgadas",
    },
    casco6: {
      //title: "Monoshock",
      title: "Posapié con caucho antideslizante",
    },
    casco7: {
      //title: " Plegado Facíl ",
      title: " Doble Suspensión Trasera ",
    },
    casco8: {
      //title: "Luces Laterales y Stop Trasero",
      title: "Plegado Facíl",
    },
    casco9: {
      //title: "Posapié con caucho antideslizante ",
      title: "Luz Led y Claxon Electrónico",
    },
    casco10: {
      //title: "Doble Suspensión Trasera ",
      title: "Monoshock",
    },
    casco11: {
      title: "Llanta Antipinchazos de 8 Pulgadas",
    },
  };
  return (
    <div className="carrusel relative grid h-[494px] 2xl:h-[850px] grid-cols-12 grid-rows-12 bg-[#878D8F] px-4 lg:h-[663px] lg:grid-cols-12 lg:grid-rows-12 lg:px-[48px] overflow-hidden">
      <div className="pointer-events-none col-span-full row-span-full grid h-auto w-full place-items-center overflow-hidden">
        <Image
          className="lg:w-[40%] 2xl:w-[30%]"
          placeholder="empty"
          alt="scooter"
          src="/minca350whotspot.png"
          priority={true}
          width={569}
          height={570}
        />
      </div>

      {/* Markers 1 Frenos*/}
      <section
        className="btn-pulse markers right-[36%] top-[0%] col-span-1 row-span-1 lg:-top-[2%] lg:right-[51%] 2xl:-top-[5%] 2xl:right-[54%] w-auto"
        style={{ gridColumn: "4 / 12", gridRow: "3 / 12" }}
      >
        <div className="marker__card top-[4px] right-[5px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:right-[10px] 2xl:right-[60px]">
          <p className="text-nowrap marker__card__title text-white">{markers.casco1.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>

      {/* Markers 2 Display digital*/}
      <section
        className="btn-pulse markers  left-[50%] -top-[7%] col-span-1 row-span-1 lg:-top-[7%] lg:left-[38%] 2xl:-top-[13%] 2xl:left-[36%]"
        style={{ gridColumn: "5 / 12", gridRow: "4 / 12" }}
      >
        <div className="marker__card top-[20px] right-[5px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:right-[0px] 2xl:right-[25px]">
          <p className="text-nowrap marker__card__title text-white">{markers.casco2.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 3 Altura ajustable*/}
      <section
        className="btn-pulse markers  right-[33%] -top-[36%] col-span-1 row-span-1 lg:right-[46%] lg:-top-[38%] 2xl:right-[48%] 2xl:-top-[40%]"
        style={{ gridColumn: "3 / 12", gridRow: "7 / 12" }}
      >
        <div className="marker__card bottom-[4px] right-[5px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:right-[0px] 2xl:right-[30px]">
          <p className="text-nowrap marker__card__title text-white">{markers.casco3.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 4 Luces Laterales y Stop Trasero*/}
      <section
        className="btn-pulse markers  col-span-1 row-span-1 left-[27%] top-[17%] lg:left-[40%] lg:bottom-[74%] 2xl:left-[43%] 2xl:bottom-[43%]"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card bottom-[4px] -left-[40px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:bottom-[180%] 2xl:bottom-[55%]">
          <p className="text-nowrap marker__card__title text-white">{markers.casco4.title}</p>
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
        className="btn-pulse markers  left-[4%] top-[22%] col-span-1 row-span-1 lg:left-[31%] lg:bottom-[50%] 2xl:left-[36%] 2xl:top-[40%]"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[160px] lg:bottom-[60%] 2xl:-right-[160px]">
          <p className="text-nowrap marker__card__title text-white">{markers.casco5.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
       {/* Markers 6 Posapié con caucho antideslizante*/}
       <section
        className="btn-pulse markers col-span-1 row-span-1 left-[14%] -top-[8%] lg:left-[37%] lg:top-[1%] 2xl:left-[40%] 2xl:top-[9%]"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] -left-[18px] ">
          <p className="text-nowrap marker__card__title text-white">{markers.casco6.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
       {/* Markers 7 Doble Suspensión Trasera*/}
       <section
        className="btn-pulse markers col-span-1 row-span-1 left-[16%] bottom-[88%] lg:left-[37%] lg:top-[20%] 2xl:left-[40%] 2xl:top-[35%]"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[140px] 2xl:-right-[130px]">
          <p className="text-nowrap marker__card__title text-white">{markers.casco7.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 8 Plegado Facíl*/}
      <section
        className="btn-pulse markers  col-span-1 row-span-1 left-[20%] lg:-left-[6%] lg:top-[13%] 2xl:-left-[9%] 2xl:top-[22%]"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] -right-[20px] lg:-right-[4px] ">
          <p className="text-nowrap marker__card__title text-white">{markers.casco8.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 9 Luz Led y Claxon Electrónico*/}
      <section
        className="btn-pulse markers  col-span-1 row-span-1 left-[66%] -top-[19%] lg:left-[11%] lg:-top-[6%] 2xl:left-[3%] 2xl:top-[4%]"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] -right-[20px] lg:-right-[0px] ">
          <p className="text-nowrap marker__card__title text-white">{markers.casco9.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 10 Monoshock*/}
      <section
        className="btn-pulse markers  left-[50%] -top-[5%] col-span-1 row-span-1 lg:left-[6%] lg:top-[5%] 2xl:-left-[1%] 2xl:top-[12%]"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] bottom-[8px] -right-[40px] lg:-right-[4px] ">
          <p className="text-nowrap marker__card__title text-white">{markers.casco10.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 11 Llanta*/}
      <section
        className="btn-pulse markers  left-[70%] top-[15%] col-span-1 row-span-1 lg:left-[13%] lg:top-[23%] 2xl:left-[4%] 2xl:top-[34%]"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] -right-[30px] lg:-right-[4px] 2xl:-right-[160px]">
          <p className="text-nowrap marker__card__title text-white">{markers.casco11.title}</p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
    </div>
  );
};
