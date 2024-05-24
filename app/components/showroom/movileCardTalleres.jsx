"use client";

import { CardShowRoomMovil } from "./CardShowRoomMovil";

export const MovileCardTalleres = () => {
  return (
    <>
      <CardShowRoomMovil
        tipo="Taller"
        src="/talleres/taller-chico.jpg"
        titulo="chicó"
        btn="Agendar Mantenimiento"
        icono="/showroom_icon.png"
        url="/talleres/tallerChico"
        direccion="Calle 95 #13-55"
        ciudad="Bogota, Colombia"
        entreSemana="Lunes a viernes: 07:00 a.m. - 05:00 p.m."
        sabado="Sábados: 08:00 a.m. - 03:00 p.m."
      />
      <CardShowRoomMovil
        tipo="Taller"
        src="/talleres/taller-javeriana.jpg"
        titulo="javeriana"
        btn="Agendar Mantenimiento"
        icono="/showroom_icon.png"
        clase="bg-[#F0F1EB]"
        url="/talleres/tallerJaveriana"
        direccion="Carrera 7 # 45-10"
        ciudad="Bogota, Colombia"
        entreSemana="Lunes a viernes: 07:00 a.m. - 05:00 p.m."
        sabado="Sábados: 08:00 a.m. - 03:00 p.m."
      />
      <CardShowRoomMovil
        tipo="Taller"
        src="/talleres/taller-cedritos.jpg"
        titulo="Cedritos"
        btn="Agendar Mantenimiento"
        icono="/showroom_icon.png"
        clase="bg-[#F0F1EB]"
        url="/talleres/tallerCedritos"
        direccion="Av Carrera 19 # 143A - 08 Calle 95"
        ciudad="Bogota, Colombia"
        entreSemana="Lunes a viernes: 07:00 a.m. - 05:00 p.m."
        sabado="Sábados: 08:00 a.m. - 03:00 p.m."
      />
      <CardShowRoomMovil
        tipo="Taller"
        src="/talleres/Taller-avenida-chile.png"
        titulo="Cedritos"
        btn="Agendar Mantenimiento"
        icono="/showroom_icon.png"
        clase="bg-[#F0F1EB]"
        url="/talleres/tallerAvenidaChile"
        direccion="Calle 72 # 25-10,"
        ciudad="Bogota, Colombia"
        entreSemana="Lunes a viernes: 07:00 a.m. - 05:00 p.m."
        sabado="Sábados: 08:00 a.m. - 03:00 p.m."
      />
    </>
  );
};
