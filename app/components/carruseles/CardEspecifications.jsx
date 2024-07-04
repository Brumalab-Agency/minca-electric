import { manrope, ubuntu } from "../../ui/fonts";

export const CardEspecifications = ({ titulo, subtitulo, tipo }) => {
  return (
    <div className="cards flex h-[65px]  w-[72px] flex-none flex-col items-center justify-between rounded-[6px] bg-[#F0EEED] py-[10px] lg:h-[116px] lg:w-[130px] lg:justify-evenly  2xl:h-[150px] 2xl:w-[200px]">
      <p
        className={`${manrope.className}  text-center text-[12px] font-bold lg:text-[25px] 2xl:text-[35px]`}
      >
        {titulo}
      </p>
      <p
        className={`${manrope.className}  text-center text-[10px] font-bold lg:text-[16px] 2xl:text-[22px]`}
      >
        {subtitulo}
      </p>
      <p
        className={`${ubuntu.className}  text-center text-[7px] font-normal lg:text-[12px] 2xl:text-[18px]`}
      >
        {tipo}
      </p>
    </div>
  );
};
