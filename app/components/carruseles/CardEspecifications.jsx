import { manrope, ubuntu } from "../../ui/fonts";

export const CardEspecifications = ({ titulo, subtitulo, tipo }) => {
  return (
    <div className="cards rounded-[6px] bg-[#F0EEED]  w-[72px] h-[65px] py-[10px] flex flex-col justify-between items-center 2xl:w-[220px] 2xl:h-[150px] lg:w-[130px] lg:h-[116px]  lg:justify-evenly flex-none">
      <p
        className={`${manrope.className}  font-bold text-[12px] text-center lg:text-[25px] 2xl:text-[35px]`}
      >
        {titulo}
      </p>
      <p
        className={`${manrope.className}  font-bold text-[10px] text-center lg:text-[16px] 2xl:text-[22px]`}
      >
        {subtitulo}
      </p>
      <p
        className={`${ubuntu.className}  font-normal text-[7px] text-center lg:text-[12px] 2xl:text-[18px]`}
      >
        {tipo}
      </p>
    </div>
  );
};
