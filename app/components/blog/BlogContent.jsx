import { ubuntu, manrope } from "@/ui/fonts";
import { Entradas } from "@/lib/graphQLRequest";

export const BlogContent = ({ contenido }) => {
  return (
    <div className="BlogContent mt-[220px] pb-24 lg:mt-[32px]">
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
