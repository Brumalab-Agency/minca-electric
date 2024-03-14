import { manrope, ubuntu } from "../../ui/fonts";

export const CardEspecificationsSec = ({ titulo, subtitulo, tipo }) => {
  return (
    <div className="cards rounded-[6px] bg-[#ffffff] custom-shadow-movil lg:custom-shadow w-[72px] h-[65px] py-[10px] flex flex-col justify-between items-center lg:w-[148px] lg:h-[116px] lg:py-[35px] lg:justify-evenly flex-none">
      <p
        className={`${manrope.className} antialiased font-bold text-[12px] text-center lg:text-[25px]`}
      >
        {titulo}
      </p>
      <p
        className={`${manrope.className} antialiased font-bold text-[10px] text-center lg:text-[16px]`}
      >
        {subtitulo}
      </p>
      <p
        className={`${ubuntu.className} antialiased font-normal text-[7px] text-center lg:text-[12px]`}
      >
        {tipo}
      </p>
    </div>
  );
};
