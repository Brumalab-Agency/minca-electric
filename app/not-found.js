import Image from "next/image";
import Link from "next/link";
import { Footer } from "./components/home/Footer";
import Whatsapp from "./components/whatsapp/Whatsapp";
import { Header } from "./components/home/Header";

export const notFound = () => {
  return (
    <>
      <Header />
      <div className="my-10 px-[100px] ">
        <div className="grid h-screen w-full place-items-center ">
          <div className=" text-center">
            <h1 className="mb-10 text-[64px] font-bold">
              Página no encontrada
            </h1>
            <Link
              Link
              href="/"
              className="rounded-[62px] bg-[#111] px-[30px] py-[16px] text-white"
            >
              Volver a Minca Electric
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <Whatsapp />
    </>
  );
};
export default notFound;
