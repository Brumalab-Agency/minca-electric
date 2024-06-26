import Link from "next/link";
import { ubuntu } from "../../ui/fonts";

export const BannerMenu = ({clases}) => {
  return (
    <div className={`divider-mega-menu bg-[#F4F5F0] lg:w-[50%] flex justify-start items-center flex-col lg:p-[40px] ${clases}`}>
            <p
              className={`${ubuntu.className}  lg:text-[18px] text-[16px] font-semibold leading-[80px] text-left w-full px-6`}
            >
              ¡Empieza a rodar hoy mismo!
            </p>
            <div className="mt-3 pr-4 w-full px-6">
              <Link href="/financiamiento" className="flex items-center gap-4">
                <img
                  className="w-[70px] h-auto bg-white p-[10px] rounded-[15px]"
                  src="/MenuPC/credit-card-alt-1-svgrepo-com.svg"
                  alt="icono addi"
                />
                <div>
                  <div className="font-semibold items-center gap-2">
                    <div className="flex item-center">
                      <p className="lg:text-[16px] text-[14px] font-bold text-[#111111] ">Financiamiento</p>
                      <div>
                        <svg
                          className="stroke-2"
                          xmlns="http://www.w3.org/2000/svg icon icon-tabler icon-tabler-arrow-narrow-right"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l14 0" />
                          <path d="M15 16l4 -4" />
                          <path d="M15 8l4 4" />
                        </svg>
                      </div>
                    </div>
                  <p className="lg:text-[16px] text-[14px] font-medium text-[#6F6C90]">Contacta a un asesor</p>
                </div>
                </div>
              </Link>
              <Link href="/servicios" className="flex items-center gap-4 mt-4">
                <img
                  className="w-[70px] h-auto bg-white p-[10px] rounded-[15px]"
                  src="/MenuPC/tool-02-svgrepo-com.svg"
                  alt="icono minca"
                />
                <div>
                  <div className="font-semibold flex items-center gap-2">
                  <div className="flex item-center">
                      <p className="lg:text-[16px] text-[14px] font-bold text-[#111111]">Postventa</p>
                      <div>
                        <svg
                          className="stroke-2"
                          xmlns="http://www.w3.org/2000/svg icon icon-tabler icon-tabler-arrow-narrow-right"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l14 0" />
                          <path d="M15 16l4 -4" />
                          <path d="M15 8l4 4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="lg:text-[16px] text-[14px] font-medium text-[#6F6C90]">Agenda tu cita</p>
                </div>
              </Link>
            </div>
          </div>
  )
}
