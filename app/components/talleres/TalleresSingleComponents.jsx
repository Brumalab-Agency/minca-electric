import { ubuntu } from "@/ui/fonts";
import Image from "next/image";
import Link from "next/link";

const TalleresSingleComponents = () => {
  return (
    <div className="hidden lg:block">
      <div className="px-[100px] text-center ">
        <h1 className="mt-[55px] text-left text-[62px] font-bold">
          Talleres
        </h1>
        <p className="m-auto text-left text-[20px] 2xl:text-[28px] text-[#111]">
          Encuentra el Mantenimiento Perfecto para Tu Scooter y Garantiza su
          Rendimiento. <br />
          ¡Programa tu Mantenimiento Ahora!
        </p>
      </div>
      <div className="my-28 hidden grid-cols-1 px-[100px] lg:grid lg:grid-cols-3">
        <div className="flex self-start">
          <div className="flex flex-col items-center justify-center">
            <Image
              alt="scooter"
              className="h-auto rounded-[10px] lg:w-[360px] 2xl:w-[600px]"
              src="/talleres2/TallerChico.jpg"
              width={300}
              height={300}
            />
            <h2 className="mt-4 text-[28px] font-bold">Taller Chicó</h2>
            <Link
              href="/talleres/tallerChico"
              className={`${ubuntu.className} my-3 grid h-[52px]  w-full place-items-center rounded-[62px] bg-[#111]  text-[16px] text-white lg:w-[210px]`}
            >
              Agendar
            </Link>
          </div>
        </div>
        {/* ** */}
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="scooter"
            className="h-auto rounded-[10px] lg:w-[360px] 2xl:w-[600px]"
            src="/talleres/TallerCedritos.png"
            width={300}
            height={300}
          />
          <h2 className="mt-4 text-[28px] font-bold">Taller Cedritos</h2>
          <Link
            href="#"
            className={`${ubuntu.className} my-3 block grid  h-[52px] w-full place-items-center rounded-[62px]  bg-[#111] text-[16px] text-white lg:w-[210px]`}
          >
            Próximamente!
          </Link>
        </div>
        {/* *** */}
        <div className="flex justify-end">
          <div className="flex flex-col items-center justify-center">
            <Image
              alt="scooter"
              className="h-auto rounded-[10px] lg:w-[360px] 2xl:w-[600px]"
              src="/talleres2/TallerJaveriana.jpg"
              width={300}
              height={300}
            />
            <h2 className="mt-4 text-[28px] font-bold">Taller Javeriana</h2>
            <Link
              href="/talleres/tallerJaveriana"
              className={`${ubuntu.className} my-3 block lg:grid  h-[52px] w-full place-items-center rounded-[62px]  bg-[#111] text-[16px] text-white lg:w-[210px]`}
            >
              Agendar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalleresSingleComponents;
