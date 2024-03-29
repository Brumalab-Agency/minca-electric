import { HoverEffectInfo } from "./HoverEffectInfo";

export function CardHoverEffect() {
  return (
    <div className="w-full bg-[#111] h-auto">
        <div className="max-w-[1270px] mx-auto px-8 bg-[#111] ">
          <HoverEffectInfo items={projects} />
        </div>
    </div>
  );
}
export const projects = [
  {
    title: "Financiamiento",
    description:
      "Trabaje en conjunto en tiempo real con su equipo, clientes y partes interesadas. Colabore en documentos, comparta ideas y tome decisiones rápidamente. Con nuestra plataforma, puede optimizar su flujo de trabajo y aumentar la productividad.",
      description2:
      "Con nuestra plataforma, puede optimizar su flujo de trabajo y aumentar la productividad.",
    link: "#",
  },
  {
   
    link: "#",
    img:"/img-con-bg.png"
  },
  {
    title: "Scooter rápida",
    description:
      "Trabaje en conjunto en tiempo real con su equipo, clientes y partes interesadas. Colabore en documentos, comparta ideas y tome decisiones rápidamente. ",
      description2:
      "Con nuestra plataforma, puede optimizar su flujo de trabajo y aumentar la productividad.",
    link: "#",
  },
  {
    title: "Scooter rápida",
    img2: "/tres_iconos.png",
    link: "#",
  },
  {
    title: "Scooter rápida",
    description:
      "Trabaje en conjunto en tiempo real con su equipo, clientes y partes interesadas. Colabore en documentos, comparta ideas y tome decisiones rápidamente. ",
      description2:
      "Con nuestra plataforma, puede optimizar su flujo de trabajo y aumentar la productividad.",
    link: "#",
  },
  {
    title: "Scooter rápida",
    img2: "/tres_iconos.png",
    link: "#",
  },
];
