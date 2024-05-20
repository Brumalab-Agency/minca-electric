"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./LayoutGrid";

export function LayoutGridInfo
(scooter_name) {
  const selected_cards = [];
  cards.map((card) => {
    if (scooter_name.scooter_name === card.title) {
      selected_cards.push(card);
    }
  });
  return (
    <div className="lg:h-[750px] py-20 w-full relative">
      <LayoutGrid cards={selected_cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      {/* <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p> */}
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      {/* <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p> */}
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="contenedor-cardGridLayout">
      <p className="text-[35px] text-end absolute top-0 right-0">X</p>
      {/* <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p> */}
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
     {/*  <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p> */}
    </div>
  );
};

const cards = [
  {
    id: 1,
    title: "Minca 350W",
    thumbnails: "/sigleProduct/minca-350/layout2.png",
    content: <SkeletonOne />,
    className: "md:col-span-2 object-contain lg:object-cover",
  },
  {
    id: 2,
    title: "Minca 350W",
    thumbnails: "/sigleProduct/minca-350/minca electric patineta llanta.png",
    content: <SkeletonTwo />,
    className: "col-span-1 object-contain object-right",
  },
  {
    id: 3,
    title: "Minca 350W",
    thumbnails: "/sigleProduct/minca-350/minca electric patineta manubrio.png",
    content: <SkeletonThree />,
    className: "col-span-1 object-contain",
  },
  {
    id: 4,
    title: "Minca 350W",
    thumbnails: "/sigleProduct/minca-350/minca electric patineta plegada.png",
    content: <SkeletonFour />,
    className: "md:col-span-2 object-contain",
  },
  {
    id: 1,
    title: "Minca 500W‎",
    thumbnails: "/sigleProduct/minca-500/minca electric patineta.png",
    content: <SkeletonOne />,
    className: "md:col-span-2 object-contain lg:object-cover",
  },
  {
    id: 2,
    title: "Minca 500W‎",
    thumbnails: "/sigleProduct/minca-500/minca electric patineta llanta.png",
    content: <SkeletonTwo />,
    className: "col-span-1 object-contain object-right",
  },
  {
    id: 3,
    title: "Minca 500W‎",
    thumbnails: "/sigleProduct/minca-500/minca electric patineta manubrio.png",
    content: <SkeletonThree />,
    className: "col-span-1 object-contain",
  },
  {
    id: 4,
    title: "Minca 500W‎",
    thumbnails: "/sigleProduct/minca-500/minca electric patineta plegada.png",
    content: <SkeletonFour />,
    className: "md:col-span-2 object-contain",
  },
  {
    id: 1,
    title: "Minca 800W‎‎",
    thumbnails: "/sigleProduct/minca-800/minca electric patineta.png",
    content: <SkeletonOne />,
    className: "md:col-span-2 object-contain lg:object-cover",
  },
  {
    id: 2,
    title: "Minca 800W‎‎",
    thumbnails: "/sigleProduct/minca-800/minca electric patineta llanta.png",
    content: <SkeletonTwo />,
    className: "col-span-1 object-contain object-right",
  },
  {
    id: 3,
    title: "Minca 800W‎‎",
    thumbnails: "/sigleProduct/minca-800/minca electric patineta manubrio.png",
    content: <SkeletonThree />,
    className: "col-span-1 object-contain",
  },
  {
    id: 4,
    title: "Minca 800W‎‎",
    thumbnails: "/sigleProduct/minca-800/minca electric patineta plegada.png",
    content: <SkeletonFour />,
    className: "md:col-span-2 object-contain",
  },
  {
    id: 1,
    title: "Minca 1600W‎",
    thumbnails: "/sigleProduct/minca-1600/minca electric patineta.png",
    content: <SkeletonOne />,
    className: "md:col-span-2 object-contain lg:object-cover",
  },
  {
    id: 2,
    title: "Minca 1600W‎",
    thumbnails: "/sigleProduct/minca-1600/minca electric patineta llanta.png",
    content: <SkeletonTwo />,
    className: "col-span-1 object-contain object-right",
  },
  {
    id: 3,
    title: "Minca 1600W‎",
    thumbnails: "/sigleProduct/minca-1600/minca electric patineta manubrio.png",
    content: <SkeletonThree />,
    className: "col-span-1 object-contain",
  },
  {
    id: 4,
    title: "Minca 1600W‎",
    thumbnails: "/sigleProduct/minca-1600/minca electric patineta plegada.png",
    content: <SkeletonFour />,
    className: "md:col-span-2 object-contain",
  },
];