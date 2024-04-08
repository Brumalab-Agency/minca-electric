"use client";
import { manrope, ubuntu } from "@/ui/fonts";
import { BotonRelativo } from "../botones/BotonRelativo";
import { useState } from "react";

export const FormularioContacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [cedula, setCedula] = useState("");
  const [compra, setCompra] = useState("");
  const [factura, setFactura] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("Nombre", nombre);
      formData.append("Email", email);
      formData.append("Cedula", cedula);
      formData.append("FechaCompra", compra);
      formData.append("NumeroFactura", factura);
      formData.append("Asunto", asunto);
      formData.append("Mensaje", mensaje);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxmhKnjgcR7V6-iqzVipfFzw_WIGZDbSO_FiV9DcbJzWz8VEjRg3V8luKyFQEjDhH_znA/exec",
        {
          method: "POST",
          body: formData,
        },
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
    <div className="px-4">
      <form onSubmit={handleSubmit}>
        <div className="FormularioContacto lg:mb-[150px] flex boder border-t-2 lg:border-none pt-6">
          <div className="lg:pl-[100px] lg:pr-[55px] ">
            <h2 className={`${manrope.className} text-[48px] text-[#111]`}>
              Deja aquí <b>tu solicitud</b>{" "}
            </h2>
            <p className={`${ubuntu.className} text- text-base leading-[25px]`}>
              Estamos en constante evolución, por eso, si tienes alguna
              sugerencia o requerimiento especial no dudes en ponerte en
              contacto. Estaremos felices de aportarle soluciones a tu
              movilidad.{" "}
            </p>
            <div className="mt-8">
              {/* Nombre */}
              <div className="w-full">
                <label
                  htmlForm="Nombre"
                  className={`${manrope.className} text-base font-semibold text-[#111]`}
                >
                  {" "}
                  Nombre completo *{" "}
                </label>
                <input
                  type="text"
                  id="Nombre"
                  name="Nombre"
                  placeholder="Ingrese su nombre completo aquí"
                  className="border-1 mt-1 h-[56px] w-full border border-[#ECEEF0] p-4 text-[14px] shadow-sm"
                  value={nombre}
                  required
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              {/* email */}
              <div className="email mt-4">
                <div className="w-full">
                  <label
                    htmlForm="Email"
                    className={`${manrope.className} text-base font-semibold text-[#111]`}
                  >
                    {" "}
                    Correo electrónico *{" "}
                  </label>
                  <input
                    type="Email"
                    id="email"
                    name="Email"
                    placeholder="@"
                    className="border-1 mt-1 h-[56px] w-full border border-[#ECEEF0] p-4 text-[14px] shadow-sm"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Cedula */}
              <div className="w-full mt-4">
                <label
                  htmlForm="Cedula"
                  className={`${manrope.className} text-base font-semibold text-[#111]`}
                >
                  {" "}
                  Cédula *{" "}
                </label>
                <input
                  type="tel"
                  id="Cedula"
                  name="Cedula"
                  placeholder="Cédula"
                  className="border-1 mt-1 h-[56px] w-full border border-[#ECEEF0] p-4 text-[14px] shadow-sm"
                  value={cedula}
                  required
                  onChange={(e) => setCedula(e.target.value)}
                />
              </div>
              {/* Fecha de Compra */}
              <div className="w-full mt-4">
                <label
                  htmlForm="FechaCompra"
                  className={`${manrope.className} text-base font-semibold text-[#111]`}
                >
                  {" "}
                  Fecha de Compra{" "}(en caso de que seas cliente)
                </label>
                <input
                  type="date"
                  id="FechaCompra"
                  name="FechaCompra"
                  placeholder="Fecha de compra"
                  className="border-1 mt-1 h-[56px] w-full border border-[#ECEEF0] p-4 text-[14px] shadow-sm"
                  value={compra}
                  onChange={(e) => setCompra(e.target.value)}
                />
              </div>

              {/* Número de factura */}
              <div className="w-full mt-4">
                <label
                  htmlForm="NumeroFactura"
                  className={`${manrope.className} text-base font-semibold text-[#111]`}
                >
                  {" "}
                  Número de factura{" "}(en caso de que seas cliente)
                </label>
                <input
                  type="text"
                  id="NumeroFactura"
                  name="NumeroFactura"
                  placeholder="Número de factura"
                  className="border-1 mt-1 h-[56px] w-full border border-[#ECEEF0] p-4 text-[14px] shadow-sm"
                  value={factura}
                  onChange={(e) => setFactura(e.target.value)}
                />
              </div>

              {/* Asunto */}
              <div className="w-full mt-4">
                <label
                  htmlForm="Asunto"
                  className={`${manrope.className} text-base font-semibold text-[#111]`}
                >
                  {" "}
                  Asunto *{" "}
                </label>
                <input
                  type="text"
                  id="Asunto"
                  name="Asunto"
                  placeholder="Asunto"
                  className="border-1 mt-1 h-[56px] w-full border border-[#ECEEF0] p-4 text-[14px] shadow-sm"
                  value={asunto}
                  required
                  onChange={(e) => setAsunto(e.target.value)}
                />
              </div>

              {/* Text area */}
              <div className="email mt-[23px]">
                <div className="w-full">
                  <label
                    htmlForm="Mensaje"
                    className={`${manrope.className} text-base font-semibold text-[#111]`}
                  >
                    {" "}
                    Mensaje{" "}
                  </label>
                  <textarea
                    id="textArea"
                    name="Mensaje"
                    placeholder="Escribe tu mensaje aquí"
                    className="border-1 mt-1 h-[136px] w-full border border-[#ECEEF0] p-4 text-[14px] shadow-sm"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                  />
                </div>
              </div>
              {/* Boton */}
              <button
                className="mt-[35px] rounded-[62px] bg-[#111] text-white h-[52px] w-full lg:w-[289px]"
                type="submit"
              >
                Contacto
              </button>
            </div>
          </div>
          <div className="hidden lg:block h-[933px] w-full bg-[url(/contacto/bg-contacto.jpg)] bg-cover bg-center">
            {/* Imagen background */}
          </div>
        </div>
      </form>
    </div>
  );
};
