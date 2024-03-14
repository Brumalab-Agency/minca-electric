import { Footer } from "@/components/home/Footer"
import { EspecificacionesMinca } from "@/components/especificaciones-component/EspecificacionesMinca"
import { HeroContext } from "@/components/reusable/HeroContext"
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct"
import { MincaAccesoriosSinSeparador } from "@/components/reusable/MincaAccesoriosSinSeparador"
import { PuedeInteresarte } from "@/components/sigle-product/PuedeInteresarte"


export const Especificaciones = () => {
  return (
    <div className="Especificaciones">
        <HeroContext titulo="MINCA" tituloNegrita="SCOOTERS"/>
        <EspecificacionesMinca/>
        <HeroVideoSingleProduct titulo="MINCA" tituloSecundarioNegrita="Scooters"/>
        <PuedeInteresarte/>
        <hr className="hidden lg:block lg:m-auto lg:w-[90%] border-1"></hr>
        <MincaAccesoriosSinSeparador/>
        <Footer/>
    </div>
  )
}

export default Especificaciones