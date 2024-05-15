import { Footer } from '@/components/home/Footer'
import { HeroContext } from '@/components/reusable/HeroContext'
import { HeroVideoSingleProduct } from '@/components/reusable/HeroVideoSingleProduct'
import TestDriveComponent from '@/components/reusable/TestDriveComponent'
import { Testimonios } from '@/components/testimonio/Testimonios'
import Whatsapp from '@/components/whatsapp/Whatsapp'

export const metadata = {
  title: {
    template: "Minca Electric | %s",
    default: "Minca Electric | Test Drive",
  },
  description:
    "¡Prueba la emoción! Reserva tu test drive de una patineta eléctrica Minca.",
  metadataBase: new URL("https://www.mincaelectric.com/testdrive"),
  alternates: {
    canonical: "/TestDrive",
  },
  openGraph: {
    title: "Test drive | Prueba tu patineta eléctrica favorita",
    description:
      "¡Prueba la emoción! Reserva tu test drive de una patineta eléctrica Minca.",
    url: "/TestDrive",
    siteName: "Minca Electric",
    images: "/og/Test drive  Prueba tu patineta eléctrica favorita.jpg",
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


const TestDrive = () => {
  return (
    <>
        <HeroContext titulo="TEST" tituloNegrita="DRIVE" ocultar="hidden"/>
        <HeroVideoSingleProduct titulo="MINCA" tituloSecundarioNegrita="Test drive." clases="capitalize" urlVideo="https://test.mincaelectric.com/wp-content/uploads/2024/04/minca-electric-background.mp4"/>
        <TestDriveComponent/>
        <Testimonios />
        <Footer/>
        <Whatsapp/>
    </>
  )
}

export default TestDrive