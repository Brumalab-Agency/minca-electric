import { manrope, ubuntu } from "@/ui/fonts";

export const IconosContacto = () => {
  return (
    <div className="IconosContacto mb-[100px] mt-[50px] flex h-[275px] w-full flex-col justify-between">
      <div className="flex h-auto items-center justify-between px-4 lg:mx-[100px] ">
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row w-1/3">
          <img
            className="h-auto w-[83px]"
            src="/contacto/IconTaller.jpg"
            alt="icono taller"
          />
          <div className="mb-4 text-center lg:text-left">
            <p
              className={`${manrope.className} text-[15px] font-bold leading-[20px] text-[#111] lg:text-[20px]`}
            >
              Taller Chicó <span className="text-white hidden lg:inline-block">ooooooo</span>
            </p>
            <p className={`${ubuntu.className} text-[12px] text-[#111]`}>
              Calle 95 #13-55
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row w-1/3">
          <img
            className="h-auto w-[83px]"
            src="/contacto/IconTaller.jpg"
            alt="icono taller"
          />
          <div className="mb-4 text-center lg:text-left">
            <p
              className={`${manrope.className} text-[15px] font-bold leading-[20px] text-[#111] lg:text-[20px]`}
            >
              Taller Cedritos <span className="text-white hidden lg:inline-block">o</span>
            </p>
            <p className={`${ubuntu.className} text-[12px] text-[#111]`}>
              Próximamente!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row w-1/3">
          <img
            className="h-auto w-[83px]"
            src="/contacto/IconTaller.jpg"
            alt="icono taller"
          />
          <div className="mb-4 text-center lg:text-left">
            <p
              className={`${manrope.className} text-[15px] font-bold leading-[20px] text-[#111] lg:text-[20px]`}
            >
              Taller Javeriana <span className="text-white hidden lg:inline-block">oooo</span>
            </p>
            <p className={`${ubuntu.className} text-[12px] text-[#111]`}>
              Cra. 7 #45-10
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-auto items-center justify-between px-4 lg:mx-[100px]">
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row w-1/3">
          <img
            className="h-auto w-[83px]"
            src="/contacto/IconShowroom.jpg"
            alt="icono taller"
          />
          <div className="mb-4 text-center lg:text-left">
            <p
              className={`${manrope.className} text-[15px] font-bold leading-[20px] text-[#111] lg:text-[20px]`}
            >
              Showroom Javeriana
            </p>
            <p className={`${ubuntu.className} text-[12px] text-[#111]`}>
              Cra. 7 #45-10
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row w-1/3">
          <img
            className="h-auto w-[83px]"
            src="/contacto/IconShowroom.jpg"
            alt="icono taller"
          />
          <div className="mb-4 text-center lg:text-left">
            <p
              className={`${manrope.className} text-[15px] font-bold leading-[20px] text-[#111] lg:text-[20px]`}
            >
              Showroom <br className="lg:hidden"/>Chicó
            </p>
            <p className={`${ubuntu.className} text-[12px] text-[#111]`}>
            Cra. 11a #94a-56
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row w-1/3">
          <img
            className="h-auto w-[83px]"
            src="/contacto/IconShowroom.jpg"
            alt="icono taller"
          />
          <div className="mb-4 text-center lg:text-left">
            <p
              className={`${manrope.className} text-[15px] font-bold leading-[20px] text-[#111] lg:text-[20px]`}
            >
              Showroom Cedritos
            </p>
            <p className={`${ubuntu.className} text-[12px] text-[#111]`}>
            Av. Cra. 19#143A-08
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
