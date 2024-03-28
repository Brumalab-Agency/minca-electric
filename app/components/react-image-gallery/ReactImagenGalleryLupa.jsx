"use client";
import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import EfectoLupa from "../efectoLupa/EfectoLupa";

const ReactImagenGalleryLupa = ({ items }) => {


  const [thumbnailPosition, setThumbnailPosition] = useState("left");

  const arrayConAlias = items.galleryImages.nodes.map((objeto) => ({
    original: objeto.mediaItemUrl,
    thumbnail: objeto.mediaItemUrl,
  }));

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
    <div className="lg:ml-[0%] lg.mr-[2%] w-[98%] lg:w-[30vw]">
      <ImageGallery
        items={arrayConAlias}
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

export default ReactImagenGalleryLupa;
