import { manrope, ubuntu } from "../../ui/fonts";

export const Section4 = () => {
  return (
    <div className="carrusel w-auto h-[571px] lg:h-[618px] px-4 lg:px-[100px] bg-[#F4F5F0] lg:bg-white">
        <section className="lg:flex w-full h-auto lg:h-full bg-[#F4F5F0] grid place-items-center">
            <div className="w-full h-auto lg:h-full">
              <div className="mt-[46px] lg:mt-0 lg:flex justify-center items-center flex-col lg:h-full">
                  <h1 className={`${manrope.className} lg:w-[495px] h-auto lg:font-bold font-light text-[40px] lg:text-[42px] lg:uppercase normal-case lg:leading-[52px] leading-[50px] text-left`}>
                  Detrás de cada pieza hay una función que mejora tu viaje
                  </h1>
                  <p className={`${ubuntu.classname} lg:w-[495px] lg:pr-[50px] lg:h-[140px] text-base leading-[25px] lg:mt-4 mt-[34px]`}>
                  El transporte eléctrico es la respuesta al caos del trancón. Es hora de convertir tus viajes en una experiencia suave y eficiente.
                  </p>
              </div>
            </div>
            <div className="w-full h-auto lg:h-full flex justify-end items-center mt-[34px]">
            <img
              src="/sigleProduct/scooter-single-product2.png"
              alt="scooter"
              className="lg:w-[760px] w-full h-auto object-contain lg:mr-[8%]"
            />
            </div>
        </section>
  </div>
  )
}
