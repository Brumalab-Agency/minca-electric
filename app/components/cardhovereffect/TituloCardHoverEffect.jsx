import { manrope } from '@/ui/fonts'
import React from 'react'

const TituloCardHoverEffect = () => {
  return (
    <div className="-mb-1 w-full bg-[#fff] px-8">
      <div
        className={` ${manrope.className} mx-auto w-full max-w-[1270px] pt-10 text-left text-[32px] font-bold text-black lg:px-10`}
      >
        <h2>Equipo Minca: tu guía profesional</h2>
        <p className="mt-4 text-[28px] font-normal leading-[33px]">
          Nuestro equipo de expertos en movilidad eléctrica está dedicado a
          ofrecerte la mejor experiencia en nuestros showrooms Minca.
        </p>
        <p className="mt-2 text-base font-light">
          Con un conocimiento profundo de nuestras scooters eléctricas y
          accesorios, te guiarán para encontrar la solución perfecta que se
          adapte a tus necesidades y estilo de vida. Su pasión por la innovación
          y la sostenibilidad garantiza que cada visita sea informativa,
          emocionante y llena de posibilidades para tu movilidad eléctrica.
        </p>
      </div>
    </div>
  );
}

export default TituloCardHoverEffect