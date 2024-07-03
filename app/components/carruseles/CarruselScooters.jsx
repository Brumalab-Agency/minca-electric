"use client";
import { useState, useEffect, useRef } from "react";
import { Scooters } from "../../lib/graphQLRequest";
import Scooter from "./Scooter";
import { SkeletonCarrusel } from "./SkeletonCarrusel";

export function CarruselScooters() {
  const [scooters, setScooters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [autoplay, setAutoplay] = useState(false); // Inicia sin autoplay
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const autoplayInterval = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setAutoplay(true);
      } else {
        setAutoplay(false);
        stopAutoplay();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      stopAutoplay();
    };
  }, []);

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

    if (autoplay) {
      startAutoplay();
    }

    return () => {
      stopAutoplay();
    };
  }, [autoplay]);

  const startAutoplay = () => {
    autoplayInterval.current = setInterval(() => {
      if (!isDragging.current) {
        scrollNext();
      }
    }, 8000);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayInterval.current);
  };

  const scrollNext = () => {
    const cardWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
    if (
      carouselRef.current.scrollLeft >=
      carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
    ) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    stopAutoplay();
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      alignToCard();
    }
    if (autoplay) {
      startAutoplay();
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    alignToCard();
    if (autoplay) {
      startAutoplay();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    stopAutoplay();
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    alignToCard();
    if (autoplay) {
      startAutoplay();
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Ajustar la velocidad del scroll
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const alignToCard = () => {
    const cardWidth = carouselRef.current.offsetWidth;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardIndex = Math.round(scrollLeft / cardWidth);
    carouselRef.current.scrollTo({
      left: cardIndex * cardWidth,
      behavior: "smooth",
    });
  };

  if (loading) {
    return <SkeletonCarrusel />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div
      className="carrusel relative h-auto w-full overflow-hidden"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <div className="carrusel-padre flex">
        {scooters.edges.map((scooter, index) => (
          <div key={index} className="min-w-full">
            <Scooter scooter={scooter} />
          </div>
        ))}
      </div>
    </div>
  );
}
