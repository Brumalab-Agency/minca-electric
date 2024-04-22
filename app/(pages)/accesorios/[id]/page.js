import { HeroContext } from '@/components/reusable/HeroContext'
import { Footer } from "@/components/home/Footer"
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct"
import { PuedeInteresarte } from "@/components/sigle-product/PuedeInteresarte"
import { EspecificacionesAccesorios } from '@/components/especificaciones-component/EspecificacionesAccesorios'
import { CarruselAccesorios } from '@/components/carruseles/accesorios/CarruselAccesorios'
import { AccesoriosWoocommerce } from '@/lib/graphQLRequest'
import { Testimonios } from '@/components/testimonio/Testimonios'
import Whatsapp from '@/components/whatsapp/Whatsapp'

export const metadata = {
  title: "Accesorios",
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
  icons: {
    icon: "/favicon.png",
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
        <Testimonios />
        <Footer/>
        <Whatsapp/>
    </>
  )
}

export default SingleAccesorio