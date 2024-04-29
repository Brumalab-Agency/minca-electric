import { HeroContext } from '@/components/reusable/HeroContext'
import { Footer } from "@/components/home/Footer"
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct"
import { PuedeInteresarte } from "@/components/sigle-product/PuedeInteresarte"
import { EspecificacionesAccesorios } from '@/components/especificaciones-component/EspecificacionesAccesorios'
import { CarruselAccesorios } from '@/components/carruseles/accesorios/CarruselAccesorios'
import { AccesoriosWoocommerce } from '@/lib/graphQLRequest'
import { Testimonios } from '@/components/testimonio/Testimonios'
import Whatsapp from '@/components/whatsapp/Whatsapp'

export let metadata = {
  title: "Accesorios",
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
  icons: {
    icon: "/favicon.png",
  },
};

export const SingleAccesorio = async({params}) => {
  const paths = [
    "Casco_Integral_Minca",
    "Poncho_Minca",
    "Gafas_Minca",
    "On_Guard_U-look",
    "Baúl_Minca",
    "On_Guard_Guaya",
  ];

  let { name } = params;
  decodeURIComponent(name)

  console.log(name)

  if (name === paths[0]) {
    name = "Casco Integral Minca";
  }

  if (name === paths[1]) {
    name = "Poncho Minca";
  }

  if (name === paths[2]) {
    name = "Gafas‎ Minca"; 
  }

  if (name === paths[3]) {
    name = "On Guard U-look";
  }

  if (name === paths[4] || name === "Ba%C3%BAl_Minca") {
    name = "Baúl Minca";
  }

  if (name === paths[5]) {
    name = "On Guard Guaya";
  }

  metadata.title = `Accesorios | ${name}`

  const accesorios = await AccesoriosWoocommerce(name);
  
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