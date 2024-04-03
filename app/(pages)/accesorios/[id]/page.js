import { HeroContext } from '@/components/reusable/HeroContext'
import { Footer } from "@/components/home/Footer"
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct"
import { PuedeInteresarte } from "@/components/sigle-product/PuedeInteresarte"
import { EspecificacionesAccesorios } from '@/components/especificaciones-component/EspecificacionesAccesorios'
import { CarruselAccesorios } from '@/components/carruseles/accesorios/CarruselAccesorios'
import { AccesoriosWoocommerce } from '@/lib/graphQLRequest'
import HotSpotAccesorios from '@/components/especificaciones-component/HotSpotAccesorios'
import NextBreadcrumb from '@/components/breadcrumb/NextBreadcrumb'

export const metadata = {
  title: "Accesorios",
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const SingleAccesorio = async({params}) => {
  const { id } = params;
  const accesorios = await AccesoriosWoocommerce(decodeURIComponent(id));
  

  return (
    <>
        <HeroContext titulo="ACCESORIOS" />
        <EspecificacionesAccesorios accesorios={accesorios}/>
        <HeroVideoSingleProduct titulo="MINCA" tituloSecundarioNegrita="Lifestyle" urlVideo="https://test.mincaelectric.com/wp-content/uploads/2024/03/Minca-Electric-Carro-o-Scooter_.mp4"/>
        <PuedeInteresarte/>
        <hr className="hidden lg:block lg:m-auto lg:w-[90%] border-1"></hr>
        <CarruselAccesorios/>
        <Footer/>
    </>
  )
}

export default SingleAccesorio