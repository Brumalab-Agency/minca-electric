"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

export const CarrouselMovileTalleres = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);
  const slides = [
    {
      img: "/talleres/chico.png",
      title: "Taller Chicó",
      link: "/talleres/tallerChico",
      location: "Calle 95 #13-55",
      location2: "Bogotá, Colombia",
      schedule: [
        "Lunes a viernes: 11:00 a.m. - 08:00 p.m.",
        "Sábados: 08:00 a.m. - 03:00 p.m.",
      ],
    },
    {
      img: "/talleres/javeriana.png",
      title: "Taller Javeriana",
      link: "/talleres/tallerJaveriana",
      location: "Carrera 7 # 45-10",
      location2: "Bogotá, Colombia",
      schedule: [
        "Lunes a viernes: 08:00 a.m. - 05:00 p.m.",
        "Sábados: 08:00 a.m. - 03:00 p.m.",
      ],
    },
    {
      img: "/talleres/cedritos.png",
      title: "Taller Cedritos",
      link: "/talleres/tallerCedritos",
      location: "Av Carrera 19 # 143A - 08 Calle 95",
      location2: "Bogotá, Colombia",
      schedule: [
        "Lunes a viernes: 08:00 a.m. - 05:00 p.m.",
        "Sábados: 08:00 a.m. - 03:00 p.m.",
      ],
    },
    {
      img: "/talleres/av-chile.png",
      title: "Avenida Chile",
      link: "/talleres/tallerAvenidaChile",
      location: "Calle 72 # 25-10,",
      location2: "Bogotá, Colombia",
      schedule: [
        "Lunes a viernes: 08:00 a.m. - 05:00 p.m.",
        "Sábados: 08:00 a.m. - 03:00 p.m.",
      ],
    },
  ];

  useEffect(() => {
    const handleAutoSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const intervalId = setInterval(handleAutoSlide, 3000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touchX = e.touches[0].clientX;
    const moveX = startX - touchX;
    if (moveX > 50) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsDragging(false);
    }
    if (moveX < -50) {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
      );
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      <h1 className="mt-50 mb-5 ml-5 text-[32px] font-bold">TALLERES</h1>
      <div
        ref={carouselRef}
        className="relative w-[100%] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="min-w-full max-w-sm px-4" key={index}>
              <section className="min-w-full max-w-sm overflow-hidden rounded-lg border-2 border-black bg-[#F0EEED] text-black shadow-lg">
                <div className="relative mx-5 justify-center rounded-lg">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="mt-4 w-full rounded-lg object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="mb-2 text-2xl font-bold">{slide.title}</h2>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={42}
                      height={42}
                      fill="none"
                    >
                      <circle cx={20.756} cy={20.756} r={20.756} fill="#111" />
                      <g fill="#F0EEED" fillRule="evenodd" clipRule="evenodd">
                        <path d="M13 18.688C13 14.466 16.333 11 20.5 11s7.5 3.467 7.5 7.688c0 2.152-.95 4.037-2.238 5.756-1.074 1.435-2.45 2.837-3.817 4.232l-.773.79a.937.937 0 0 1-1.344 0l-.773-.79c-1.368-1.395-2.743-2.797-3.817-4.232C13.95 22.725 13 20.84 13 18.688Zm7.5-5.813c-3.082 0-5.625 2.577-5.625 5.813 0 1.574.69 3.065 1.864 4.632.992 1.326 2.262 2.622 3.632 4.02l.129.13.129-.13c1.37-1.398 2.64-2.694 3.632-4.02 1.174-1.567 1.864-3.058 1.864-4.633 0-3.235-2.543-5.812-5.625-5.812Z" />
                        <path d="M17.688 18.5a2.813 2.813 0 1 1 5.625 0 2.813 2.813 0 0 1-5.625 0Zm2.812-.938a.937.937 0 1 0 0 1.875.937.937 0 0 0 0-1.875Z" />
                      </g>
                    </svg>
                  </div>

                  <div className="mt-3 flex items-center">
                    <div>
                      <p>{slide.location}</p>
                      <p>{slide.location2}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={42}
                      height={43}
                      fill="none"
                    >
                      <circle cx={20.756} cy={21.267} r={20.756} fill="#111" />
                      <path
                        fill="#F0EEED"
                        fillRule="evenodd"
                        d="M15.75 11.511a.95.95 0 0 1 .95.95v.95h7.6v-.95a.95.95 0 1 1 1.9 0v.95c.436 0 .816.004 1.135.03.376.03.75.098 1.109.281.536.273.972.71 1.245 1.246.183.36.251.733.282 1.108.029.356.029.788.029 1.289v9.193c0 .5 0 .933-.029 1.289-.03.375-.099.749-.282 1.108a2.85 2.85 0 0 1-1.245 1.246c-.36.183-.733.25-1.109.281-.356.03-.788.03-1.288.03H14.953c-.5 0-.932 0-1.288-.03-.376-.03-.75-.098-1.109-.281a2.85 2.85 0 0 1-1.245-1.246c-.184-.36-.251-.733-.282-1.108C11 27.49 11 27.059 11 26.558v-9.193c0-.5 0-.933.029-1.289.03-.375.098-.749.282-1.108M12.9 19.11v7.41c0 .548 0 .902.023 1.171.02.258.057.354.08.4a.95.95 0 0 0 .416.416c.047.024.142.06.4.08.27.023.623.023 1.171.023h11.02c.548 0 .901 0 1.17-.022.259-.021.354-.057.401-.081a.95.95 0 0 0 .415-.415c.024-.047.06-.143.081-.401.022-.27.023-.623.023-1.17v-7.41H12.9Zm15.2-1.9H12.9c0-.441.003-.743.023-.98.02-.258.057-.354.08-.4a.95.95 0 0 1 .416-.416c.047-.024.142-.06.4-.08.27-.023.623-.024 1.171-.024h11.02c.548 0 .901.001 1.17.023.259.021.354.057.401.081a.95.95 0 0 1 .415.415c.024.047.06.143.081.4.02.238.022.54.023.982Zm-13.3-3.8v-.95a.95.95 0 0 1 .95-.95m-.95 1.9c-.436 0-.816.004-1.135.03-.376.03-.75.098-1.109.281m0 0a2.85 2.85 0 0 0-1.245 1.246l1.245-1.246Zm1.294 8.24a.95.95 0 0 1 .95-.95h1.9a.95.95 0 1 1 0 1.9h-1.9a.95.95 0 0 1-.95-.95Zm4.75 0a.95.95 0 0 1 .95-.95h1.9a.95.95 0 1 1 0 1.9h-1.9a.95.95 0 0 1-.95-.95Zm4.75 0a.95.95 0 0 1 .95-.95h1.9a.95.95 0 1 1 0 1.9h-1.9a.95.95 0 0 1-.95-.95Zm-9.5 3.8a.95.95 0 0 1 .95-.95h1.9a.95.95 0 1 1 0 1.9h-1.9a.95.95 0 0 1-.95-.95Zm4.75 0a.95.95 0 0 1 .95-.95h1.9a.95.95 0 1 1 0 1.9h-1.9a.95.95 0 0 1-.95-.95Zm4.75 0a.95.95 0 0 1 .95-.95h1.9a.95.95 0 1 1 0 1.9h-1.9a.95.95 0 0 1-.95-.95Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-3">
                    {slide.schedule.map((time, i) => (
                      <p key={i}>{time}</p>
                    ))}
                  </div>
                  <Link href={slide.link}>
                    <button className="mt-4 w-full rounded-md bg-black py-2 text-white">
                      Agendar Mantenimiento
                    </button>
                  </Link>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
