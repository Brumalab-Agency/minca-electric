import { CardShowRoomMovil } from "../showroom/CardShowRoomMovil";

export const MultipleShowTalleres = () => {
  const dataFromAPI = [
    { id: 1, titulo:"chicó", direccion: "Cra. 11a #94a-56", ciudad: "Bogotá, Colombia", entreSemana: "Lunes a viernes: 10:00 a.m. - 7:00 p.m.", sabado: "Sábados: 10:00 a.m. - 6:00 p.m.", domingo: "Domingos: 11:00 a.m. - 5:00 p.m.", url:"/talleres/tallerChico"},
    { id: 2, titulo:"javeriana", direccion: "Cra. 11a #94a-56", ciudad: "Bogotá, Colombia", entreSemana: "Lunes a viernes: 10:00 a.m. - 7:00 p.m.", sabado: "Sábados: 10:00 a.m. - 6:00 p.m.", domingo: "Domingos: 11:00 a.m. - 5:00 p.m.", url:"/talleres/tallerJaveriana"},
  ];

  return (
    <div>
      {dataFromAPI.map((item, index) => (
        <CardShowRoomMovil 
          key={item.id} 
          icono="/servicioTecnico/icon_taller.png"
          clase={index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F0F1EB]'}
          titulo={item.titulo}
          /* direccion={item.direccion} */
          ciudad={item.ciudad}
          entreSemana={item.entreSemana}
          sabado={item.sabado}
          domingo={item.domingo}
          url={item.url}
        />
      ))}
    </div>
  );
};
