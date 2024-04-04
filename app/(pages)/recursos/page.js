import { Footer } from '@/components/home/Footer'
import { DescargaManual } from '@/components/descarga/DescargaManual'
import { Acordion } from '@/components/reusable/Acordion'
import { HeroContext } from '@/components/reusable/HeroContext'

const Recursos = () => {
  return (
    <>
        <HeroContext titulo="Recursos" ocultar="hidden"/>
        <DescargaManual/>
        <Acordion clase="mb-10"/>
        <Footer/>
    </>
  )
}

export default Recursos