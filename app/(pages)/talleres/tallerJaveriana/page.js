import Loading from '@/(pages)/testdrive/loading'
import SimplyAgendamientoJaveriana from '@/components/simplybook/SimplyAgendamientoJaveriana'
import { Suspense } from 'react'

export const TallerJaveriana
 = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className='text-center'>
        <h1>Bienvenido al Taller de mantenimiento Javeriana</h1>
        <h2>¡Programa tu Mantenimiento Ahora!</h2>
      </div>
      <SimplyAgendamientoJaveriana/>
      </Suspense>
  )
}

export default TallerJaveriana