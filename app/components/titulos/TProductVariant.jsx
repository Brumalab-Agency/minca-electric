import { manrope } from "@/ui/fonts";

export const TProductVariant = ({titulo, subtitulo, transform, flexion,}) => {
  return (
    <div className={`${manrope.className} gap-2 ${transform} ${flexion}`}>
      <p className="text-[32px] lg:text-[48px] 2xl:text-[64px]">{titulo}</p>
      <p className="text-[32px] lg:text-[48px] 2xl:text-[64px] lg:capitalize"><b>{subtitulo}</b></p>
    </div>
  )
}
