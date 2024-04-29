import { Footer } from '@/components/home/Footer'
import { FormularioContacto } from '@/components/contacto/FormularioContacto'
import { IconosContacto } from '@/components/contacto/IconosContacto'
import { HeroContext } from '@/components/reusable/HeroContext'
import Whatsapp from '@/components/whatsapp/Whatsapp'

export const metadata = {
  title: "Minca Electric | Contacto",
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
};

const Contact = () => {
  return (
    <>
        <HeroContext titulo="Contacto" ocultar="hidden"/>
        <FormularioContacto/>
        <IconosContacto/>
        <Footer/>
        <Whatsapp/>
    </>
  )
}

export default Contact