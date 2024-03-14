import { Footer } from '@/components/home/Footer'
import { FormularioContacto } from '@/components/contacto/FormularioContacto'
import { IconosContacto } from '@/components/contacto/IconosContacto'
import { HeroContext } from '@/components/reusable/HeroContext'

const Contact = () => {
  return (
    <>
        <HeroContext titulo="Contacto" ocultar="hidden"/>
        <FormularioContacto/>
        <IconosContacto/>
        <Footer/>
    </>
  )
}

export default Contact