import { manrope, ubuntu } from "@/ui/fonts";
import { Entradas } from "@/lib/graphQLRequest";
import { format } from "date-fns";
import Link from "next/link";

export const HeroBlog = async () => {
  const entrada = await Entradas();

  if (
    !entrada ||
    !entrada.posts ||
    !entrada.posts.nodes ||
    entrada.posts.nodes.length === 0
  ) {
    return null; // O muestra algún mensaje de error
  }

  const post = entrada.posts.nodes[0];

  const parsedDate = new Date(post.dateGmt);
  const formattedDate = format(parsedDate, "dd 'de' MMMM 'de' yyyy");
  const singleImg = post.featuredImage?.node?.mediaItemUrl;

  return (
    <div className="HeroBlog mt-[45px] lg:min-h-[710px] lg:px-[100px]">
      <div className="relative flex justify-center lg:justify-start">
        <div
          className={`m-auto h-[313px] w-full bg-top lg:h-[603px] lg:w-full lg:rounded-[12px]`}
        >
          <img
            className={`m-auto h-[313px] w-full bg-top object-cover  lg:h-[603px] lg:w-full lg:rounded-[12px]`}
            src={singleImg}
            alt=""
          />
        </div>

        <div className="card-blog absolute bottom-0 top-[60%] h-[273px] w-[90%] rounded-[12px] bg-white p-[40px] shadow-md lg:top-[75%] lg:ml-[80px] lg:h-[263px] lg:w-[598px]">
          <Link href={`/tendencias/${encodeURIComponent(post.title.replace(/ /g, "_"))}`}>
            <button
              className={` ${ubuntu.className} h-[28px] w-[80px] rounded-[6px] bg-[#111] text-[12px] font-medium text-white`}
            >
              {post.categories?.nodes[0]?.name}
            </button>
            <h2
              className={`${manrope.className} mb-6 mt-4 text-[24px] font-bold leading-[30px] text-[#111]`}
            >
              {post.title}
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
          </Link>
        </div>
      </div>
    </div>
  );
};
