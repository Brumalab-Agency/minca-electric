import { TituloBlog } from '@/components/blog/TituloBlog'
import { HeroBlog } from '@/components/blog/HeroBlog'
import { HeroContext } from '@/components/reusable/HeroContext'
import { Footer } from '@/components/home/Footer'
import { Testimonios } from '@/components/testimonio/Testimonios'
import Whatsapp from '@/components/whatsapp/Whatsapp'

const Blog = () => {  
  return (
    <>
        <HeroContext titulo="Tendencias" ocultar="hidden"/>
        <HeroBlog/>
        <TituloBlog/>
        <Testimonios />
        <Footer/>
        <Whatsapp/>
    </>
  )
}

export default Blog