"use client";
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("Email", email);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx6kJUJ9blRC3ywfiDpk7BYpYS_ZtqSNci5p7N_COeV1yZlrfKBxsnW2087PHnAkSi7hQ/exec",
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
    <div>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="Email"
          className="focus-within:border-white-600 focus-within:ring-white-600 relative mt-1 hidden h-[56px] overflow-hidden rounded-[12px] border border-white px-3 shadow-sm focus-within:ring-1 lg:block"
        >
          <span className="text-[10px] text-xs font-normal uppercase text-[#FFF]">
            {" "}
            Agrega tu correo{" "}
          </span>
          <button type="submit">
            <img
              className="absolute right-4 top-6"
              style={{
                filter:
                  "invert(98%) sepia(2%) saturate(718%) hue-rotate(340deg) brightness(122%) contrast(100%)",
              }}
              src="/footer-pc/Vector.png"
              alt="arrow-right"
            />
          </button>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="@"
            className="w-full border-none bg-[#111] p-0 text-white focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}

export default Newsletter;
