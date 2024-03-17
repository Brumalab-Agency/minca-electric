import { Header } from "@/components/home/Header";

import Image from "next/image";
import Link from "next/link";
import { ubuntu } from "@/ui/fonts";

export const ShoowRooms = () => {
  return (
    <div className="px-4">
      <Header />
      <div className="text-center">
        <h1 className="text-[62px] font-bold ">Selecciona un lugar</h1>
        <p className="m-auto max-w-[600px]">
          "Encuentra el Mantenimiento Perfecto para Tu Scooter y Garantiza su
          Rendimiento. ¡Programa tu Mantenimiento Ahora!"
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-28">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[28px] font-bold">Taller Chico</h2>
          <Image
            alt="scooter"
            className=""
            src="/sigleProduct/scooter-single-product3.png"
            width={300}
            height={300}
          />
          <Link
            href="/showrooms/tallerChico"
            className={`${ubuntu.className} my-3 h-[52px] w-full  rounded-[62px] bg-[#111] text-[16px] text-white antialiased lg:w-[210px] grid place-items-center`}
          >
            Agendar
          </Link>
        </div>
        {/* ** */}
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-[28px] font-bold">Taller Cedritos</h2>
          <Image
            alt="scooter"
            className=""
            src="/sigleProduct/scooter-single-product3.png"
            width={300}
            height={300}
          />
          <Link
            href="#"
            className={`${ubuntu.className} my-3 h-[52px] w-full  rounded-[62px] bg-[#111] text-[16px] text-white antialiased lg:w-[210px] block grid place-items-center`}
          >
            Próximamente!
          </Link>
        </div>
        {/* *** */}
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-[28px] font-bold">Taller Javeriana</h2>
          <Image
            alt="scooter"
            className=""
            src="/sigleProduct/scooter-single-product3.png"
            width={300}
            height={300}
          />
          <Link
            href="/showrooms/tallerJaveriana"
            className={`${ubuntu.className} my-3 h-[52px] w-full  rounded-[62px] bg-[#111] text-[16px] text-white antialiased lg:w-[210px] block grid place-items-center`}
          >
            Agendar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoowRooms;
