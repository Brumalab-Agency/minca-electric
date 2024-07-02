import { CardShowRoomMovil } from "../showroom/CardShowRoomMovil";

export const MultipleShowTalleres = () => {
  const dataFromAPI = [
    {
      id: 1,
      titulo: "chicó",
      direccion: "Cra. 11a #94a-56",
      ciudad: "Calle 95 #13-55",
      entreSemana: "Lunes a viernes: 07:00 a.m. - 05:00 p.m.",
      sabado: "Sábados: 08:00 a.m. - 03:00 p.m.",

      url: "/talleres/tallerChico",
      img: "/talleres/taller-chico.jpg",
    },
    {
      id: 2,
      titulo: "javeriana",
      direccion: "Cra. 11a #94a-56",
      ciudad: "Cra. 11a #94a-56",
      entreSemana: "Lunes a viernes: 08:00 a.m. - 05:00 p.m.",
      sabado: "Sábados: 08:00 a.m. - 03:00 p.m.",

      url: "/talleres/tallerJaveriana",
      img: "/talleres/taller-javeriana.jpg",
    },
    {
      id: 3,
      titulo: "cedritos",
      direccion: "Av Carrera 19 # 143A - 08 Calle 95",
      ciudad: "Av Carrera 19 # 143A - 08",
      entreSemana: "Lunes a viernes: 08:00 a.m. - 05:00 p.m.",
      sabado: "Sábados: 08:00 a.m. - 03:00 p.m.",
      url: "/talleres/tallerCedritos",
      img: "/talleres/taller-cedritos.jpg",
    },
    {
      id: 4,
      titulo: "Avenida Chile",
      direccion: "Calle 72 # 25-10",
      ciudad: "Bogotá - Colombia",
      entreSemana: "Lunes a viernes: 08:00 a.m. - 05:00 p.m.",
      sabado: "Sábados: 08:00 a.m. - 03:00 p.m.",
      url: "/talleres/tallerAvenidaChile",
      img: "/talleres/Taller-avenida-chile.png",
    },
  ];

  return (
    <div>
      {dataFromAPI.map((item, index) => (
        <CardShowRoomMovil
          src={item.img}
          tipo="taller"
          key={item.id}
          icono="/servicioTecnico/icon_taller.png"
          clase={index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F0F1EB]"}
          titulo={item.titulo}
          /* direccion={item.direccion} */
          ciudad={item.ciudad}
          entreSemana={item.entreSemana}
          sabado={item.sabado}
          domingo={item.domingo}
          url={item.url}
          btn="Agendar Mantenimiento"
        />
      ))}
    </div>
  );
};
