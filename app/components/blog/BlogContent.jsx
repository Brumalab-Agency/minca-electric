import { ubuntu, manrope } from "@/ui/fonts";
import { Entradas } from "@/lib/graphQLRequest";

export const BlogContent = ({ contenido }) => {


  return (
    <div className="BlogContent mt-[220px] lg:mt-[32px] pb-24">
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
    </div>
  );
};
