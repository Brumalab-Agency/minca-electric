import BookingWidget from '@/components/simplybook/SimplyBook'
import { Suspense } from 'react'
import Loading from '@/loading'
import { Header } from '@/components/home/Header'
import { Footer } from '@/components/home/Footer'
import Whatsapp from '@/components/whatsapp/Whatsapp'

export const ShowroomChico = () => {
  return (
    <div>
      <Header/>
      <div className="lg:px-[100px] text-center p-4">
        <h1 className="lg:text-[62px] text-[32px] font-bold lg:mt-[155px] text-left">
        Showroom Chico
        </h1>
        <p className="m-auto lg:text-[20px] text-base text-[#111] text-left">
        Bienvenido a Nuestro Rincón de la Movilidad Sostenible! Experimenta la Elegancia de la Electricidad en Minca Electric Showroom Chico. Tu Oportunidad de Descubrir el Futuro de la Conducción Está a Solo un Paso. ¡Agenda Tu Test Drive Hoy y Vive el Encanto de los Scooters Eléctricos!
        </p>
      </div>
    <Suspense fallback={<Loading/>}>

    <BookingWidget/>
    </Suspense>
    <Footer/>
    <Whatsapp/>
  </div>
  )
}

export default ShowroomChico