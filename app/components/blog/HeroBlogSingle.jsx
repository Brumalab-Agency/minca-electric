import { manrope, ubuntu } from "@/ui/fonts";
import { BlogContent } from "./BlogContent";
import { SkeletonBlog } from "./SkeletonBlog";
import { Entradas } from "@/lib/graphQLRequest";
import { API } from "@/lib/graphQLRequest";

export const HeroBlogSingle = async({ params }) => {


  return (
    <div className="HeroBlog mt-[45px] grid-cols-3 lg:ml-[48px] lg:grid lg:min-h-[710px]">
      <div className="col-span-2">
        {/* PC */}
        <div className="card-blog hidden h-[273px] w-full rounded-[12px] bg-white lg:block  lg:h-[220px] lg:w-[598px]">
          <button
            className={` ${ubuntu.className} h-[32px] w-[95px] rounded-[6px] bg-[#111] text-[14px] font-medium text-white`}
          >
            Actualidad
          </button>
          <h2
            className={`${manrope.className} mb-6 mt-4 text-[24px] font-bold leading-[38px] text-[#111]`}
          >
            Peajes en Colombia: este será el aumento para el 2024
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
              Enero 05, 2024
            </p>
          </div>
        </div>
        {/* *** */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="h-[313px] w-full bg-[url(/blog/bg-blog.jpg)] bg-cover bg-top lg:h-[603px] lg:w-full lg:rounded-[12px]">
            {/*  Imagen background */}
          </div>
          {/* Movil */}
          <div className="card-blog absolute bottom-0 top-[60%] h-[273px] w-[90%] rounded-[12px] bg-white p-[40px] shadow-md lg:top-[75%] lg:ml-[192px] lg:hidden lg:h-[263px] lg:w-[598px]">
            <button
              className={` ${ubuntu.className} h-[28px] w-[80px] rounded-[6px] bg-[#111] text-[12px] font-medium text-white`}
            >
              Actualidad
            </button>
            <h2
              className={`${manrope.className} mb-6 mt-4 text-[24px] font-bold leading-[30px] text-[#111]`}
            >
              Peajes en Colombia: este será el aumento para el 2024
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
                Enero 05, 2024
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-0">
          <BlogContent />
        </div>
      </div>
      {/*  Skeleton */}
      <div className="h-30px hidden bg-white pt-[220px] lg:block">
        <SkeletonBlog />
        <SkeletonBlog />
        <SkeletonBlog />
        <SkeletonBlog />
      </div>
    </div>
  );
};

export default HeroBlogSingle;
