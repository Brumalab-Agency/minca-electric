import { HoverEffectInfo } from "./HoverEffectInfo";
import { HoverEffectInfoShowrooms } from "./HoverEffectInfoShowrooms";

export function CardHoverEffectShowrooms() {
  return (
    <div className="h-auto w-full bg-[#111]">
      <div className="mx-auto max-w-[1270px] bg-[#111] px-8 ">
        <HoverEffectInfoShowrooms items={projects}/>
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "Siente la revolución de la movilidad eléctrica.",
    description:
      "Adéntrate en un mundo de energía renovable y movilidad sostenible en nuestros showrooms Minca.",
    img2: "/showrooms/1.png",
    link: "#",
  },
  {
    title:
      "Descubre la libertad de desplazarte con nuestras scooters eléctricas",
    description:
      "Encuentra accesorios que protegen tu viaje y adquiere herramientas para cuidar tu scooter en casa.",
    description2:
      "Su pasión por la innovación y la sostenibilidad garantiza que cada visita sea informativa, emocionante y llena de posibilidades para tu movilidad eléctrica.",
    link: "#",
  },
  {
    title: "Prueba tu libertad: programa tu test drive:",
    description:
      "Queremos que sientas la libertad de probar una Minca y descubrir los beneficios de la movilidad eléctrica.",
    description2: "Visita nuestros showrooms y toma la decisión hoy mismo. ",
    link: "#",
  },
  {
    img: "/showrooms/showroom chico.png",
    link: "/testdrive/showroomchico",
  },
  {
    img: "/showrooms/showroom cedritos.png",
    link: "/testdrive/showroomcedritos",
  },
  {
    img: "/showrooms/showroom javeriana.png",
    link: "/testdrive/showroomjaveriana",
  },
];

