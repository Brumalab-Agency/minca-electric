"use client"

import { useLenis } from "@studio-freight/react-lenis";

export const Anclaje = ({hero}) => {
    const lenis = useLenis(({ scroll }) => {});
  return (
    <div className="anclas">
      <button
        onClick={() => lenis.scrollTo("#scooter", { lerp: 0.07 })}
        className="lg:font-regular text-[15px] text-[#42454A] underline decoration-1 lg:mt-2 lg:text-base lg:leading-[25px] 2xl:text-[18px]"
      >
        {hero.ancla1}

      </button>
      <button
        onClick={() => lenis.scrollTo("#ebike", { lerp: 0.07 })}
        className="lg:font-regular text-[15px] text-[#42454A] underline decoration-1 lg:mt-2 lg:text-base lg:leading-[25px] 2xl:text-[18px] ml-4"
      >
        {hero.ancla2}

      </button>
    </div>
  );
};
