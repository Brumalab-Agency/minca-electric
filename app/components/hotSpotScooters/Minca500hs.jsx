import Image from 'next/image';
import React from 'react'

const Minca500hs = () => {
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
  {
    console.log(markers.casco1.title);
  }
  return (
    <div className="carrusel relative grid h-[494px] grid-cols-12 grid-rows-12 overflow-hidden bg-[#878D8F] px-4 lg:h-[663px] lg:grid-cols-12 lg:grid-rows-12 lg:px-[48px] 2xl:h-[850px]">
      <div className="pointer-events-none col-span-full row-span-full grid h-auto w-full place-items-center overflow-hidden bg-[url('/scooterHotsSpot/500W.png')] bg-[length:77%] bg-center bg-no-repeat lg:bg-[length:32%] 2xl:bg-[length:23%]">
        <Image
          className="lg:w-[40%] 2xl:w-[30%]"
          placeholder="empty"
          alt="scooter"
          src="/scooterHotsSpot/minca500whotspot.png"
          priority={true}
          width={569}
          height={600}
        />
      </div>

      {/* Markers 1 Frenos*/}
      <section
        className="btn-pulse markers right-[36%] top-[0%] col-span-1 row-span-1 w-auto lg:-top-[2%] lg:right-[51%] 2xl:right-[54%] 2xl:top-[5%]"
        style={{ gridColumn: "4 / 12", gridRow: "3 / 12" }}
      >
        <div className="marker__card right-[5px] top-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:right-[10px] 2xl:right-[60px]">
          <p className="marker__card__title text-nowrap text-white">
            {markers.casco1.title}
          </p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>

      {/* Markers 2 Display digital*/}
      <section
        className="btn-pulse markers  -top-[7%] left-[50%] col-span-1 row-span-1 lg:-top-[7%] lg:left-[38%] 2xl:-top-[1%] 2xl:left-[36%]"
        style={{ gridColumn: "5 / 12", gridRow: "4 / 12" }}
      >
        <div className="marker__card right-[5px] top-[20px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:right-[0px] 2xl:right-[25px]">
          <p className="marker__card__title text-nowrap text-white">
            {markers.casco2.title}
          </p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 3 Altura ajustable*/}
      <section
        className="btn-pulse markers  -top-[36%] right-[33%] col-span-1 row-span-1 lg:-top-[38%] lg:right-[46%] 2xl:-top-[33%] 2xl:right-[48%]"
        style={{ gridColumn: "3 / 12", gridRow: "7 / 12" }}
      >
        <div className="marker__card bottom-[4px] right-[5px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:right-[0px] 2xl:right-[30px]">
          <p className="marker__card__title text-nowrap text-white">
            {markers.casco3.title}
          </p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>

      {/* Markers 4 Luces Laterales y Stop Trasero*/}
      <section
        className="btn-pulse markers left-[27%] top-[4%] col-span-1 row-span-1 lg:left-[40%] lg:top-[4%] 2xl:left-[43%] 2xl:top-[-18%]"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card -left-[40px] bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:bottom-[180%] 2xl:bottom-[55%]">
          <p className="marker__card__title text-nowrap text-white">
            {markers.casco4.title}
          </p>
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
        className="btn-pulse markers left-[4%] top-[12%] col-span-1 row-span-1 lg:left-[31%] lg:top-[13%] 2xl:left-[36%] 2xl:top-[3%]"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[160px] lg:bottom-[60%] 2xl:-right-[160px]">
          <p className="marker__card__title text-nowrap text-white">
            {markers.casco5.title}
          </p>
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
        className="btn-pulse markers -top-[25%] left-[11%] col-span-1 row-span-1 lg:-top-[16%] lg:left-[34%] 2xl:-top-[26%] 2xl:left-[37%]"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card -left-[18px] bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] ">
          <p className="marker__card__title text-nowrap text-white">
            {markers.casco6.title}
          </p>
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
        className="btn-pulse markers left-[16%] col-span-1 row-span-1 lg:left-[37%] lg:top-[0%] 2xl:left-[40%] 2xl:top-[15%]"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12", top: "-0.7px" }}
      >
        <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[140px] 2xl:-right-[130px]">
          <p className="marker__card__title text-nowrap text-white">
            {markers.casco7.title}
          </p>
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
        className="btn-pulse markers -top-[10%] left-[18%] col-span-1 row-span-1 lg:-left-[8%] lg:top-[3%] 2xl:-left-[11%] 2xl:-top-[18%]"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card -right-[20px] bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px] ">
          <p className="marker__card__title text-nowrap text-white">
            {markers.casco8.title}
          </p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>

      {/* Markers 9 Luz Led y Claxon Electrónico*/}
      <section
        className="btn-pulse markers mb-100 -top-[35%] left-[64%] col-span-1 row-span-1 lg:-top-[23%] lg:left-[9%] 2xl:-top-[37%] 2xl:left-[1%]"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card -right-[20px] bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[0px] ">
          <p className="marker__card__title text-nowrap text-white">
            {markers.casco9.title}
          </p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>

      {/* Markers 10 Monoshock*/}
      <section
        className="btn-pulse markers -top-[5%] left-[50%] col-span-1 row-span-1 lg:left-[48%] lg:top-[40%] 2xl:-left-[1%] 2xl:-top-[8%]"
        style={{ gridColumn: "3 / 24", gridRow: "5 / 24" }}
      >
        <div className="marker__card -right-[40px] bottom-[8px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px] ">
          <p className="marker__card__title text-nowrap text-white">
            {markers.casco10.title}
          </p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>

      {/* Markers 11 Llanta*/}
      <section
        className="btn-pulse markers left-[70%] top-[15%]  col-span-1 row-span-1 mb-3 ml-2 lg:left-[13%] lg:top-[23%] 2xl:left-[4%] 2xl:top-[14%]"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div className="marker__card -right-[30px] bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px] 2xl:-right-[160px]">
          <p className="marker__card__title text-nowrap text-white">
            {markers.casco11.title}
          </p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
    </div>
  );
};

export default Minca500hs;