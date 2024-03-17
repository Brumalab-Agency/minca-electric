"use client"
import { manrope, ubuntu } from "@/ui/fonts";
import { BotonRelativo } from "../botones/BotonRelativo";
import { useState } from "react";

export const FormularioContacto = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('Nombre', nombre);
      formData.append('Telefono', telefono);
      formData.append('Email', email);
      formData.append('Mensaje', mensaje);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxmhKnjgcR7V6-iqzVipfFzw_WIGZDbSO_FiV9DcbJzWz8VEjRg3V8luKyFQEjDhH_znA/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Redirigir a la página de éxito si la respuesta es exitosa
        window.location.href = "/agradecimiento"; // Reemplazar 'ruta-de-exito' con la URL real de la página de éxito
      } else {
        // Manejar errores de envío aquí
        console.error("Error al enviar el formulario:", response.statusText);
      }
    } catch (error) {
      // Manejar errores de red aquí
      console.error("Error de red al enviar el formulario:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
                      htmlForm="Nombre"
                      className={`${manrope.className} text-base text-[#111] font-semibold`}
                    >
                      {" "}
                      Nombre completo{" "}
                    </label>
                    <input
                    type="text"
                    id="Nombre"
                    name="Nombre"
                    placeholder="Ingrese su nombre completo aquí"
                    className="mt-1 w-full h-[56px] border border-1 border-[#ECEEF0] shadow-sm text-[14px] p-4"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  </div>
                  {/* ** */}
                  <div className="w-full">
                    <label
                      htmlForm="Telefono"
                      className={`${manrope.className} text-base text-[#111] font-semibold`}
                    >
                      {" "}
                      Número de teléfono{" "}
                    </label>
                    <input
                    type="tel"
                    id="Telefono"
                    name="Telefono"
                    placeholder="#"
                    className="mt-1 w-full h-[56px] border border-1 border-[#ECEEF0] shadow-sm text-[14px] p-4"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                  </div>
              </div>
              {/* email */}
              <div className="email mt-[23px]">
                <div className="w-full">
                    <label
                      htmlForm="Email"
                      className={`${manrope.className} text-base text-[#111] font-semibold`}
                    >
                      {" "}
                      Correo electrónico{" "}
                    </label>
                    <input
                    type="Email"
                    id="email"
                    name="Email"
                    placeholder="@"
                    className="mt-1 w-full h-[56px] border border-1 border-[#ECEEF0] shadow-sm text-[14px] p-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  </div>
              </div>
              {/* Text area */}
              <div className="email mt-[23px]">
                <div className="w-full">
                    <label
                      htmlForm="Mensaje"
                      className={`${manrope.className} text-base text-[#111] font-semibold`}
                    >
                      {" "}
                      Mensaje{" "}
                    </label>
                    <textarea
                    id="textArea"
                    name="Mensaje"
                    placeholder="Escribe tus mensajes aquí"
                    className="mt-1 w-full h-[136px] border border-1 border-[#ECEEF0] shadow-sm text-[14px] p-4"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                  />
                  </div>
              </div>
              {/* Boton */}
              <button className="bg-[#111] text-white lg:w-[289px] lg:h-[52px] mt-[35px] rounded-[62px]" type="submit">
              Contacto
              </button>
            </div>
          </div>
          <div className="w-full h-[933px] bg-[url(/contacto/bg-contacto.jpg)] bg-center bg-cover">
            {/* Imagen background */}
          </div>
        </div>
      </form>
    </div>
  );
};
