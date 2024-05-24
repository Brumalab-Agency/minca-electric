import { ubuntu } from "@/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import { TalleresComponent } from "../showroom/TalleresComponent";

const TalleresSingleComponents = () => {
  return (
    <div className="hidden lg:block">
      <div className="px-[100px] text-center ">
        <h1 className="mt-[55px] text-left text-[62px] font-bold">Talleres</h1>
        <p className="m-auto text-left text-[20px] text-[#111] 2xl:text-[28px]">
          Encuentra el Mantenimiento Perfecto para Tu Scooter y Garantiza su
          Rendimiento. <br />
          ¡Programa tu Mantenimiento Ahora!
        </p>
      </div>
      <TalleresComponent/>
      {/* <div className="hidden grid-cols-1 px-[100px] lg:my-10 lg:grid lg:grid-cols-3 2xl:my-28">
        <div className="flex self-start">
          <div className="flex flex-col items-center justify-center">
            <Image
              alt="scooter"
              className="h-auto rounded-[10px] lg:w-[360px] 2xl:w-[500px]"
              src="/talleres/taller-chico.jpg"
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
        
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="scooter"
            className="h-auto rounded-[10px] lg:w-[360px] 2xl:w-[500px]"
            src="/talleres/taller-javeriana.jpg"
            width={300}
            height={300}
          />
          <h2 className="mt-4 text-[28px] font-bold">Taller Javeriana</h2>
          <Link
            href="/talleres/tallerJaveriana"
            className={`${ubuntu.className} my-3  grid  h-[52px] w-full place-items-center rounded-[62px]  bg-[#111] text-[16px] text-white lg:w-[210px]`}
          >
            Agendar
          </Link>
        </div>
        
        <div className="flex justify-end">
          <div className="flex flex-col items-center justify-center">
            <Image
              alt="scooter"
              className="h-auto rounded-[10px] lg:w-[360px] 2xl:w-[500px]"
              src="/talleres/taller-cedritos.jpg"
              width={300}
              height={300}
            />
            <h2 className="mt-4 text-[28px] font-bold">Taller Cedritos</h2>
            <Link
              href="/talleres/tallerCedritos"
              className={`${ubuntu.className} my-3 block h-[52px]  w-full place-items-center rounded-[62px] bg-[#111]  text-[16px] text-white lg:grid lg:w-[210px]`}
            >
              Agendar
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TalleresSingleComponents;
