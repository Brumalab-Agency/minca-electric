import { HoverEffectInfo } from "./HoverEffectInfo";
import { HoverEffectInfoShowrooms } from "./HoverEffectInfoShowrooms";

export function CardHoverEffectShowrooms() {
  return (
    <div className="h-auto w-full bg-[#fff]">
      <div className="mx-auto max-w-[1270px] bg-[#fff] px-8 ">
        <HoverEffectInfoShowrooms items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    img: "/showrooms/showroom minca av chile.png",
    link: "/testdrive/showroomavenidachile",
  },
  {
    title:
      "¡Siente la emoción en dos ruedas! Prueba gratis nuestros scooters en un test drive exclusivo.",
    img2: "/showrooms/1.png",
    link: "#",
  },

  {
    img: "/showrooms/showroom minca gran estacion.png",
    link: "/testdrive",
  },

  {
    img: "/showrooms/showroom minca chico.png",
    link: "/testdrive/showroomchico",
  },
  {
    img: "/showrooms/showroom minca cedritos.png",
    link: "/testdrive/showroomcedritos",
  },
  {
    img: "/showrooms/showroom minca javeriana.png",
    link: "/testdrive/showroomjaveriana",
  },
];

