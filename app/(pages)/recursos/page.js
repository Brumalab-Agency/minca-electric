import { Footer } from '@/components/home/Footer'
import { DescargaManual } from '@/components/descarga/DescargaManual'
import { Acordion } from '@/components/reusable/Acordion'
import { HeroContext } from '@/components/reusable/HeroContext'
import { Testimonios } from '@/components/testimonio/Testimonios'
import Whatsapp from '@/components/whatsapp/Whatsapp'

const Recursos = () => {
  return (
    <>
        <HeroContext titulo="Recursos" ocultar="hidden"/>
        <DescargaManual/>
        <Acordion clase="mb-10"/>
        <Testimonios />
        <Footer/>
        <Whatsapp/>
    </>
  )
}

export default Recursos