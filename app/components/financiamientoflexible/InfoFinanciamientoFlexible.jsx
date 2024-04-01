"use client";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const InfoFinanciamientoFlexible = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["var(--black)"];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 "
      ref={ref}
    >
      <div className="div relative flex items-start px-4 ">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 ">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100 "
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300 "
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40 " />
        </div>
      </div>
      <motion.div
        animate={{
          background: "bg-[#F4F5F0]"
        }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-[#F4F5F0] lg:block ",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};

export default InfoFinanciamientoFlexible;
