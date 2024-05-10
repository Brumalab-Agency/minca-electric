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
          width={390 / 2}
          height={400 / 2}
          href="https://www.mincaelectric.com"
        />
      </Link>
      <div className="grid h-screen w-full place-items-center ">
        <div className=" text-center">
          <h1 className="text-[64px] font-bold">Página no encontrada</h1>
          <Link
            className="rounded-[62px] bg-[#111] px-[30px] py-[16px] text-white"
            href="https://www.mincaelectric.com"
          >
            Volver a minca electric 
          </Link>
        </div>
      </div>
    </div>
  );
}
 export default notFound