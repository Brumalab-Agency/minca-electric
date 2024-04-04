import { CardShowRoomMovil } from "../showroom/CardShowRoomMovil";

export const MultipleShowRooms = () => {
  const dataFromAPI = [
    { id: 1, titulo: "Chicó", direccion: "Cra. 11a #94a-56", ciudad: "Bogotá, Colombia", entreSemana: "Lunes a viernes: 10:00 a.m. - 7:00 p.m.", sabado: "Sábados: 10:00 a.m. - 6:00 p.m.", domingo: "Domingos: 11:00 a.m. - 5:00 p.m.", url:"/testdrive/showroomchico"},
    { id: 2, titulo: "Cedritos", direccion: "Cra. 11a #94a-56", ciudad: "Bogotá, Colombia", entreSemana: "Lunes a viernes: 10:00 a.m. - 7:00 p.m.", sabado: "Sábados: 10:00 a.m. - 6:00 p.m.", domingo: "Domingos: 11:00 a.m. - 5:00 p.m.", url:"/testdrive/showroomcedritos"},
    { id: 3, titulo: "Javeriana", direccion: "Cra. 11a #94a-56", ciudad: "Bogotá, Colombia", entreSemana: "Lunes a viernes: 10:00 a.m. - 7:00 p.m.", sabado: "Sábados: 10:00 a.m. - 6:00 p.m.", domingo: "Domingos: 11:00 a.m. - 5:00 p.m.", url:"/testdrive/showroomjaveriana"},
  ];

  return (
    <div>
      {dataFromAPI.map((item, index) => (
        <CardShowRoomMovil 
          key={item.id} 
          icono="/showroom_icon.png"
          titulo={item.titulo}
          clase={index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F0F1EB]'} 
          direccion={item.direccion}
          ciudad={item.ciudad}
          entreSemana={item.entreSemana}
          sabado={item.sabado}
          domingo={item.domingo}
          url= {item.url}

        />
      ))}
    </div>
  );
};
