import BookingWidget from '@/components/simplybook/SimplyBook'
import { Suspense } from 'react'
import Loading from '../loading'

export const ShowroomJaveriana = () => {
  return (
    <div>
    <div className='text-center'>
      <h1 className='text-[62px] font-bold '>Showroom Javeriana</h1>
      <p className='max-w-[600px] m-auto'>Bienvenido a Nuestro Rincón de la Movilidad Sostenible! Experimenta la Elegancia de la Electricidad en Minca Electric Showroom Chico. Tu Oportunidad de Descubrir el Futuro de la Conducción Está a Solo un Paso. ¡Agenda Tu Test Drive Hoy y Vive el Encanto de los Scooters Eléctricos!</p>
    </div>
    <Suspense fallback={<Loading/>}>

    <BookingWidget/>
    </Suspense>
  </div>
  )
}

export default ShowroomJaveriana