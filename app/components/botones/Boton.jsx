import { ubuntu } from "@/ui/fonts";
import Link from "next/link";

export const Boton = ({param, slug}) => {

  return (
    <div className="btn-scooter pt-4 lg:flex lg:justify-end lg:absolute lg:right-[100px] 2xl:top-[59%] z-10 ">
          <button
            type="button"
            className={`${ubuntu.className}  text-white bg-[#111]  text-[16px] w-full h-[52px] rounded-[32px] my-3 lg:px-[40px] lg_py-[8px] lg:w-[191px] 2xl:w-[235px] 2xl:h-[48px]`}
          >
            <Link href={`/especificaciones/${slug}`} className="lg:text-base 2xl:text-[20px]">{param}</Link>
          </button>
        </div>
  )
}
