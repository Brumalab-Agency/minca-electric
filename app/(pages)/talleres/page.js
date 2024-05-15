import { Header } from "@/components/home/Header";

import Image from "next/image";
import Link from "next/link";
import { ubuntu } from "@/ui/fonts";
import { Footer } from "@/components/home/Footer";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export const ShoowRooms = () => {
  return null;
  // return (
  //   <div className="Simply">
  //     <Header />
  //     <div className="text-center px-[100px] ">
  //       <h1 className="text-[62px] font-bold mt-[155px] text-left">Selecciona un lugar</h1>
  //       <p className="m-auto text-[20px] text-[#111] text-left">
  //       Encuentra el Mantenimiento Perfecto para Tu Scooter y Garantiza su Rendimiento. <br/>¡Programa tu Mantenimiento Ahora!
  //       </p>
  //     </div>
  //     <div className="grid grid-cols-1 lg:grid-cols-3 my-28 px-[100px]">
  //       <div className="self-start flex">
  //         <div className="flex flex-col justify-center items-center">
  //           <Image
  //             alt="scooter"
  //             className="rounded-[10px]"
  //             src="/talleres/Taller chicó - Minca Electric.jpg"
  //             width={300}
  //             height={300}
  //           />
  //           <h2 className="text-[28px] font-bold mt-4">Taller Chicó</h2>
  //           <Link
  //             href="/talleres/tallerChico"
  //             className={`${ubuntu.className} my-3 h-[52px] w-full  rounded-[62px] bg-[#111] text-[16px] text-white  lg:w-[210px] grid place-items-center`}
  //           >
  //             Agendar
  //           </Link>
  //         </div>
  //       </div>
  //       {/* ** */}
  //       <div className="flex flex-col justify-center items-center">
  //         <Image
  //           alt="scooter"
  //           className="rounded-[10px]"
  //           src="/talleres/Taller cedritos - Minca Electric.png"
  //           width={300}
  //           height={300}
  //         />
  //       <h2 className="text-[28px] font-bold mt-4">Taller Cedritos</h2>
  //         <Link
  //           href="talleres/tallerCedritos"
  //           className={`${ubuntu.className} my-3 h-[52px] w-full  rounded-[62px] bg-[#111] text-[16px] text-white  lg:w-[210px] block grid place-items-center`}
  //         >
  //           Agendar
  //         </Link>
  //       </div>
  //       {/* *** */}
  //       <div className="justify-end flex">
  //         <div className="flex flex-col justify-center items-center">
  //           <Image
  //             alt="scooter"
  //             className="rounded-[10px]"
  //             src="/talleres/Taller javeriana - Minca Electric.png"
  //             width={300}
  //             height={300}
  //           />
  //         <h2 className="text-[28px] font-bold mt-4">Taller Javeriana</h2>
  //           <Link
  //             href="/talleres/tallerJaveriana"
  //             className={`${ubuntu.className} my-3 h-[52px] w-full  rounded-[62px] bg-[#111] text-[16px] text-white  lg:w-[210px] block grid place-items-center`}
  //           >
  //             Agendar
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //     <Footer/>
  //     <Whatsapp/>
  //   </div>
  // );
};

export default ShoowRooms;
