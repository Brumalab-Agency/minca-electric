"use client";

import { useState, useEffect, Suspense } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { Ebikes } from "../../lib/graphQLRequest";
import Ebike from "./Ebike";
import { SkeletonCarrusel } from "./SkeletonCarrusel";
import FlechaSvgComponent from "./FlechaSvgComponent";

export function CarruselEbikes() {
  const [scooters, setScooters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [autoplay, setAutoplay] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Ebikes();
        setScooters(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching scooter data:", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  const handleTouchStart = () => {
    setAutoplay(false);
  };

  const handleTouchEnd = () => {
    setAutoplay(true);
  };

  function useIsMobile() {
    const [isMobile, setIsMobile] = useState("");
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      const handleResize = (e) => setIsMobile(e.matches);
      mediaQuery.addListener(handleResize);
      return () => mediaQuery.removeListener(handleResize);
    }, []);
  
    return isMobile;
  }


  if (loading) {
    return <SkeletonCarrusel />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div
    className="carrusel h-auto w-full"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd} 
    >
      <Suspense fallback={<SkeletonCarrusel />}>
      <Carousel
        
        className="rounded-xl relative overflow-x-hidden carrusel-padre"
      >
        {scooters.map((scooter) => (
          <div key={scooter.node.sliderProductos.imagen.id}>
              <Ebike scooter={scooter} />
          </div>
        ))}
      </Carousel>
        </Suspense>
    </div>
  );
}
