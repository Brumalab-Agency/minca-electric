"use client";

const DonwLoadManual = ({ manualMinca, item }) => {
  const downLoad = (url) => {
    const filename = url.split("/").pop();
    const element = document.createElement("a");
    element.href = url;
    element.download = filename;
    element.target = "_blank";
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  return (
    <>
      <button
        onClick={() => {
          downLoad(manualMinca);
        }}
        value="download"
        className="my-3 h-[52px] w-full rounded-[62px] bg-[#111] text-[16px] text-white lg:w-[210px]"
      >
        {`Manual de usuario `}
      </button>
    </>
  );
};

export default DonwLoadManual;
