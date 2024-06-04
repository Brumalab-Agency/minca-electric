"use client";
import { sendEmailNewsLetter } from "@/utils/email/sendEmail";
import { useState } from "react";

function NewsletterMovil() {
  const [email, setEmail] = useState("");
  console.log(email)

  const handleSubmit = async (event) => {
    event.preventDefault();

    await sendEmailNewsLetter(email)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="Email"
          className="focus-within:border-white-600 focus-within:ring-white-600 relative mt-1 h-[56px] overflow-hidden rounded-[12px] border border-white px-3 shadow-sm focus-within:ring-1 block w-full "
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

export default NewsletterMovil;
