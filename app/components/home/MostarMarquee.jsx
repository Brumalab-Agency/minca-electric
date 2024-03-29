"use client";

import { useEffect, useState, useRef } from "react";
import { getBanner } from "@/lib/graphQLRequest";
import { SkeletonBanner } from "./SkeletonBanner";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Banner from "./Marquee";

const MostrarBanner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const referencia = useRef();
  const [parent, enableAnimations] = useAutoAnimate()
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const banner = await getBanner();
        setBannerData(banner[2].node.banner);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setLoading(false); // Si hay un error, también debes establecer loading en false
      }
    };
    fetchData();
  }, []);

  const ocultar = (e) => {
    referencia.current.style.visibility = "hidden";
  };


  return (
    <div ref={referencia} className="bg-black text-white border-b-[1px] border-white">
      <div ref={parent}>
          {loading ? (
            <SkeletonBanner />
          ) : (
            <Banner marquee={bannerData} ocultar={ocultar} />
          )}
      </div>
    </div>
  );
};

export default MostrarBanner;