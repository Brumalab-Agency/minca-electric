"use client";
import { sendEmailNewsLetter } from "@/utils/email/sendEmail";
import { useState } from "react";

function Notification({ message, subMessage, show, onClose, error }) {
  if (!show) return null;

  return (
    <div
      className={`fixed right-0 top-0 z-50 m-4 flex items-center space-x-2 rounded-md p-4 shadow-md ${error ? "bg-zinc-950 text-white" : "bg-zinc-950 text-white"}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {error ? (
          <path
            id="cross"
            d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5 13.59L13.59 15 10 11.41 6.41 15 5 13.59 8.59 10 5 6.41 6.41 5 10 8.59 13.59 5 15 6.41 11.41 10 15 13.59z"
            fill="#FF0000"
          />
        ) : (
          <path
            id="check"
            d="M20 10C20 15.5229 15.5229 20 10 20C4.47714 20 0 15.5229 0 10C0 4.47714 4.47714 0 10 0C15.5229 0 20 4.47714 20 10ZM8.84331 15.2949L16.2627 7.87556C16.5146 7.62363 16.5146 7.21512 16.2627 6.96319L15.3503 6.05081C15.0983 5.79883 14.6898 5.79883 14.4379 6.05081L8.3871 12.1015L5.56214 9.27657C5.3102 9.02464 4.90169 9.02464 4.64972 9.27657L3.73734 10.189C3.4854 10.4409 3.4854 10.8494 3.73734 11.1013L7.93089 15.2949C8.18286 15.5469 8.59133 15.5469 8.84331 15.2949Z"
            fill="#22BB55"
          />
        )}
      </svg>

      <div>
        <span
          className={`mr-5 font-semibold ${error ? "text-white" : "text-green-500"}`}
        >
          {message}
        </span>
        <div className="mr-5 text-sm text-white">{subMessage}</div>
      </div>
      <button onClick={onClose} className="text-white">
        &times;
      </button>
    </div>
  );
}

function NewsletterMovil() {
  const [email, setEmail] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationSubMessage, setNotificationSubMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      setNotificationMessage("Por favor ingresa un correo válido");
      setNotificationSubMessage("");
      setShowNotification(true);
      setIsError(true);
      setTimeout(() => setShowNotification(false), 3000);
      return;
    }

    await sendEmailNewsLetter(email);
    setNotificationMessage("Te has suscrito con éxito");
    setNotificationSubMessage("¡Bienvenido a la comunidad Minca!");
    setShowNotification(true);
    setIsError(false);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setNotificationMessage("");
      setNotificationSubMessage("");
      setShowNotification(false);
      setIsError(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="Email"
          className="focus-within:border-white-600 focus-within:ring-white-600 relative mt-1 block h-[56px] w-full overflow-hidden rounded-[12px] border border-white px-3 shadow-sm focus-within:ring-1 "
        >
          <span className="text-[10px] text-xs font-normal uppercase text-[#FFF]">
            Agrega tu correo
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
            onChange={handleChange}
          />
        </label>
      </form>

      <Notification
        message={notificationMessage}
        subMessage={notificationSubMessage}
        show={showNotification}
        onClose={handleCloseNotification}
        error={isError}
      />
    </div>
  );
}

export default NewsletterMovil;
