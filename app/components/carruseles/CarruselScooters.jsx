"use client";
import { useState, useEffect, Suspense } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { Scooters } from "../../lib/graphQLRequest";
import Scooter from "./Scooter";
import { SkeletonCarrusel } from "./SkeletonCarrusel";

export function CarruselScooters() {
  const [scooters, setScooters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Scooters();
        if (data.edges.length >= 4) {
          const reordered = [
            data.edges[0],
            data.edges[3],
            data.edges[1],
            data.edges[2],
            ...data.edges.slice(4),
          ];

          setScooters({ ...data, edges: reordered });
        } else {
          setScooters(data);
        }
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
          autoplay={autoplay}
          loop={true}
          className="carrusel-padre relative overflow-x-hidden rounded-xl"
        >
          {scooters.edges.map((scooter, index) => (
            <div key={index}>
              <Scooter scooter={scooter} />
            </div>
          ))}
        </Carousel>
      </Suspense>
    </div>
  );
}
