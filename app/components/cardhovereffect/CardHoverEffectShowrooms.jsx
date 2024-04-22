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
    title:
      "Equipo Minca: tu guía profesional: ",
    description:
      "Nuestro equipo de expertos en movilidad eléctrica está dedicado a ofrecerte la mejor experiencia en nuestros showrooms Minca. ",
    description2:
      "Con un conocimiento profundo de nuestras scooters eléctricas y accesorios, te guiarán para encontrar la solución perfecta que se adapte a tus necesidades y estilo de vida.",
    link: "/servicios",
  },
  {
    title: "¡Siente la emoción en dos ruedas! Prueba gratis nuestros scooters en un test drive exclusivo.",
    img2: "/showrooms/1.png",
    link: "http://localhost:3000/productos/Minca%20800W",
  },
  {
    title: "Pásate a la movilidad eléctrica.",
    description:
      "Adéntrate en un mundo de energía renovable y movilidad sostenible en nuestros showrooms Minca. ",
    description2: "Descubre la libertad de desplazarte con nuestras scooters eléctricas, encuentra accesorios que protegen tu viaje y adquiere herramientas para cuidar tu scooter en casa. Sumérgete en la experiencia Minca y haz del planeta un lugar más verde desde hoy. ",
    link: "/testdrive",
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

