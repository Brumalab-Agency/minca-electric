"use client";
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

const LightboxComponentScooters = ({ item }) => {
  console.log(item);
  const items = item[0].original;

  console.log(items);

  const [clickImage, setClickImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickImage(item);
  };

  const handleROtationRight = () => {
    const totalLength = items.length;
    let newIndex = currentIndex + 1;

    if (newIndex >= totalLength) {
      newIndex = 0;
    }

    const newUrl = items[newIndex].mediaItemUrl;
    setClickImage(newUrl);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = items.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = items[totalLength - 1].mediaItemUrl;
      setClickImage(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = items.filter((item) => {
      return items.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].mediaItemUrl;
    setClickImage(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="h-auto w-full flex-row-reverse place-items-start lg:flex lg:w-[50%]">
      <div className="grid h-auto w-full lg:ml-4 lg:mr-[50px] lg:flex lg:w-auto">
        {console.log(item)}
        <Image
          placeholder="empty"
          alt={item[0].original}
          className="w-auto rounded-[20px] bg-[#F0EEED] lg:h-[450px] 2xl:h-[650px]"
          src={item[0].original}
          priority={true}
          width={358}
          height={346}
          style={{ objectFit: "cover", cursor: "pointer" }}
          onClick={() => handleClick(item.image, -1)}
        />
      </div>
      <div className="contenedorFlex flex justify-center gap-4 lg:flex-col lg:gap-2">
        <div className="mt-[13px] flex items-center justify-evenly lg:mt-0  lg:justify-between">
          <div>
            <Image
              onClick={() => handleClick(item, index)}
              placeholder="empty"
              alt={item[0].original}
              className="w-auto rounded-[20px] border-2 lg:h-[145px] 2xl:h-[211px]"
              src={item[1].original}
              priority={true}
              width={111}
              height={106}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="mt-[13px] flex items-center justify-evenly lg:mt-0  lg:justify-between">
          <div>
            <Image
              onClick={() => handleClick(item, index)}
              placeholder="empty"
              alt={item[0].original}
              className="w-auto rounded-[20px] border-2 lg:h-[145px] 2xl:h-[211px]"
              src={item[2].original}
              priority={true}
              width={111}
              height={106}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="mt-[13px] flex items-center justify-evenly lg:mt-0  lg:justify-between">
          <div>
            <Image
              onClick={() => handleClick(item, index)}
              placeholder="empty"
              alt={item[0].original}
              className="w-auto rounded-[20px] border-2 lg:h-[145px] 2xl:h-[211px]"
              src={item[3].original}
              priority={true}
              width={111}
              height={106}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      {clickImage && (
        <Modal
          clickImage={clickImage}
          handleROtationRight={handleROtationRight}
          handelRotationLeft={handelRotationLeft}
          setClickImage={setClickImage}
        />
      )}
    </div>
  );
};

export default LightboxComponentScooters;
