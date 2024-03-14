import Image from "next/image";

export const Hotspot = () => {
  return (
    <div className="Hotspot w-full h-[511px] lg:h-[663px] grid place-items-center px-4 bg-[#F4F5F0] lg:mt-[108px] mt-[78px]">
        <Image
                placeholder="empty"
                alt="hotspot"
                className="imgen-hotspot"
                src="/especificaciones-accesorios/casco.png"
                priority={true}
                width={445}
                height={445}
                style={{ objectFit: "cover" }}
              />
    </div>
  )
}
