import { ubuntu } from "@/ui/fonts";
import { format } from "date-fns";

export const CardBlog = ({data, clasesImg, clasesContenedor, clasesIcon, clasesContenedorFlex, title, date, imgCenter}) => {
  const parsedDate = new Date(data.dateGmt);
  const formattedDate = format(parsedDate, "dd 'de' MMMM 'de' yyyy");
  return (
    <div className={`CardBlog h-auto p-4 border border-1 rounded-[12px] mt-4 mb-[50px] lg:mb-[10px] lg:mt-0 ${clasesContenedor}`} key={data.id}>
      <div className={`${ubuntu.className} badge bg-[#f4f4f4] rounded-[6px] h-[28px] text-[#111] text-[14px] grid place-items-center lg:w-[110px]`}>{data.categories.edges[0].node.name}</div>
      <div className={`${ubuntu.className} titulo text-[24px] text-[#111] font-bold leading-[28px] mt-4`}>{data.titulo}</div>
      <div className={`${imgCenter}`}>
        <img className={`w-full h-[236px] rounded-[6px] mt-4 ${clasesImg}`} src={data.featuredImage.node.mediaItemUrl} alt={data.featuredImage.node.altText} />
      </div>
      <div className={`lg:flex items-center gap-4 my-4 ${clasesContenedorFlex}`}>
        <img
          className={`h-[33px] w-[30px] ${clasesIcon}`}
          src="/imagotipo-negro.png"
          alt="imagotipo"
        />
        <p className={`${ubuntu.className} text-[16px] text-[#97989F] ${title}`}>
          {data.title}
        </p>
        <p className={`${ubuntu.className} lg:text-[16px] text-[#97989F] ${date}`}>
          {formattedDate}
        </p>
      </div>
    </div>
  );
};
