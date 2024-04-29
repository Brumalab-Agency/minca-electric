import Link from "next/link";
import { manrope, ubuntu } from "../../ui/fonts";


export const PuedeInteresarte = () => {
  return (
    <div className="carrusel-single-product-tambien-podria-interesarte grid h-auto lg:h-[630px 2xl:h-[900px] place-items-left px-4 py-[50px] lg:px-[100px]">
      <section className="h-[60px] lg:h-[100px] 2xl:h-0 2xl:mt-6 w-auto">
        <h2 className={`${manrope.className} lg:text-[48px] lg:leading-[52px] font-bold text-[32px] leading-[42px]`}>
          Minca Scooters
        </h2>
      </section>
      <section className="flex h-full w-full items-center lg:justify-between gap-[19px] overflow-scroll lg:overflow-visible mt-[28px] lg:mt-0 ">
        <Link href="/productos/Scooter_Electrico_Minca_350W" className="block lg:flex flex-col justify-center text-center h-auto w-[200px] lg:w-[274px] 2xl:w-[450px]">
          <img
            className="h-[200px] lg:w-[274px] 2xl:w-[450px] lg:h-auto  max-w-[450px]"
            src="/sigleProduct/minca-300-single-product.png"
            alt="scooter minca 300w"
          />
          <div className="flex w-full flex-col items-start justify-center">
            <h2
              className={`${manrope.className} text-left lg:mt-[16px] lg:text-[20px]  2xl:text-[28px] 2xl:leading-[45px] font-bold text-[#111] mt-[10px] text-base`}
            >
              Scooter Eléctrico Minca 350W
            </h2>
            <p className={`${manrope.className} lg:text-base text-[#111] text-[14px] 2xl:text-[24px] font-medium`}>
              Last mile mode
            </p>
            <div className="lg:mt-[20px] flex items-center justify-between gap-4">
              <p
                className={`${manrope.className}text-[#111] text-left text-[20px] 2xl:text-[24px] font-bold`}
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
        <Link href="/productos/Scooter_Electrico_Minca_800W" className="block lg:flex flex-col justify-center text-center h-auto w-[200px] lg:w-[274px] 2xl:w-[450px]">
          <img
            className="h-[200px] lg:w-[274px] 2xl:w-[450px] lg:h-auto max-w-[450px]"
            src="/sigleProduct/minca-800-single-product.png"
            alt="scooter minca 800w"
          />
          <div className="flex w-full flex-col items-start justify-center">
            <h2
              className={`${manrope.className} text-left lg:mt-[16px] lg:text-[20px] 2xl:text-[28px] 2xl:leading-[45px]  font-bold text-[#111] mt-[10px] text-base`}
            >
              Scooter Eléctrico Minca 800W
            </h2>
            <p className={`${manrope.className} lg:text-base text-[#111] text-[14px] 2xl:text-[24px] font-medium`}>
            Up Hill Mode            </p>
            <div className="lg:mt-[20px] flex items-center justify-between gap-4">
              <p
                className={`${manrope.className}text-[#111] text-left text-[20px]  2xl:text-[24px]  font-bold`}
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
        <Link href="/productos/Scooter_Electrico_Minca_1600W" className="block lg:flex flex-col justify-center text-center h-auto w-[200px] lg:w-[274px] 2xl:w-[450px]">
          <img
            className="h-[200px] lg:w-[274px] 2xl:w-[450px] lg:h-auto max-w-[450px]"
            src="/sigleProduct/minca-1600-single-product.png"
            alt="scooter minca 1600w"
          />
          <div className="flex w-full flex-col items-start justify-center">
            <h2
              className={`${manrope.className} text-left lg:mt-[16px] lg:text-[20px] 2xl:text-[28px] 2xl:leading-[45px]  font-bold text-[#111] mt-[10px] text-base`}
            >
              Scooter Eléctrico Minca 1600W
            </h2>
            <p className={`${manrope.className} lg:text-base text-[#111] text-[14px] 2xl:text-[24px] font-medium`}>
            Two Wheel Drive
            </p>
            <div className="lg:mt-[20px] flex items-center justify-between gap-4">
              <p
                className={`${manrope.className}text-[#111] text-left text-[20px]  2xl:text-[24px]  font-bold`}
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
