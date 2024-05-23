import { manrope, ubuntu } from "@/ui/fonts";
import { BotonRelativo } from "../botones/BotonRelativo";
import { MultipleShowRooms } from "./MultipleShowRooms";

export const TestDriveComponent = () => {
  return (
    <div className="TestDrive">
      <div className="carrusel w-full bg-[#F0F1EB] lg:px-0">
        {/* PC */}

        {/* showroom 1 */}
        <section className="flex h-full w-full lg:h-[665px]">
          <div className="ladoIzquierdo grid h-full w-full place-items-center bg-[url(/showrooms/TestDriveChico.jpg)] bg-cover bg-top">
            {/* La imagen es un backGround */}
          </div>
          <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#F0F1EB] text-[#111] lg:grid ">
            <div className="">
              <div className="flex gap-4 ">
                <div className="columna-img mb-[25px] flex h-auto w-[60px] flex-col justify-end gap-6">
                  <div className="mb-[40px]">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/showroom_icon.png"
                      alt="icono de herramientas"
                    />
                  </div>
                  <div className="">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/map.png"
                      alt="pointer map"
                    />
                  </div>
                  <div className="">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/calendario.png"
                      alt="icono calendario"
                    />
                  </div>
                </div>
                <div>
                  <div className="">
                    <p className={`${ubuntu.className} text-left text-base`}>
                      Visita nuestras sedes Minca:
                    </p>
                    <h1
                      className={`${manrope.className} mt-[50px] text-left text-[42px] font-bold uppercase`}
                    >
                      showroom
                    </h1>
                    <h2
                      className={`${manrope.className} mb-[27px] text-left text-[26px] font-medium uppercase`}
                    >
                      chicó
                    </h2>
                  </div>
                  <div>
                    <div className="">
                      <p className={`${ubuntu.className} text-base`}>
                        Cra. 11a #94a-56, <br></br> Bogotá, Colombia
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className={`${ubuntu.className} text-base`}>
                        Lunes a viernes: 10:00 a.m. - 07:00 p.m.
                      </p>
                      <p className={`${ubuntu.className} text-base`}>
                        Sábados: 10:00 a.m. - 06:00 p.m.
                      </p>
                      {
                        <p className={`${ubuntu.className} text-base`}>
                          Domingos: 11:00 a.m. - 05:00 p.m.
                        </p>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto ml-[60px] mt-6">
                <BotonRelativo
                  sitio="/showroomchico"
                  param="Agendar TestDrive"
                  clases="border-2 border-[#111] bg-[#F0F1EB] lg:w-[342px] lg:h-[56px]"
                />
              </div>
            </div>
          </div>
        </section>
        {/* showroom 2 */}
        <section className="flex h-full w-full lg:h-[665px]">
          <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#F0F1EB] text-[#111] lg:grid ">
            <div className="">
              <div className="flex gap-4 ">
                <div className="columna-img mb-[25px] flex h-auto w-[60px] flex-col justify-end gap-6">
                  <div className="mb-[40px]">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/showroom_icon.png"
                      alt="icono de herramientas"
                    />
                  </div>
                  <div className="">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/map.png"
                      alt="pointer map"
                    />
                  </div>
                  <div className="">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/calendario.png"
                      alt="icono calendario"
                    />
                  </div>
                </div>
                <div>
                  <div className="">
                    <p className={`${ubuntu.className} text-left text-base`}>
                      Visita nuestras sedes Minca:
                    </p>
                    <h1
                      className={`${manrope.className} mt-[50px] text-left text-[42px] font-bold uppercase`}
                    >
                      showroom
                    </h1>
                    <h2
                      className={`${manrope.className} mb-[27px] text-left text-[26px] font-medium uppercase`}
                    >
                      cedritos
                    </h2>
                  </div>
                  <div>
                    <div className="">
                      <p className={`${ubuntu.className} text-base`}>
                        Av. Cra. 19#143A-08, <br></br> Bogotá, Colombia
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className={`${ubuntu.className} text-base`}>
                        Lunes a viernes: 10:00 a.m. - 07:00 p.m.
                      </p>
                      <p className={`${ubuntu.className} text-base`}>
                        Sábados: 10:00 a.m. - 06:00 p.m.
                      </p>
                      {
                        <p className={`${ubuntu.className} text-base`}>
                          Domingos: 11:00 a.m. - 05:00 p.m.
                        </p>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto ml-[60px] mt-6">
                <BotonRelativo
                  sitio="/showroomcedritos"
                  param="Agendar TestDrive"
                  clases="border-2 border-[#111] bg-[#F0F1EB] lg:w-[342px] lg:h-[56px]"
                />
              </div>
            </div>
          </div>

          <div className="ladoIzquierdo grid h-full w-full place-items-center bg-[url(/showrooms/TestDriveCedritos.jpg)] bg-cover bg-top">
            {/* La imagen es un backGround */}
          </div>
        </section>
        {/* showroom 3 */}
        <section className="flex h-full w-full lg:h-[665px]">
          <div className="ladoIzquierdo grid h-full w-full place-items-center bg-[url(/showrooms/TestDriveJaveriana.jpg)] bg-cover bg-center">
            {/* La imagen es un backGround */}
          </div>
          <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#F0F1EB] text-[#111] lg:grid ">
            <div className="">
              <div className="flex gap-4 ">
                <div className="columna-img mb-[25px] flex h-auto w-[60px] flex-col justify-end gap-6">
                  <div className="mb-[40px]">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/showroom_icon.png"
                      alt="icono de herramientas"
                    />
                  </div>
                  <div className="">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/map.png"
                      alt="pointer map"
                    />
                  </div>
                  <div className="">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/calendario.png"
                      alt="icono calendario"
                    />
                  </div>
                </div>
                <div>
                  <div className="">
                    <p className={`${ubuntu.className} text-left text-base`}>
                      Visita nuestras sedes Minca:
                    </p>
                    <h1
                      className={`${manrope.className} mt-[50px] text-left text-[42px] font-bold uppercase`}
                    >
                      showroom
                    </h1>
                    <h2
                      className={`${manrope.className} mb-[27px] text-left text-[26px] font-medium uppercase`}
                    >
                      javeriana
                    </h2>
                  </div>
                  <div>
                    <div className="">
                      <p className={`${ubuntu.className} text-base`}>
                        Carrera 7 # 45-10, <br></br> Bogotá, Colombia
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className={`${ubuntu.className} text-base`}>
                        Lunes a viernes: 10:00 a.m. - 07:00 p.m.
                      </p>
                      <p className={`${ubuntu.className} text-base`}>
                        Sábados: 10:00 a.m. - 06:00 p.m.
                      </p>
                      {
                        <p className={`${ubuntu.className} text-base`}>
                          Domingos: 11:00 a.m. - 05:00 p.m.
                        </p>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto ml-[60px] mt-6">
                <BotonRelativo
                  sitio="/showroomjaveriana"
                  param="Agendar TestDrive"
                  clases="border-2 border-[#111] bg-[#F0F1EB] lg:w-[342px] lg:h-[56px]"
                />
              </div>
            </div>
          </div>
        </section>
        {/* showroom 4 */}
        <section className="flex h-full w-full lg:h-[665px]">
          <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#F0F1EB] text-[#111] lg:grid ">
            <div className="">
              <div className="flex gap-4 ">
                <div className="columna-img mb-[25px] flex h-auto w-[60px] flex-col justify-end gap-6">
                  <div className="mb-[40px]">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/showroom_icon.png"
                      alt="icono de herramientas"
                    />
                  </div>
                  <div className="">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/map.png"
                      alt="pointer map"
                    />
                  </div>
                  <div className="">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/calendario.png"
                      alt="icono calendario"
                    />
                  </div>
                </div>
                <div>
                  <div className="">
                    <p className={`${ubuntu.className} text-left text-base`}>
                      Visita nuestras sedes Minca:
                    </p>
                    <h1
                      className={`${manrope.className} mt-[50px] text-left text-[42px] font-bold uppercase`}
                    >
                      showroom
                    </h1>
                    <h2
                      className={`${manrope.className} mb-[27px] text-left text-[26px] font-medium uppercase`}
                    >
                      Gran Estación
                    </h2>
                  </div>
                  <div>
                    <div className="">
                      <p className={`${ubuntu.className} text-base`}>
                        Centro Comercial Gran Estacion - Isla, 2-02 <br></br>{" "}
                        Bogotá, Colombia
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className={`${ubuntu.className} text-base`}>
                        Lunes a viernes: 10:00 a.m. - 07:00 p.m.
                      </p>
                      <p className={`${ubuntu.className} text-base`}>
                        Sábados: 10:00 a.m. - 06:00 p.m.
                      </p>
                      {
                        <p className={`${ubuntu.className} text-base`}>
                          Domingos: 11:00 a.m. - 05:00 p.m.
                        </p>
                      }
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mx-auto ml-[60px] mt-6">
                <BotonRelativo
                  sitio="/showroomcedritos"
                  param="Agendar TestDrive"
                  clases="border-2 border-[#111] bg-[#F0F1EB] lg:w-[342px] lg:h-[56px]"
                />
              </div> */}
            </div>
          </div>

          <div className="ladoIzquierdo grid h-full w-full place-items-center bg-[url(/showrooms/gran-estacion.jpg)] bg-cover bg-top">
            {/* La imagen es un backGround */}
          </div>
        </section>
        {/* showroom 5 */}
        <section className="flex h-full w-full lg:h-[665px]">
          <div className="ladoIzquierdo grid h-full w-full place-items-center bg-[url(/showrooms/TestDriveAvenidaChile.png)] bg-cover bg-top"></div>
          <div className="ladoDerecho hidden h-full w-full place-items-center bg-[#F0F1EB] text-[#111] lg:grid ">
            <div className="">
              <div className="flex gap-4 ">
                <div className="columna-img mb-[25px] flex h-auto w-[60px] flex-col justify-end gap-6">
                  <div className="mb-[40px]">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/showroom_icon.png"
                      alt="icono de herramientas"
                    />
                  </div>
                  <div className="">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/map.png"
                      alt="pointer map"
                    />
                  </div>
                  <div className="">
                    <img
                      className="h-[50px] w-[50px]"
                      src="/calendario.png"
                      alt="icono calendario"
                    />
                  </div>
                </div>
                <div>
                  <div className="">
                    <p className={`${ubuntu.className} text-left text-base`}>
                      Visita nuestras sedes Minca:
                    </p>
                    <h1
                      className={`${manrope.className} mt-[50px] text-left text-[42px] font-bold uppercase`}
                    >
                      showroom
                    </h1>
                    <h2
                      className={`${manrope.className} mb-[27px] text-left text-[26px] font-medium uppercase`}
                    >
                      Avenida Chile
                    </h2>
                  </div>
                  <div>
                    <div className="">
                      <p className={`${ubuntu.className} text-base`}>
                        Calle 72 # 25-10, <br></br> Bogotá, Colombia
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className={`${ubuntu.className} text-base`}>
                        Lunes a viernes: 10:00 a.m. - 07:00 p.m.
                      </p>
                      <p className={`${ubuntu.className} text-base`}>
                        Sábados: 10:00 a.m. - 06:00 p.m.
                      </p>
                      {
                        <p className={`${ubuntu.className} text-base`}>
                          Domingos: 11:00 a.m. - 05:00 p.m.
                        </p>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto ml-[60px] mt-6">
                <BotonRelativo
                  sitio="/showroomavenidachile"
                  param="Agendar TestDrive"
                  clases="border-2 border-[#111] bg-[#F0F1EB] lg:w-[342px] lg:h-[56px]"
                />
              </div>
            </div>
          </div>
        </section>

        <div>
          <MultipleShowRooms />
        </div>
      </div>
    </div>
  );
};

export default TestDriveComponent;
