import React from "react";

export const Modal = ({
  clickImage,
  setClickImage,
  handleRotationRight,
  handleRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickImage(null);
    }
  };
  return (
    <div
      className="overlay-modal dismiss fixed left-0 right-0 top-0 flex h-full w-full items-center bg-black bg-opacity-50 cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="overlay-modal dismiss fixed left-0 right-0 top-0 flex h-full w-full items-center bg-black bg-opacity-50 cursor-pointer"
        onClick={handleClick}
      >
        <img src={clickImage} alt="bigger pic" />
        <div onClick={handleRotationLeft} className="overlay-arrows_left">
          <div>
            <img
              src="/Scooter/btn-slider-left-pc.png"
              alt="flecha direccional derecha"
            />
          </div>
        </div>
        <div onClick={handleRotationRight} className="overlay-arrows_right">
          <div>
            <img
              src="/Scooter/btn-slider-left-pc.png"
              alt="flecha direccional derecha"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
