import { Footer } from '@/components/home/Footer'
import { HeroContext } from '@/components/reusable/HeroContext'
import { HeroVideoSingleProduct } from '@/components/reusable/HeroVideoSingleProduct'
import TestDriveComponent from '@/components/reusable/TestDriveComponent'


const TestDrive = () => {
  return (
    <>
        <HeroContext titulo="PRUEBA" tituloNegrita="UNA MINCA" />
        <HeroVideoSingleProduct titulo="MINCA" tituloSecundarioNegrita="Test drive." clases="capitalize" urlVideo="https://test.mincaelectric.com/wp-content/uploads/2024/03/Minca-Electric-Carro-o-Scooter_.mp4"/>
        <TestDriveComponent/>
        <Footer/>
    </>
  )
}

export default TestDrive