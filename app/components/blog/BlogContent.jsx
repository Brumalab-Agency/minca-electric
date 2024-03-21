import { ubuntu, manrope } from "@/ui/fonts";
import { Entradas } from "@/lib/graphQLRequest";

export const BlogContent = ({ contenido }) => {


  return (
    <div className="BlogContent mt-[220px] lg:mt-[32px]">
      <h2 className={`${manrope.className} text-[24px] font-bold text-[#111]`}>
        {contenido.entradas.subtitulo}
      </h2>
      <div
        dangerouslySetInnerHTML={{
          __html: contenido.content.replace(
            /\n\r?/g,
            '<div style="margin-bottom: 10px;"></div>',
          ),
        }}
      ></div>

      <div className="mb-[67px] mt-[32px] grid h-auto w-full place-items-center rounded-[12px] border-l-[#E8E8EA] bg-[#F6F6F7] p-[32px] shadow-md">
        <p
          className={` ${manrope.className}text-[#111] font-normal leading-[32px] text-[24]`}
        >
          “ Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy. ”
        </p>
      </div>
    </div>
  );
};
