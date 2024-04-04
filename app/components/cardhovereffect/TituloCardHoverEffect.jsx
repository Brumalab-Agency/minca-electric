import { manrope } from '@/ui/fonts'
import React from 'react'

const TituloCardHoverEffect = () => {
  return (
    <div className='bg-[#111] px-8 w-full -mb-1'>
        <div className={` ${manrope.className} text-[32px] font-bold text-white w-full pt-10 text-left px-10 max-w-[1270px] mx-auto`}>
            <h2>Equipo Minca: tu guía profesional</h2>
            <p className='text-[30px] leading-[33px] font-normal'>Nuestro equipo de expertos en movilidad eléctrica está dedicado a ofrecerte la mejor experiencia en nuestros showrooms Minca.</p>
            <p className='text-base mt-2 font-light'>Con un conocimiento profundo de nuestras scooters eléctricas y accesorios, te guiarán para encontrar la solución perfecta que se adapte a tus necesidades y estilo de vida. Su pasión por la innovación y la sostenibilidad garantiza que cada visita sea informativa, emocionante y llena de posibilidades para tu movilidad eléctrica.</p>
        </div>
    </div>
  )
}

export default TituloCardHoverEffect