import React from "react";

export const Modal = ({
  clickImage,
  setClickImage,
  handleROtationRight,
  handelRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickImage(null);
    }
  };
  return (
    <div
      className="overlay-modal dismiss fixed left-0 right-0 top-0 flex h-full w-full items-center bg-black bg-opacity-50"
      onClick={handleClick}
    >
      <div
        className="overlay-modal dismiss fixed left-0 right-0 top-0 flex h-full w-full items-center bg-black bg-opacity-50"
        onClick={handleClick}
      >
        <img src={clickImage} alt="bigger pic" />
        <div onClick={handelRotationLeft} className="overlay-arrows_left">
          <div>
            <img
              src="/Scooter/btn-slider-left-pc.png"
              alt="flecha direccional derecha"
            />
          </div>
        </div>
        <div onClick={handleROtationRight} className="overlay-arrows_right">
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
