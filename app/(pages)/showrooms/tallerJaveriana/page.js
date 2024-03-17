import Loading from '@/(pages)/testdrive/loading'
import SimplyAgendamientoJaveriana from '@/components/simplybook/SimplyAgendamientoJaveriana'
import { Suspense } from 'react'

export const TallerJaveriana
 = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SimplyAgendamientoJaveriana/>
      </Suspense>
  )
}

export default TallerJaveriana