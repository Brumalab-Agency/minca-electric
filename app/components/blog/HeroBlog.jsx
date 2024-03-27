import { manrope, ubuntu } from "@/ui/fonts";
import { Entradas } from "@/lib/graphQLRequest";
import { format } from "date-fns";

export const HeroBlog = async () => {
  const entrada = await Entradas();

  const parsedDate = new Date(entrada.posts.nodes[0].dateGmt);

  const formattedDate = format(parsedDate, "dd 'de' MMMM 'de' yyyy");

  return (
    <div className="HeroBlog mt-[45px] lg:min-h-[710px] lg:px-[100px]">
      <div className="relative flex justify-center lg:justify-start">
        <div className="m-auto h-[313px] w-full bg-[url(/blog/bg-blog.jpg)] bg-cover bg-top lg:h-[603px]  lg:w-full lg:rounded-[12px]"></div>
        {/* *** */}
        <div className="card-blog absolute bottom-0 top-[60%] h-[273px] w-[90%] rounded-[12px] bg-white p-[40px] shadow-md lg:top-[75%] lg:ml-[80px] lg:h-[263px] lg:w-[598px]">
          <button
            className={` ${ubuntu.className} h-[28px] w-[80px] rounded-[6px] bg-[#111] text-[12px] font-medium text-white`}
          >
            {entrada.posts?.nodes[0]?.categories?.nodes[0]?.name}
          </button>
          <h2
            className={`${manrope.className} mb-6 mt-4 text-[24px] font-bold leading-[30px] text-[#111]`}
          >
            {entrada.posts.nodes[0].title}
          </h2>
          <div className="flex items-center gap-4">
            <img
              className="h-[33px] w-[30px]"
              src="/imagotipo-negro.png"
              alt="imagotipo"
            />
            <p className={`${ubuntu.className} text-[12px] text-[#97989F]`}>
              Minca Electric
            </p>
            <p className={`${ubuntu.className} text-[12px] text-[#97989F]`}>
              {formattedDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
