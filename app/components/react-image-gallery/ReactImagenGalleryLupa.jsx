"use client";
import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import EfectoLupa from "../efectoLupa/EfectoLupa";
import { FaExpand, FaCompress } from "react-icons/fa";

const CustomFullscreenViewer = ({ renderFullscreenContent, isFullscreen }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }}
  >
    {renderFullscreenContent()}
  </div>
);

const ReactImagenGalleryLupa = ({ items }) => {
  console.log(items);
  const [thumbnailPosition, setThumbnailPosition] = useState("left");
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  const handleFullscreenToggle = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  
  const MyCustomFullscreenButton = ({ onClick }) => {
    const handleClick = () => {
      onClick();
    };
  
    return (
      <div>
        <button
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
          }}
          onClick={handleClick}
        >
        {/*  {isFullscreen ? (
          <FaCompress style={{ color: 'white' }} />
        ) : (
          <FaExpand style={{ color: 'black' }} />
        )} */}
        </button>
      </div>
    );
  };
  

  return (
    <div className="lg.mr-[2%] w-[100%] lg:ml-[0%] lg:w-[50vw]">
      <div className="ImageGallery-pc-accesorios hidden lg:block">
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
      <div className="ImageGallery-movil-accesorios lg:hidden">
        <ImageGallery
          items={arrayConAlias}
          showNav={false}
          renderFullscreenButton={(onClick) => (
            <MyCustomFullscreenButton onClick={onClick} isFullscreen={isFullscreen} />
          )}
          renderFullscreenViewer={CustomFullscreenViewer}
          useBrowserFullscreen={false}
          onScreenChange={handleFullscreenToggle}
          thumbnailPosition={thumbnailPosition}
          showPlayButton={false}
        />
      </div>
    </div>
  );
};

export default ReactImagenGalleryLupa;
