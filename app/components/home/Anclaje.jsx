"use client"

import Link from "next/link";

/* import { useLenis } from "@studio-freight/react-lenis"; */

export const Anclaje = () => {
    /* const lenis = useLenis(({ scroll }) => {}); */
  return (
    <div className="anclas">
      <button
        onClick={() => lenis.scrollTo("#scooter", { lerp: 0.01 })}
        className="lg:font-regular text-[15px] text-[#42454A] underline decoration-1 lg:mt-2 lg:text-base lg:leading-[25px] 2xl:text-[18px]"
      >
        {/* {hero.ancla1} */}
        Minca #1
      </button>
      <button
        onClick={() => lenis.scrollTo("#ebike", { lerp: 0.01 })}
        className="lg:font-regular text-[15px] text-[#42454A] underline decoration-1 lg:mt-2 lg:text-base lg:leading-[25px] 2xl:text-[18px]"
      >
        {/* {hero.ancla2} */}
        Minca #2
      </button>
    </div>
  );
};
