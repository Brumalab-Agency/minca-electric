import { ubuntu } from "@/ui/fonts";
import { format } from "date-fns";

export const CardBlog = ({data, clasesImg, clasesContenedor, clasesIcon, clasesContenedorFlex, title, date, imgCenter}) => {

  console.log(data);

  const parsedDate = new Date(data.dateGmt);
  const formattedDate = format(parsedDate, "dd 'de' MMMM 'de' yyyy");
  return (
    <div className={`CardBlog h-auto p-4 border border-1 rounded-[12px] mt-4 mb-[50px] lg:mb-[10px] lg:mt-0 ${clasesContenedor}`} key={data.databaseId}>
      {/* <div className={`${ubuntu.className} badge bg-[#f4f4f4] rounded-[6px] h-[28px] text-[#111] text-[14px] grid place-items-center lg:w-[110px]`}>{data.categories.edges[0].node.name}</div> */}
      <div className={`${ubuntu.className} titulo text-[24px] text-[#111] font-bold leading-[28px] mt-4`}>{data?.titulo}</div>
      <div className={`${imgCenter}`}>
        <img className={`w-full h-[236px] 2xl:h-[350px] rounded-[6px] mt-4 ${clasesImg}`} src={data?.featuredImage?.node.mediaItemUrl} alt={data?.featuredImage?.node.altText} />
      </div>
      <div className={`lg:flex  gap-4 my-4 ${clasesContenedorFlex}`}>
        <img
          className={`h-[40px] w-auto ${clasesIcon}`}
          src="/imagotipo-negro.png"
          alt="imagotipo"
        />
        <div>
          <p className={`${ubuntu.className} text-[12px] text-[#111] ${title}`}>
            {data?.title}
          </p>
          <small className={`${ubuntu.className} lg:text-[12px] text-[#97989F] ${date}`}>
            {formattedDate}
          </small>
        </div>
      </div>
    </div>
  );
};
