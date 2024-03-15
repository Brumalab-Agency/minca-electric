import Image from "next/image";
import Link from "next/link";

export const notFound = () => {
  return (
    <div className="my-10 px-[100px] ">
        <Link href="/">
          <Image
                  placeholder="empty"
                  alt="logo minca"
                  className="Image log MINCA"
                  src="/logo.png"
                  width={390/2}
                  height={400/2}
                />
        </Link>
        <div className="h-screen w-full grid place-items-center ">
          <div className=" text-center">
            <h1 className="text-[64px] font-bold">Página no encontrada</h1>
            <Link className="bg-[#111] text-white px-[30px] py-[16px] rounded-[62px]" href="/">Volver a MINCA</Link>
          </div>
        </div>
      </div>
    
  )
}
 export default notFound