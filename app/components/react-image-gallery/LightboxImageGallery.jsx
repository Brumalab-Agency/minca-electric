import React, { useState } from 'react';

const LightboxImageGallery = ({items}) => {
    console.log(items.original);
  const [imgModal, setImgModal] = useState(false);
  const [imgModalSrc, setImgModalSrc] = useState('');
  const [imgModalDesc, setImgModalDesc] = useState('');

  const openModal = (src, desc) => {
    setImgModalSrc(src);
    setImgModalDesc(desc);
    setImgModal(true);
  };

  const closeModal = () => {
    setImgModal(false);
    setImgModalSrc('');
    setImgModalDesc('');
  };

  return (
    <>
      {imgModal && (
        <div
          className="p-2 fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="flex flex-col max-w-3xl max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="z-50">
              <button onClick={closeModal} className="float-right pt-2 pr-2 outline-none focus:outline-none">
                <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </button>
            </div>
            <div className="p-2">
              <img alt={imgModalDesc} className="object-contain h-1/2-screen" src={imgModalSrc} />
              <p>{imgModalDesc}</p>
            </div>
          </div>
        </div>
      )}
      <div className="px-2">
        <div className="flex -mx-2">
          <div className="w-1/6 px-2">
            <div className="bg-[#F0EEED]">
              <a onClick={() => openModal(items[0]?.original, 'Random Image One Description')} className="cursor-pointer">
                <img alt="Placeholder" className="object-fit w-full" src={items[0]?.original} />
              </a>
            </div>
          </div>
          <div className="w-1/6 px-2">
            <div className="bg-[#F0EEED]">
              <a onClick={() => openModal(items[1]?.original, 'Random Image One Description')} className="cursor-pointer">
                <img alt="Placeholder" className="object-fit w-full" src={items[1]?.original} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightboxImageGallery;