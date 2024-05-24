import { Footer } from "@/components/home/Footer";
import { HeroContext } from "@/components/reusable/HeroContext";
import { manrope, ubuntu } from "@/ui/fonts";
import { BlogContent } from "@/components/blog/BlogContent";
import { SinglePost } from "@/lib/graphQLRequest";
import { format } from "date-fns";
import OtrosPost from "@/components/blog/OtrosPost";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export const metadata = {
  title: "Minca Electric | Tendencias",
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
};

const SIngleBlog = async ({ params }) => {
  const { id } = params;

   // Decode the URL-encoded string
   const decodedTitle = decodeURIComponent(id);
  
  const title = decodedTitle.replace(/_/g, ' ');

  const data = await SinglePost(title);

  const posts = data.posts.nodes;

  const parsedDate = new Date(posts[0].dateGmt);

  // Formatea la fecha en el formato deseado (por ejemplo, "13 de marzo de 2024, 15:51")
  const formattedDate = format(parsedDate, "dd 'de' MMMM 'de' yyyy");

  return (
    <>
      <HeroContext titulo="tendencias" />
      {posts.map((post) => (
        <div className="HeroBlog lg:mt-[45px] grid-cols-1 lg:grid  lg:w-full lg:px-[100px] 2xl:grid-cols-1">
          {/* <div className="h-[30px] lg:hidden block">
            <OtrosPost />
          </div> */}
          <div className="col-span-2 2xl:col-span-3">
            {/* PC */}
            <div className="card-blog hidden h-[273px] w-full rounded-[12px] bg-white lg:block  lg:h-[220px] lg:w-[598px]">
              <button
                className={` ${ubuntu.className} h-[32px] w-auto rounded-[6px] bg-[#111] px-4 text-[14px] font-medium text-white`}
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
                id="singleImageBlog"
                className={`relative flex h-[313px] w-full justify-center bg-cover lg:h-[500px] lg:w-full lg:justify-start lg:rounded-[12px] 2xl:h-[730px] object-cover" 
                }`}
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
          <div className="h-auto">
            {/* <OtrosPost /> */}
          </div>
        </div>
      ))}
      <Footer />
      <Whatsapp/>
    </>
  );
};

export default SIngleBlog;
