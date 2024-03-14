import { HeroContext } from '@/components/reusable/HeroContext'
import { Footer } from "@/components/home/Footer"
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct"
import { MincaAccesoriosSinSeparador } from "@/components/reusable/MincaAccesoriosSinSeparador"
import { PuedeInteresarte } from "@/components/sigle-product/PuedeInteresarte"
import { EspecificacionesAccesorios } from '@/components/especificaciones-component/EspecificacionesAccesorios'
import { Hotspot } from '@/components/especificaciones-component/Hotspot'

export const SingleAccesorio = () => {
  return (
    <>
        <HeroContext titulo="ACCESORIOS" />
        <EspecificacionesAccesorios/>
        <Hotspot/>
        <HeroVideoSingleProduct titulo="MINCA" tituloSecundarioNegrita="Lifestyle"/>
        <PuedeInteresarte/>
        <hr className="hidden lg:block lg:m-auto lg:w-[90%] border-1"></hr>
        <MincaAccesoriosSinSeparador/>
        <Footer/>
    </>
  )
}

export default SingleAccesorio