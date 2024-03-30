"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ReactImagenGallery = ({scooters}) => {

  const sliderProductos = scooters.edges[0].node.sliderProductos;

  
  const arrayConAlias = [
    { original: sliderProductos.g1.mediaItemUrl, thumbnail: sliderProductos.g1.mediaItemUrl },
    { original: sliderProductos.g2.mediaItemUrl, thumbnail: sliderProductos.g2.mediaItemUrl },
    { original: sliderProductos.g3.mediaItemUrl, thumbnail: sliderProductos.g3.mediaItemUrl },
    { original: sliderProductos.g4.mediaItemUrl, thumbnail: sliderProductos.g4.mediaItemUrl },
    { original: sliderProductos.g5.mediaItemUrl, thumbnail: sliderProductos.g5.mediaItemUrl }
  ];

  
/* 
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
  ];
 */

  return (
    <div className="m-auto w-full react-gallery-cambio">
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
