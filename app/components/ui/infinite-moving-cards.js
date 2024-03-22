"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/utils/cn";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="custom-shadow  relative flex justify-center items-center h-[32px] w-[76px] rounded-[5px] bg-[#F0EEED] lg:h-[75px] lg:w-[191px] 2xl:h-[105px] 2xl:w-[270px]"
            key={item.name}
          >
            <div className="grid place-items-center">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none grid place-items-center"
              >
                <img
                  className="h-[24px] w-[62px] lg:h-[57px] lg:w-[143px] "
                  src={item.clientesAliados.clientesaliado.mediaItemUrl}
                  alt="Clientes relacionados"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
