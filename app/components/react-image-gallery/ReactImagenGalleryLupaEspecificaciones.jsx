"use client";
import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import EfectoLupa from "../efectoLupa/EfectoLupa";

const ReactImagenGalleryLupaEspecificaciones = ({ items }) => {


  const [thumbnailPosition, setThumbnailPosition] = useState("left");

  const images = [
    {
      original: items?.sliderProductos.foto1.mediaItemUrl,
      thumbnail: items?.sliderProductos.foto1.mediaItemUrl,
    },
    {
      original: items?.sliderProductos.foto2.mediaItemUrl,
      thumbnail: items?.sliderProductos.foto2.mediaItemUrl,
    },
    {
      original: items?.sliderProductos.foto3.mediaItemUrl,
      thumbnail: items?.sliderProductos.foto3.mediaItemUrl,
    },
    {
      original: items?.sliderProductos?.foto4?.mediaItemUrl,
      thumbnail: items?.sliderProductos?.foto4?.mediaItemUrl,
    },
    {
      original: items?.sliderProductos?.foto5?.mediaItemUrl,
      thumbnail: items?.sliderProductos?.foto5?.mediaItemUrl,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setThumbnailPosition("bottom");
      } else {
        setThumbnailPosition("left");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="lg:ml-[0%] lg.mr-[2%] w-[98%] lg:w-[50vw]">
      <ImageGallery
        items={images}
        showNav={false}
        showFullscreenButton={false}
        thumbnailPosition={thumbnailPosition}
        showPlayButton={false}
        renderItem={(item) => (
          <EfectoLupa imageUrl={item.original} alt={item.originalAlt || ""} />
        )}
      />
    </div>
  );
};

export default ReactImagenGalleryLupaEspecificaciones;