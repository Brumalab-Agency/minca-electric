"use client"
import { useState, useRef, useEffect } from "react";

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
      top: `${offsetY - 200}px`,
      left: `${offsetX - 200}px`,
      backgroundPosition: `${xPorcentaje}% ${yPorcentaje}%`,
    }));
  };

  return (
    <div className="relative ml-2 mr-4  rounded-[20px] flex justify-center items-center">
      <img
        className="h-auto w-[600px] rounded-[20px] bg-[#F0EEED]"
        src={imageUrl}
        alt={alt}
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