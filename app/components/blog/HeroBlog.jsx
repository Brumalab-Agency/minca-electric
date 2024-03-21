import { manrope, ubuntu } from "@/ui/fonts";

export const HeroBlog = () => {
  return (
    <div className="HeroBlog lg:min-h-[710px] mt-[45px] lg:px-[100px]">
        <div className="relative flex justify-center lg:justify-start">
            <div className="w-full h-[313px] bg-[url(/blog/bg-blog.jpg)] bg-top bg-cover lg:w-full lg:h-[603px]  m-auto lg:rounded-[12px]"></div>
            {/* *** */}
            <div className="card-blog w-[90%] h-[273px] bg-white rounded-[12px] p-[40px] absolute bottom-0 top-[60%] shadow-md lg:w-[598px] lg:h-[263px] lg:ml-[80px] lg:top-[75%]">
                <button className={` ${ubuntu.className} bg-[#111] rounded-[6px] w-[80px] h-[28px] text-white text-[12px] font-medium`}>Actualidad</button>
                <h2 className={`${manrope.className} font-bold text-[24px] text-[#111] leading-[30px] mt-4 mb-6`}>Peajes en Colombia: este será el aumento para el 2024</h2>
                <div className="flex items-center gap-4">
                    <img className="w-[30px] h-[33px]" src="/imagotipo-negro.png" alt="imagotipo" />
                    <p className={`${ubuntu.className} text-[12px] text-[#97989F]`}>Minca Electric</p>
                    <p className={`${ubuntu.className} text-[12px] text-[#97989F]`}>Enero 05, 2024</p>
                </div>
            </div>
        </div>
    </div>
  )
}
