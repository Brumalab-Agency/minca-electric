"use client"
import React, { useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const MagnifyingGlass = () => {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const galleryRef = useRef(null);

  const handleMouseMove = (event) => {
    if (imageContainerRef.current && imageRef.current && galleryRef.current) {
      const { left: containerLeft, top: containerTop } = imageContainerRef.current.getBoundingClientRect();
      const { left: galleryLeft, top: galleryTop } = galleryRef.current.getBoundingClientRect();
      const { width, height } = imageRef.current.getBoundingClientRect();
      const mouseX = event.clientX - containerLeft - galleryLeft;
      const mouseY = event.clientY - containerTop - galleryTop;
      const zoomX = Math.max(0, Math.min(100, (mouseX / width) * 100));
      const zoomY = Math.max(0, Math.min(100, (mouseY / height) * 100));
      setZoomPosition({ x: zoomX, y: zoomY });
    }
  };

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  const handleClick = () => {
    setIsFullScreenOpen(!isFullScreenOpen);
  };

  const renderItem = (item) => (
    <div
      ref={imageContainerRef}
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        cursor: "zoom-in",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={item.original}
        alt="Magnifying Glass Example"
        style={{ maxWidth: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${item.original})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: showZoom ? "300%" : "100%",
          backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
          pointerEvents: "none",
        }}
      />
    </div>
  );

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div className="w-[90%] lg:w-[50vw] m-auto" ref={galleryRef}>
      <ImageGallery
        items={images}
        showNav={false}
        showFullscreenButton={false}
        thumbnailPosition="left"
        showPlayButton={false}
        onClick={handleClick}
        isFullScreen={isFullScreenOpen}
        renderItem={renderItem}
        
      />
    </div>
  );
};

export default MagnifyingGlass;