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
      img: "/talleres/TallerChico.jpg",
    },
    {
      id: 2,
      titulo: "javeriana",
      direccion: "Cra. 11a #94a-56",
      ciudad: "Carrera 7 # 45-10",
      entreSemana: "Lunes a viernes: 07:00 a.m. - 05:00 p.m.",
      sabado: "Sábados: 08:00 a.m. - 03:00 p.m.",

      url: "/talleres/tallerJaveriana",
      img: "/talleres/TallerJaveriana.png",
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
