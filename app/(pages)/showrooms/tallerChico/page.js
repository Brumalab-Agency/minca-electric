import Loading from '@/(pages)/testdrive/loading'
import SimplyAgendamientoChico from '@/components/simplybook/SimplyAgendamientoChico'
import React, { Suspense } from 'react'

export const TallerChico
 = () => {
  return (
    <Suspense fallback={<Loading />}>
        <SimplyAgendamientoChico />
      </Suspense>
  )
}

export default TallerChico