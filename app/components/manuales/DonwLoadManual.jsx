'use client'

const DonwLoadManual = ({manualMinca, item}) => {

  console.log(manualMinca);
  
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
            className="relative mb-4 flex h-[60px] w-full items-center justify-center rounded-[10px] border-[2px] border-[#111] text-[#111] px-[24px] py-[16px] lg:h-[60px] mt-8"
          >
            {`Manual de usuario ${item?.sliderProductos.nombreProducto}`}
          </button>
    </>
  )
}

export default DonwLoadManual