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
    title: "Financiamiento: Descubre nuestras opciones de financiamiento: ",
    description:
      "Addi, Vanti Listo y Sistecredito.",
      description2:
      "Compra tu scooter fácilmente en nuestra página web o contacta a nuestros asesores para más detalles.",
    
    link: "#",
  },
  {
   
    link: "#",
    img:"/img-con-bg.png"
  },
  {
    title: "Prueba tu libertad: programa tu test drive:",
    description:
      "Queremos que sientas la libertad de probar una Minca y descubrir los beneficios de la movilidad eléctrica.",
    description2:
    "Visita nuestros showrooms y toma la decisión hoy mismo. ",  
     
    link: "#",
  },
  {
    title: "Nuestras tiendas físicas a tu servicio:",
    description: "Tenemos todo un equipo preparado para resolver tus dudas y mostrarte los beneficios de adquirir una Minca.",
    link: "#",
  },
  {
    title: "Confianza en cada kilómetro: soporte postventa garantizado:",
    description:
      "Nuestros talleres están completamente equipados para resolver cualquier inconveniente que puedas tener con tu scooter Minca.",
     link: "#",
  },
  {
    title: "Compra segura online: protección y garantía en cada pedido:",
    description: "Tenemos toda una plataforma pensada para que adquieras tu Minca, tus accesorios y agendes tu test drive o mantenimiento de la forma más efectiva y segura.",
    link: "#",
  },
];
