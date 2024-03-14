import { ubuntu, manrope } from "@/ui/fonts";
import { Entradas } from "@/lib/graphQLRequest"

export const BlogContent = ({contenido}) => {

  return (
    <div className='BlogContent mt-[220px] lg:mt-[32px]'>
        <h2 className={`${manrope.className} text-[24px] text-[#111] font-bold`}>{contenido.entradas.subtitulo}</h2>
        <p className={`${ubuntu.className} text-[20px] mt-4 text-balance`}>{contenido.entradas.campoTexto}</p>
        <div className="w-full h-auto rounded-[12px] bg-[#F6F6F7] shadow-md grid place-items-center p-[32px] mt-[32px] mb-[67px] border-l-[#E8E8EA]">
            <p className={` ${manrope.className}text-[#111] text-[24] font-normal leading-[32px]`}>“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</p>
        </div>
    </div>
  )
}
