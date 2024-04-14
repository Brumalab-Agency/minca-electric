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
    <div className='text-center mt-[150px] px-[100px] pb-24'>
      <h1 className='text-[62px] font-bold text-left'>Showroom Chico</h1>
      <p className='text-left'>Bienvenido a Nuestro Rincón de la Movilidad Sostenible! Experimenta la Elegancia de la Electricidad en Minca Electric Showroom Chico. Tu Oportunidad de Descubrir el Futuro de la Conducción Está a Solo un Paso. ¡Agenda Tu Test Drive Hoy y Vive el Encanto de los Scooters Eléctricos!</p>
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