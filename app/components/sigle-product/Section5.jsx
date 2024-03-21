import { manrope, ubuntu } from "../../ui/fonts";

export const Section5 = () => {
  return (
    <div className="carrusel w-auto h-auto lg:h-[618px] p-[54px] lg:px-[100px]">
        <section className="flex justify-around items-center flex-col lg:flex-row w-full h-full">
           <div className="text-center flex justify-center items-center flex-col">
            <img className="w-[137px] h-[137px]" src="/sigleProduct/estilo-de-vida-single-product.png" alt="icono estilo de vida"/>
            <h2 className={`${manrope.className} font-bold text-[26px] mt-[32px]`}>Estilo de vida</h2>
            <p className={`${ubuntu.className} lg:w-[343px] h-auto text-[#42454A] text-base text-center lg:mt-[20px] mt-[11px]`}>Revela la ciudad de una manera única, descubre sus rincones y vibraciones desde una perspectiva más liviana.</p>
           </div>
           <div className="text-center flex justify-center items-center flex-col mt-[50px] lg:mt-0">
            <img className="w-[137px] h-[137px]" src="/sigleProduct/ahorro-single-product.png" alt="icono Ahorro"/>
            <h2 className={`${manrope.className} font-bold text-[26px] mt-[32px]`}>Ahorro</h2>
            <p className={`${ubuntu.className} lg:w-[343px] h-auto text-[#42454A] text-base text-center lg:mt-[20px] mt-[11px]`}>Revela la ciudad de una manera única, descubre sus rincones y vibraciones desde una perspectiva más liviana.</p>
           </div>
           <div className="text-center flex justify-center items-center flex-col mt-[50px] lg:mt-0">
            <img className="w-[137px] h-[137px]" src="/sigleProduct/sostenibilidad-single-product.png" alt="icono sostenibilidad"/>
            <h2 className={`${manrope.className} font-bold text-[26px] mt-[32px]`}>sostenibilidad</h2>
            <p className={`${ubuntu.className} lg:w-[343px] h-auto text-[#42454A] text-base text-center lg:mt-[20px] mt-[11px]`}>Revela la ciudad de una manera única, descubre sus rincones y vibraciones desde una perspectiva más liviana.</p>
           </div>
        </section>
        <hr/>
  </div>
  )
}
