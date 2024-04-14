"use client"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const MANIFY_SIZE = 150;
const MAGNIFY_SIZE_HALF = MANIFY_SIZE / 2;


const EfectoLupa = ({ imageUrl, alt }) => {
  const [magnifyStyle, setMagnifyStyle] = useState({
    backgroundImage: `url(${imageUrl})`,
    display: "none",
  });
  const imageRef = useRef(null);

  useEffect(() => {
    setMagnifyStyle((prev) => ({
      ...prev,
      backgroundImage: `url(${imageUrl})`,
    }));
  }, [imageUrl]);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    updateMagnifyStyle(offsetX, offsetY, target);
  };

  const handleMouseLeave = () => {
    setMagnifyStyle((prev) => ({ ...prev, display: "none" }));
  };

  useEffect(() => {
    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const { clientX, clientY } = touch;
      const imageRect = imageRef.current.getBoundingClientRect();
      const offsetX = clientX - imageRect.left;
      const offsetY = clientY - imageRect.top;
      updateMagnifyStyle(offsetX, offsetY, imageRef.current);
    };

    const imageElement = imageRef.current;
    imageElement.addEventListener("touchmove", handleTouchMove);
    return () => {
      imageElement.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const updateMagnifyStyle = (offsetX, offsetY, target) => {
    const { offsetWidth, offsetHeight } = target;
    const xPorcentaje = (offsetX / offsetWidth) * 100;
    const yPorcentaje = (offsetY / offsetHeight) * 100;
    setMagnifyStyle((prev) => ({
      ...prev,
      display: "block",
      top: `${offsetY - 150}px`,
      left: `${offsetX - MAGNIFY_SIZE_HALF}px`,
      backgroundPosition: `${xPorcentaje}% ${yPorcentaje}%`,
    }));
  };

  return (
    <div className="relative ml-2 mr-4 cursor-none rounded-[20px] flex justify-center items-center">
      <Image
        className="h-auto w-[600px] rounded-[20px] bg-[#F0EEED]"
        src={imageUrl}
        alt={alt}
        width={600}
        height={600}
        draggable={false}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={imageRef}
      />
      <div className="magnify" style={magnifyStyle}></div>
    </div>
  );
};

export default EfectoLupa;