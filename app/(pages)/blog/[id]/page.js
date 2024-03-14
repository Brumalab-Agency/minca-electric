import { Footer } from "@/components/home/Footer";
import { HeroBlogSingle } from "@/components/blog/HeroBlogSingle";
import { HeroContext } from "@/components/reusable/HeroContext";
import { Entradas } from "@/lib/graphQLRequest";
import { manrope, ubuntu } from "@/ui/fonts";
import { BlogContent } from "@/components/blog/BlogContent";
import { SkeletonBlog } from "@/components/blog/SkeletonBlog";
import { SinglePost } from "@/lib/graphQLRequest";
import { format } from "date-fns";

const SIngleBlog = async ({ params }) => {
  const { id } = params;
  const data = await SinglePost(id);
  console.log(data.posts.nodes[0].postId);
  console.log(id);

  const posts = data.posts.nodes;
  console.log(posts[0].dateGmt);

  const parsedDate = new Date(posts[0].dateGmt);
  console.log(parsedDate);

  // Formatea la fecha en el formato deseado (por ejemplo, "13 de marzo de 2024, 15:51")
  const formattedDate = format(parsedDate, "dd 'de' MMMM 'de' yyyy");
  console.log(formattedDate);
  return (
    <>
      <HeroContext titulo="Blog" />
      {posts.map((post) => (
        <div className="HeroBlog mt-[45px] grid-cols-3 lg:ml-[48px] lg:grid lg:min-h-[710px]">
          <div className="col-span-2">
            {/* PC */}
            <div className="card-blog hidden h-[273px] w-full rounded-[12px] bg-white lg:block  lg:h-[220px] lg:w-[598px]">
              <button
                className={` ${ubuntu.className} h-[32px] w-[95px] rounded-[6px] bg-[#111] text-[14px] font-medium text-white`}
              >
                {post.categories.edges[0].node.name}
              </button>
              <h2
                className={`${manrope.className} mb-6 mt-4 text-[24px] font-bold leading-[38px] text-[#111]`}
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
            </div>
            {/* *** */}
            <div className="relative flex justify-center lg:justify-start">
              <div
                className={`relative flex h-[313px] w-full justify-center bg-cover bg-top lg:h-[603px] lg:w-full lg:justify-start lg:rounded-[12px]`}
                style={{
                  backgroundImage: `url(${post.featuredImage.node.mediaItemUrl})`,
                }}
              >
                {/*  Imagen background */}
              </div>

              {/* Movil */}
              <div className="card-blog absolute bottom-0 top-[60%] h-[273px] w-[90%] rounded-[12px] bg-white p-[40px] shadow-md lg:top-[75%] lg:ml-[192px] lg:hidden lg:h-[263px] lg:w-[598px]">
                <button
                  className={` ${ubuntu.className} h-[28px] w-[80px] rounded-[6px] bg-[#111] text-[12px] font-medium text-white`}
                >
                  {post.categories.edges[0].node.name}
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
                  <p
                    className={`${ubuntu.className} text-[12px] text-[#97989F]`}
                  >
                    Minca Electric
                  </p>
                  <p
                    className={`${ubuntu.className} text-[12px] text-[#97989F]`}
                  >
                    {formattedDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-4 lg:px-0">
              <BlogContent contenido={post} />
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
      ))}
      <Footer />
    </>
  );
};

export default SIngleBlog;
