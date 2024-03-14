import { ubuntu } from "@/ui/fonts";
import Link from "next/link";

export const Boton = ({param}) => {
  return (
    <div className="btn-scooter lg:flex lg:justify-end lg:absolute lg:right-[60px] lg:top-[60%] z-10 ">
          <button
            type="button"
            className={`${ubuntu.className} antialiased text-white bg-[#111]  text-[16px] w-full h-[52px] rounded-[62px] my-3 lg:w-[210px]`}
          >
            <Link href="/especificaciones">{param}</Link>
          </button>
        </div>
  )
}
