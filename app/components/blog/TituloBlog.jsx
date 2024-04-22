import { manrope, ubuntu } from "@/ui/fonts";
import { CardBlog } from "./CardBlog";
import Link from "next/link";
import { Entradas } from "@/lib/graphQLRequest";

export const TituloBlog = async () => {
  const entradas = await Entradas();

  const posts = entradas.posts.nodes;

  return (
    <div className="TituloBlog mt-[220px] px-4 lg:mt-[80px] lg:px-[100px]">
      <h2
        className={`${manrope.className} mb-[57px] px-4 text-[24px] font-semibold text-[#111] lg:mb-[32px]`}
      >
        Últimas publicaciones
      </h2>
      <div className="grid-cols-3 gap-6 lg:grid">
        {posts.map((post) => (
          <Link href={`/tendencias/${post.databaseId}`}>
            <CardBlog data={post} />
          </Link>
        ))}
      </div>
      <div className="my-[58px] text-center lg:mb-[120px] lg:mt-[32px]">
        <Link
        href="#"
          className={` ${ubuntu.className} border-1 h-[48px] w-[240px] rounded-[6px] border border-[#696A75] bg-opacity-30 text-base font-medium text-[#696A75] px-6 py-3`}
        >
          Ver todas las publicaciones
        </Link>
      </div>
    </div>
  );
};
