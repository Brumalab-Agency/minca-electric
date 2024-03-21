import Loading from '@/(pages)/testdrive/loading'
import SimplyAgendamientoChico from '@/components/simplybook/SimplyAgendamientoChico'
import React, { Suspense } from 'react'

export const TallerChico
 = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className='text-center'>
        <h1>Bienvenido al Taller de mantenimiento Chico</h1>
        <h2>¡Programa tu Mantenimiento Ahora!</h2>
      </div>
        <SimplyAgendamientoChico />
      </Suspense>
  )
}

export default TallerChico