import { CardShowRoomMovil } from "../showroom/CardShowRoomMovil";

export const MultipleShowRooms = () => {
  const dataFromAPI = [
    {
      id: 1,
      src: "/sedes/Showroom Chicó - Minca electric.jpg",
      titulo: "Chicó",
      direccion: "Cra. 11a #94a-56",
      ciudad: "Bogotá, Colombia",
      entreSemana: "Lunes a viernes: 10:00 a.m. - 7:00 p.m.",
      sabado: "Sábados: 10:00 a.m. - 6:00 p.m.",
      domingo: "Domingos: 11:00 a.m. - 5:00 p.m.",
      url: "/testdrive/showroomchico",
    },
    {
      id: 2,
      src: "/sedes/Showroom Cedritos - Minca electric.png",
      titulo: "Cedritos",
      direccion: "Av. Cra. 19#143A-08",
      ciudad: "Bogotá, Colombia",
      entreSemana: "Lunes a viernes: 10:00 a.m. - 7:00 p.m.",
      sabado: "Sábados: 10:00 a.m. - 6:00 p.m.",
      domingo: "Domingos: 11:00 a.m. - 5:00 p.m.",
      url: "/testdrive/showroomcedritos",
    },
    {
      id: 3,
      src: "/sedes/Showroom Javeriana - Minca electric.jpg",
      titulo: "Javeriana",
      direccion: "Carrera 7 # 45-10",
      ciudad: "Bogotá, Colombia",
      entreSemana: "Lunes a viernes: 10:00 a.m. - 7:00 p.m.",
      sabado: "Sábados: 10:00 a.m. - 6:00 p.m.",
      domingo: "Domingos: 11:00 a.m. - 5:00 p.m.",
      url: "/testdrive/showroomjaveriana",
    },
    {
      id: 4,
      src: "/sedes/Showroom Gran Estación - Minca electric.jpg",
      titulo: "Gran Estación",
      direccion: "Centro Comercial Gran Estacion - Isla, 2-02",
      ciudad: "Bogotá, Colombia",
      entreSemana: "Lunes a viernes: 10:00 a.m. - 7:00 p.m.",
      sabado: "Sábados: 10:00 a.m. - 6:00 p.m.",
      domingo: "Domingos: 11:00 a.m. - 5:00 p.m.",
      url: "/testdrive",
    },
    {
      id: 4,
      src: "/sedes/Showroom Avenida Chile - Minca electric.png",
      titulo: "Avenida Chile",
      direccion: "Calle 72 # 25-10,",
      ciudad: "Bogotá, Colombia",
      entreSemana: "Lunes a viernes: 10:00 a.m. - 7:00 p.m.",
      sabado: "Sábados: 10:00 a.m. - 6:00 p.m.",
      domingo: "Domingos: 11:00 a.m. - 5:00 p.m.",
      url: "/testdrive/showroomavenidachile",
    },
  ];

  return (
    <div>
      {dataFromAPI.map((item, index) => (
        <CardShowRoomMovil
          key={item.id}
          src={item.src}
          icono="/showroom_icon.png"
          titulo={item.titulo}
          clase={index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F0F1EB]"}
          direccion={item.direccion}
          entreSemana={item.entreSemana}
          sabado={item.sabado}
          domingo={item.domingo}
          url={item.url}
          btn="Agrendar TesDrive"
        />
      ))}
    </div>
  );
};
