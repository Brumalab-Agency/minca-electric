import { TituloBlog } from '@/components/blog/TituloBlog'
import { HeroBlog } from '@/components/blog/HeroBlog'
import { HeroContext } from '@/components/reusable/HeroContext'
import { Footer } from '@/components/home/Footer'
import { Testimonios } from '@/components/testimonio/Testimonios'
import Whatsapp from '@/components/whatsapp/Whatsapp'

export const metadata = {
  title: {
    template: "Minca Electric | %s",
    default: "Minca Electric | Tendencias",
  },
  description:
    "Descubre un mundo electrizante: blog de Minca, noticias, consejos y aventuras sobre patinetas eléctricas.",
  metadataBase: new URL("https://www.mincaelectric.com/tendencias"),
  alternates: {
    canonical: "/Tendencias",
  },
  openGraph: {
    title: "Tendencias | Actualidad sobre la movilidad eléctrica",
    description:
      "Descubre un mundo electrizante: blog de Minca, noticias, consejos y aventuras sobre patinetas eléctricas.",
    url: "/Tendencias",
    siteName: "Minca Electric",
    images: "/og/Tendencias  Actualidad sobre la movilidad eléctrica.jpg",
    locale: "es_LA",
    type: "website",
  },
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
};

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