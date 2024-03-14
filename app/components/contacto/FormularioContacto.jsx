import { manrope, ubuntu } from "@/ui/fonts";
import { BotonRelativo } from "../botones/BotonRelativo";

export const FormularioContacto = () => {
  return (
    <div className="FormularioContacto flex mt-[95px] mb-[150px]">
      <div className="pl-[100px] pr-[55px]">
        <h2 className={`${manrope.className} text-[48px] text-[#111]`}>Deja aquí <b>tu solicitud</b> </h2>
        <p className={`${ubuntu.className} text-base leading-[25px] text-`}>

          Estamos en constante evolución, por eso, si tienes alguna sugerencia o
          requerimiento especial no dudes en ponerte en contacto. Estaremos
          felices de aportarle soluciones a tu movilidad.{" "}
        </p>
        <div>
          <div className="inputs flex mt-[53px] gap-4">
              <div className="w-full">
                <label
                  for="textoNombre"
                  className={`${manrope.className} text-base text-[#111] font-semibold`}
                >
                  {" "}
                  Nombre completo{" "}
                </label>
                <input
                  type="text"
                  id="textoNombre"
                  placeholder="Ingrese su nombre completo aquí"
                  className="mt-1 w-full h-[56px] border border-1 border-[#ECEEF0] shadow-sm text-[14px] p-4"
                />
              </div>
              {/* ** */}
              <div className="w-full">
                <label
                  for="telefono"
                  className={`${manrope.className} text-base text-[#111] font-semibold`}
                >
                  {" "}
                  Número de teléfono{" "}
                </label>
                <input
                  type="tel"
                  id="telefono"
                  placeholder="#"
                  className="mt-1 w-full h-[56px] border border-1 border-[#ECEEF0] shadow-sm text-[14px] p-4"
                />
              </div>
          </div>
          {/* email */}
          <div className="email mt-[23px]">
            <div className="w-full">
                <label
                  for="email"
                  className={`${manrope.className} text-base text-[#111] font-semibold`}
                >
                  {" "}
                  Correo electrónico{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="@"
                  className="mt-1 w-full h-[56px] border border-1 border-[#ECEEF0] shadow-sm text-[14px] p-4"
                />
              </div>
          </div>
          {/* Text area */}
          <div className="email mt-[23px]">
            <div className="w-full">
                <label
                  for="textArea"
                  className={`${manrope.className} text-base text-[#111] font-semibold`}
                >
                  {" "}
                  Mensaje{" "}
                </label>
                <textarea id="textArea" placeholder="Escribe tus mensajes aquí" className="mt-1 w-full h-[136px] border border-1 border-[#ECEEF0] shadow-sm text-[14px] p-4"></textarea>
              </div>
          </div>
          {/* Boton */}
          <BotonRelativo param="Contacto" clases="bg-[#111] text-white lg:w-[289px] mt-[35px]"/>
        </div>
      </div>
      <div className="w-full h-[933px] bg-[url(/contacto/bg-contacto.jpg)] bg-center bg-cover">
        {/* Imagen background */}
      </div>
    </div>
  );
};
