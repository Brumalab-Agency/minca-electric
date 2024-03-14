import Image from "next/image";

export const HotSpot = () => {
  return (
    <div className="carrusel relative grid h-[494px] grid-cols-12 grid-rows-12 bg-[#F4F5F0] px-4 lg:h-[663px] lg:grid-cols-12 lg:grid-rows-12 lg:px-[48px]">
      <div className="pointer-events-none col-span-full row-span-full grid h-auto w-full place-items-center overflow-hidden">
        <Image
          className="lg:w-[40%] 2xl:w-[30%] scale-x-[-1]"
          placeholder="empty"
          alt="scooter"
          src="/sigleProduct/scooter-single-product3.png"
          priority={true}
          width={569}
          height={570}
        />
      </div>

      {/* Markers 1 */}
        <section
          className="btn-pulse -left-[3%] top-[2%] col-span-1 row-span-1 lg:-top-[1%] lg:left-[24%] 2xl:-top-[2%] 2xl:left-[26%] markers"
          style={{ gridColumn: "4 / 12", gridRow: "3 / 12" }}
        >
          <div class="marker__card bg-[#111] rounded-[62px] py-[5px] px-[15px] bottom-[4px] z-50 lg:-right-[4px] ">
            <p class="marker__card__title text-white">Casco</p>
          </div>
          <div className="circle border-1 grid place-items-center border border-red-600">
            <span className="outer"></span>
          </div>
        </section>

      {/* Markers 2 */}
      <section
        className="btn-pulse relative left-[4%] top-[2%] col-span-1 row-span-1 lg:-top-[1%] lg:left-[20%] 2xl:-top-[1%] 2xl:left-[22%] markers"
        style={{ gridColumn: "5 / 12", gridRow: "4 / 12" }}
      >
        <div class="marker__card bg-[#111] rounded-[62px] py-[5px] px-[15px] bottom-[4px] z-50 lg:-right-[4px] ">
            <p class="marker__card__title text-white">Casco</p>
          </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 3 */}
      <section
        className="btn-pulse relative left-[5%] top-[6%] col-span-1 row-span-1 lg:left-[30%] lg:top-[9%] 2xl:left-[33%] 2xl:top-[9%] markers"
        style={{ gridColumn: "3 / 12", gridRow: "7 / 12" }}
      >
        <div class="marker__card bg-[#111] rounded-[62px] py-[5px] px-[15px] bottom-[4px] z-50 lg:-right-[4px] ">
            <p class="marker__card__title text-white">Casco</p>
          </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 4 */}
      <section
        className="btn-pulse relative left-[5%] top-[2%] col-span-1 row-span-1 lg:left-[33%] lg:top-[10%] 2xl:left-[37%] 2xl:top-[9%] markers"
        style={{ gridColumn: "2 / 12", gridRow: "9 / 12" }}
      >
        <div class="marker__card bg-[#111] rounded-[62px] py-[5px] px-[15px] bottom-[4px] z-50 lg:-right-[4px] ">
            <p class="marker__card__title text-white">Casco</p>
          </div>
         <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 5 */}
      <section
        className="btn-pulse relative col-span-1 row-span-1 lg:-left-[16%] lg:-top-[1%] 2xl:-left-[18%] 2xl:top-[8%] markers"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div class="marker__card bg-[#111] rounded-[62px] py-[5px] px-[15px] bottom-[4px] z-50 lg:-right-[4px] ">
            <p class="marker__card__title text-white">Casco</p>
          </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
      {/* Markers 6 */}
      <section
        className="btn-pulse relative left-[70%] top-[5%] col-span-1 row-span-1 lg:left-[15%] lg:top-[15%] 2xl:left-[4%] 2xl:top-[14%] markers"
        style={{ gridColumn: "8 / 12", gridRow: "9 / 12" }}
      >
        <div class="marker__card bg-[#111] rounded-[62px] py-[5px] px-[15px] bottom-[4px] z-50 lg:-right-[4px] ">
            <p class="marker__card__title text-white">Casco</p>
          </div>
        <div className="circle border-1 grid place-items-center border border-red-600">
          <span className="outer"></span>
        </div>
      </section>
    </div>
  );
};
