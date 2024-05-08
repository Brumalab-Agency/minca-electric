import Link from "next/link";
import { manrope, ubuntu } from "../../ui/fonts";

export const PuedeInteresarte = () => {
  return (
    <div className="carrusel-single-product-tambien-podria-interesarte lg:h-[630px place-items-left grid h-auto px-4 py-[50px] lg:px-[100px] 2xl:h-[900px]">
      <section className="h-[60px] w-auto lg:h-[100px] 2xl:mt-6 2xl:h-0">
        <h2
          className={`${manrope.className} text-[32px] font-bold leading-[42px] lg:text-[48px] lg:leading-[52px]`}
        >
          Minca Scooters
        </h2>
      </section>
      <section className="mt-[28px] flex h-full w-full items-center gap-[19px] overflow-scroll lg:mt-0 lg:justify-between lg:overflow-visible ">
        <Link
          href="/productos/Scooter_Electrico_Minca_350W"
          className="block h-auto w-[200px] flex-col justify-center text-center lg:flex lg:w-[274px] 2xl:w-[450px]"
        >
          <img
            className="h-[200px] max-w-[450px] lg:h-auto lg:w-[274px]  2xl:w-[450px]"
            src="/sigleProduct/minca-300-single-product.png"
            alt="scooter minca 300w"
          />
          <div className="flex w-full flex-col items-start justify-center">
            <h2
              className={`${manrope.className} mt-[10px] text-left text-base  font-bold text-[#111] lg:mt-[16px] lg:text-[20px] 2xl:text-[28px] 2xl:leading-[45px]`}
            >
              Scooter Eléctrico Minca 350W
            </h2>
            <p
              className={`${manrope.className} text-[14px] font-medium text-[#111] lg:text-base 2xl:text-[24px]`}
            >
              Last mile mode
            </p>
            <div className="flex items-center justify-between gap-4 lg:mt-[20px]">
              <p
                className={`${manrope.className}text-[#111] text-left text-[20px] font-bold 2xl:text-[24px]`}
              >
                $2.100.000
              </p>
              <span className="h-[24px] w-[58px] items-center justify-center rounded-full bg-[#FF3333] bg-opacity-10 px-2.5 py-0.5 text-[#FF3333] lg:inline-flex lg:h-7 lg:px-[14px] lg:py-[0px]">
                <p
                  className={`${manrope.className} whitespace-nowrap text-[12px] font-semibold `}
                >
                  -16%
                </p>
              </span>
            </div>
          </div>
        </Link>
        <Link
          href="/productos/Scooter_Electrico_Minca_500W"
          className="block h-auto w-[200px] flex-col justify-center text-center lg:flex lg:w-[274px] 2xl:w-[450px]"
        >
          <img
            className="h-[200px] max-w-[450px] lg:h-auto lg:w-[274px] 2xl:w-[450px]"
            src="/sigleProduct/minca-500-single-product.png"
            alt="scooter minca 500w"
          />
          <div className="flex w-full flex-col items-start justify-center">
            <h2
              className={`${manrope.className} mt-[10px] text-left text-base font-bold text-[#111]  lg:mt-[16px] lg:text-[20px] 2xl:text-[28px] 2xl:leading-[45px]`}
            >
              Scooter Eléctrico Minca 500W
            </h2>
            <p
              className={`${manrope.className} text-[14px] font-medium text-[#111] lg:text-base 2xl:text-[24px]`}
            >
              Up Hill Mode{" "}
            </p>
            <div className="flex items-center justify-between gap-4 lg:mt-[20px]">
              <p
                className={`${manrope.className}text-[#111] text-left text-[20px]  font-bold  2xl:text-[24px]`}
              >
                SOLD OUT
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/productos/Scooter_Electrico_Minca_800W"
          className="block h-auto w-[200px] flex-col justify-center text-center lg:flex lg:w-[274px] 2xl:w-[450px]"
        >
          <img
            className="h-[200px] max-w-[450px] lg:h-auto lg:w-[274px] 2xl:w-[450px]"
            src="/sigleProduct/minca-800-single-product.png"
            alt="scooter minca 800w"
          />
          <div className="flex w-full flex-col items-start justify-center">
            <h2
              className={`${manrope.className} mt-[10px] text-left text-base font-bold text-[#111]  lg:mt-[16px] lg:text-[20px] 2xl:text-[28px] 2xl:leading-[45px]`}
            >
              Scooter Eléctrico Minca 800W
            </h2>
            <p
              className={`${manrope.className} text-[14px] font-medium text-[#111] lg:text-base 2xl:text-[24px]`}
            >
              Up Hill Mode{" "}
            </p>
            <div className="flex items-center justify-between gap-4 lg:mt-[20px]">
              <p
                className={`${manrope.className}text-[#111] text-left text-[20px]  font-bold  2xl:text-[24px]`}
              >
                $4.275.000
              </p>
              <span className="h-[24px] w-[58px] items-center justify-center rounded-full bg-[#FF3333] bg-opacity-10 px-2.5 py-0.5 text-[#FF3333] lg:inline-flex lg:h-7 lg:px-[14px] lg:py-[0px]">
                <p
                  className={`${manrope.className} whitespace-nowrap text-[12px] font-semibold `}
                >
                  -16%
                </p>
              </span>
            </div>
          </div>
        </Link>
        <Link
          href="/productos/Scooter_Electrico_Minca_1600W"
          className="block h-auto w-[200px] flex-col justify-center text-center lg:flex lg:w-[274px] 2xl:w-[450px]"
        >
          <img
            className="h-[200px] max-w-[450px] lg:h-auto lg:w-[274px] 2xl:w-[450px]"
            src="/sigleProduct/minca-1600-single-product.png"
            alt="scooter minca 1600w"
          />
          <div className="flex w-full flex-col items-start justify-center">
            <h2
              className={`${manrope.className} mt-[10px] text-left text-base font-bold text-[#111]  lg:mt-[16px] lg:text-[20px] 2xl:text-[28px] 2xl:leading-[45px]`}
            >
              Scooter Eléctrico Minca 1600W
            </h2>
            <p
              className={`${manrope.className} text-[14px] font-medium text-[#111] lg:text-base 2xl:text-[24px]`}
            >
              Two Wheel Drive
            </p>
            <div className="flex items-center justify-between gap-4 lg:mt-[20px]">
              <p
                className={`${manrope.className}text-[#111] text-left text-[20px]  font-bold  2xl:text-[24px]`}
              >
                $4.770.000
              </p>
              <span className="h-[24px] w-[58px] items-center justify-center rounded-full bg-[#FF3333] bg-opacity-10 px-2.5 py-0.5 text-[#FF3333] lg:inline-flex lg:h-7 lg:px-[14px] lg:py-[0px]">
                <p
                  className={`${manrope.className} whitespace-nowrap text-[12px] font-semibold `}
                >
                  -16%
                </p>
              </span>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};
