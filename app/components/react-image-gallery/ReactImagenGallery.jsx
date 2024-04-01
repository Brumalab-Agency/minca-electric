"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ArrowRightReactImageGallery from "./ArrowRightReactImageGallery";

const ReactImagenGallery = ({scooters}) => {

  const sliderProductos = scooters.edges[0].node.sliderProductos;

  
  const arrayConAlias = [
    { original: sliderProductos.g1.mediaItemUrl, thumbnail: sliderProductos.g1.mediaItemUrl },
    { original: sliderProductos.g2.mediaItemUrl, thumbnail: sliderProductos.g2.mediaItemUrl },
    { original: sliderProductos.g3.mediaItemUrl, thumbnail: sliderProductos.g3.mediaItemUrl },
    { original: sliderProductos.g4.mediaItemUrl, thumbnail: sliderProductos.g4.mediaItemUrl },
    { original: sliderProductos.g5.mediaItemUrl, thumbnail: sliderProductos.g5.mediaItemUrl }
  ];

  


 
  return (
    <div className="m-auto w-full h-auto mb-[100px] lg:mb-0 react-gallery-cambio overflow-hidden">
      <ImageGallery
        items={arrayConAlias}
        showNav={true}
        showFullscreenButton={false}
        thumbnailPosition="bottom"
        showPlayButton={false}
        />
    </div>
  );
};

export default ReactImagenGallery;
