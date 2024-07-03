import Image from 'next/image';
import React from 'react'

const Minca800hs = () => {
  const markers = {
    casco1: {
      title: "Timon Ajustable ",
    },
    casco4: {
      title: "Batería 48v 15ah",
    },
    casco5: {
      title: " Frenos Hidráulicos",
    },
    casco6: {
      title: "Agarradera",
    },
    casco7: {
      title: " Direccionales Traseras ",
    },
    casco8: {
      title: "Direccionales Delanteras",
    },
    casco9: {
      title: "Luz Metálica",
    },
    casco10: {
      title: "Doble Suspensión Delantera",
    },
    casco11: {
      title: "Llanta sellomatic",
    },
  };
  return (
    <div className="carrusel relative grid h-[494px] 2xl:h-[850px] grid-cols-12 grid-rows-12 bg-[#878D8F] px-4 lg:h-[663px] lg:grid-cols-12 lg:grid-rows-12 lg:px-[48px] overflow-hidden">
    <div className="pointer-events-none col-span-full row-span-full grid h-auto w-full place-items-center overflow-hidden bg-[url('/scooterHotsSpot/800W.png')] bg-[length:77%] lg:bg-[length:32%] 2xl:bg-[length:23%] bg-no-repeat bg-center">
      <Image
        className="lg:w-[40%] 2xl:w-[30%]"
        placeholder="empty"
        alt="scooter"
        src="/scooterHotsSpot/minca1600whotspot.png"
        priority={true}
        width={569}
        height={570}
      />
    </div>

    {/* Markers 1 Timon Ajustable*/}
    <section
      className="btn-pulse markers right-[42%] top-[13%] col-span-1 row-span-1 lg:top-[12%] lg:right-[54%] 2xl:top-[18%] 2xl:right-[56%] w-auto"
      style={{ gridColumn: "4 / 12", gridRow: "3 / 12" }}
    >
      <div className="marker__card top-[4px] right-[5px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:right-[10px] 2xl:right-[60px]">
        <p className="text-nowrap marker__card__title text-white">{markers.casco1.title}</p>
      </div>
      <div className="circle border-1 grid place-items-center border border-red-600">
        <span className="outer"></span>
      </div>
    </section>
    {/* Markers 4 Batería 48v 15ah*/}
    <section
      className="btn-pulse markers  col-span-1 row-span-1 left-[42%] -top-[17%] lg:left-[47%] lg:-top-[10%] 2xl:left-[48%] 2xl:-top-[17%]"
      style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
    >
      <div className="marker__card bottom-[4px] -left-[40px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px]  ">
        <p className="text-nowrap marker__card__title text-white">{markers.casco4.title}</p>
      </div>
      <div className="circle border-1 grid place-items-center border border-red-600">
        <span className="outer"></span>
      </div>
      <div className="circle border-1 grid place-items-center border border-red-600">
        <span className="outer"></span>
      </div>
    </section>
     {/* Markers 5 Frenos Hidráulicos*/}
     <section
      className="btn-pulse markers  left-[8%] -top-[19%] col-span-1 row-span-1 lg:left-[33%] lg:-top-[12%] 2xl:left-[38%] 2xl:-top-[20%]"
      style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
    >
      <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[160px] 2xl:-right-[160px]">
        <p className="text-nowrap marker__card__title text-white">{markers.casco5.title}</p>
      </div>
      <div className="circle border-1 grid place-items-center border border-red-600">
        <span className="outer"></span>
      </div>
      <div className="circle border-1 grid place-items-center border border-red-600">
        <span className="outer"></span>
      </div>
    </section>
     {/* Markers 6 Agarradera*/}
     <section
      className="btn-pulse markers col-span-1 row-span-1 left-[14%] -top-[40%] lg:left-[37%] lg:-top-[36%] 2xl:left-[40%] 2xl:-top-[36%]"
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
     {/* Markers 7 Direccionales Traseras*/}
     <section
      className="btn-pulse markers col-span-1 row-span-1 left-[26%] bottom-[120%] lg:left-[41%] lg:bottom-[113%] 2xl:left-[43.5%] 2xl:-top-[27%]"
      style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
    >
      <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[140px] 2xl:-right-[130px] 2xl:bottom-[50px]">
        <p className="text-nowrap marker__card__title text-white">{markers.casco7.title}</p>
      </div>
      <div className="circle border-1 grid place-items-center border border-red-600">
        <span className="outer"></span>
      </div>
      <div className="circle border-1 grid place-items-center border border-red-600">
        <span className="outer"></span>
      </div>
    </section>
    {/* Markers 8 Direccionales Delanteras*/}
    <section
      className="btn-pulse markers  col-span-1 row-span-1 -left-[6%] bottom-[122%] lg:-left-[16%] lg:-top-[15%] 2xl:-left-[18%] 2xl:-top-[23%]"
      style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
    >
      <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] -right-[75px] ">
        <p className="text-nowrap marker__card__title text-white">{markers.casco8.title}</p>
      </div>
      <div className="circle border-1 grid place-items-center border border-red-600">
        <span className="outer"></span>
      </div>
    </section>
    {/* Markers 9 Luz Metálica*/}
    <section
      className="btn-pulse markers  col-span-1 row-span-1 left-[55%] -top-[44%] lg:left-[8%] lg:-top-[41%] 2xl:left-[1%] 2xl:-top-[45%]"
      style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
    >
      <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] -right-[20px] lg:-right-[0px] ">
        <p className="text-nowrap marker__card__title text-white">{markers.casco9.title}</p>
      </div>
      <div className="circle border-1 grid place-items-center border border-red-600">
        <span className="outer"></span>
      </div>
    </section>
    {/* Markers 10 Doble Suspensión Delantera
*/}
    <section
      className="btn-pulse markers  left-[33%] -top-[17%] col-span-1 row-span-1 lg:left-[0%] lg:-top-[12%] 2xl:-left-[6%] 2xl:-top-[16%]"
      style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
    >
      <div className="marker__card z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] bottom-[8px] -right-[40px] lg:-right-[4px] 2xl:-right-[91px]">
        <p className="text-nowrap marker__card__title text-white">{markers.casco10.title}</p>
      </div>
      <div className="circle border-1 grid place-items-center border border-red-600">
        <span className="outer"></span>
      </div>
    </section>
    {/* Markers 11 Llanta sellomatic*/}
    <section
      className="btn-pulse markers  left-[70%] -top-[9%] col-span-1 row-span-1 lg:left-[15%] lg:top-[0%] 2xl:left-[6%] 2xl:-top-[10%]"
      style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
    >
      <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] -right-[30px] lg:-right-[165px] 2xl:-right-[160px]">
        <p className="text-nowrap marker__card__title text-white">{markers.casco11.title}</p>
      </div>
      <div className="circle border-1 grid place-items-center border border-red-600">
        <span className="outer"></span>
      </div>
    </section>
  </div>
  );
}

export default Minca800hs