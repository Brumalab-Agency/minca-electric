import { Footer } from '@/components/home/Footer'
import { HeroContext } from '@/components/reusable/HeroContext'
import { HeroVideoSingleProduct } from '@/components/reusable/HeroVideoSingleProduct'
import TestDriveComponent from '@/components/reusable/TestDriveComponent'


const TestDrive = () => {
  return (
    <>
        <HeroContext titulo="PRUEBA" tituloNegrita="UNA MINCA" />
        <HeroVideoSingleProduct titulo="MINCA" tituloSecundarioNegrita="Test drive." clases="capitalize"/>
        <TestDriveComponent/>
        <Footer/>
    </>
  )
}

export default TestDrive