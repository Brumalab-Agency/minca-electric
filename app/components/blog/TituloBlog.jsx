import { manrope, ubuntu } from "@/ui/fonts";
import { CardBlog } from "./CardBlog";
import Link from "next/link";
import { Entradas } from "@/lib/graphQLRequest";

export const TituloBlog = async() => {
    const entradas = await Entradas();
    console.log(entradas);
    const posts = entradas.posts.nodes;

  return (
    <div className='TituloBlog mt-[220px] px-1 lg:px-[70px] lg:mt-[80px]'>
        <h2 className={`${manrope.className} font-semibold text-[24px] text-[#111] mb-[57px] px-4 lg:mb-[32px]`}>Últimas publicaciones</h2>
        <div className="lg:grid grid-cols-3 gap-6">
            {
                posts.map((post)=>(
                    <Link href={`/blog/${post.postId}`}>
                            <CardBlog data={post}/>
                        </Link>
                ))
            }
        </div>
        <div className="text-center my-[58px] lg:mt-[32px] lg:mb-[120px]">
            <button className={` ${ubuntu.className} w-[240px] h-[48px] border border-1 border-[#696A75] bg-opacity-30 rounded-[6px] text-[#696A75] text-base font-medium`}>Ver todas las publicaciones</button>
        </div>
    </div>
  )
}
