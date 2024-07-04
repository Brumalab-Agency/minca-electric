"use client";
import { City } from "./City";

export function CarruselMincaCity() {
  return (
    <div id="city" className="carrusel relative h-auto w-full">
      <div className="carrusel-padre flex">
        <div className="min-w-full">
          <City />
        </div>
      </div>
    </div>
  );
}
