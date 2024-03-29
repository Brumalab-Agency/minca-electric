import Image from "next/image";

export const HotSpotAccesorios = () => {
  const markers = {
    hotspot1: {
      title: "HotSpot 1",
    },
    hotspot2: {
      title: "HotSpot 2",
    },
    hotspot3: {
      title: "HotSpot 3",
    },
  };

  return (
    <div className="carrusel relative grid h-[494px] grid-cols-12 grid-rows-12 bg-[#F4F5F0] px-4 lg:h-[663px] lg:grid-cols-12 lg:grid-rows-12 lg:px-[48px]">
      <div className="pointer-events-none col-span-full row-span-full grid h-auto w-full place-items-center overflow-hidden">
        <Image
          className=" lg:w-[30%] 2xl:w-[20%] "
          placeholder="empty"
          alt="scooter"
          src="/especificaciones-accesorios/casco-single.png"
          priority={true}
          width={400}
          height={400}
        />
      </div>
      {/* Markers 1 Hotspot 1*/}
      <section
        className="btn-pulse markers -left-[3%] top-[2%] col-span-1 row-span-1 w-auto lg:top-[13%] lg:left-[24%] 2xl:top-[13%] 2xl:left-[45%]"
        style={{ gridColumn: "4 / 12", gridRow: "3 / 12" }}
      >
        <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px]">
          <p className="marker__card__title text-nowrap text-white">
            {markers.hotspot1.title}
          </p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 2 Hotspot 2*/}
      <section
        className="btn-pulse markers left-[59%] top-[2%] col-span-1 row-span-1 w-auto lg:top-[13%] lg:left-[48%] 2xl:top-[13%] 2xl:left-[28%]"
        style={{ gridColumn: "4 / 12", gridRow: "3 / 12" }}
      >
        <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px]">
          <p className="marker__card__title text-nowrap text-white">
            {markers.hotspot2.title}
          </p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 3 Hotspot 3*/}
      <section
        className="btn-pulse markers left-[59%] top-[40%] col-span-1 row-span-1 w-auto lg:top-[43%] lg:left-[48%] 2xl:top-[40%] 2xl:left-[42%]"
        style={{ gridColumn: "4 / 12", gridRow: "3 / 12" }}
      >
        <div className="marker__card bottom-[4px] z-50 rounded-[62px] bg-[#111] px-[15px] py-[5px] lg:-right-[4px]">
          <p className="marker__card__title text-nowrap text-white">
            {markers.hotspot3.title}
          </p>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
    </div>
  );
};

export default HotSpotAccesorios