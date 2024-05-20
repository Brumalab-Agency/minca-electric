"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";



export const LayoutGrid = ({ cards }) => {

  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };
  

  return (
    <div className="w-full h-[579px] p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hiddenn",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col contenedor-Card"
                : lastSelected?.id === card.id
                ? "z-40 bg-[#F4F5F0] rounded-xl h-full w-full"
                : "bg-[#F4F5F0] rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }) => {

  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnails}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        `object-cover object-center absolute inset-0 h-full w-full transition duration-200   ${card.className}`,
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative ">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="absolute inset-0 h-full w-full bg-[#F4F5F0]"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="contenedor-relativo px-8 pb-4 h-full"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

export default LayoutGrid