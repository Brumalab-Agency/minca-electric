"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffectInfoShowrooms = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  console.log(items.class);
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group p-2  block rounded-[10px] h-[360px] w-full lg:h-[402px] lg:w-[402px] "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardDescription2>{item.description2}</CardDescription2>
            <CardBackGround>{item.img}</CardBackGround>
            <CardBackGround2>{item.img2}</CardBackGround2>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 border-white border-2",
        className
      )}
    >
      
      <div className="relative z-50 grid place-items-center w-auto h-full">
        <div className="p-4 w-full h-auto grid place-items-center">
          {children}
          </div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardDescription2 = ({
    className,
    children,
  }) => {
    return (
      <p
        className={cn(
          "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
          className
        )}
      >
        {children}
      </p>
    );
  };

  export const CardBackGround= ({
    className,
    children,

  }) => {
    return (
      <img
        src={children}
        className={cn(
          `-mt-[65px] grid place-items-center`,
          className
        )}
      />
    );
  };
  export const CardBackGround2= ({
    className,
    children,
  }) => {
    return (
      <div className="grid place-items-center h-[145px]">
          <img
            src={children}
            className={cn(
              "grid place-items-center",
              className
            )}
          />
      </div>
    );
  };
