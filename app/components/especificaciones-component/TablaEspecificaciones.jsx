import { manrope, ubuntu } from "@/ui/fonts";

export const TablaEspecificaciones = () => {
  return (
    <>
    <div className="flex justify-between items-center px-4 lg:px-[96px] lg:mt-[80px] mt-16">
        <div className="lg:w-full"><h2 className="border-b-2 border-[#111] lg:mr-[30px]">Calificación y reseñas</h2></div>
        <div className="lg:w-full"><h2 className="border-b-2 border-[#111]/10 lg:mr-[30px]">Preguntas frecuentes</h2></div>
    </div>
    <div className="overflow-x-auto pb-[72px] lg:pb-[20px] lg:px-[96px]">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mt-8">
    <tbody className="divide-y divide-gray-200">
      <tr className="odd:bg-[#F4F5F0] h-12">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Velocidad máxima</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">30km/h</td>
      </tr>

      <tr className="odd:bg-gray-50 h-16">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Distancia recorrida</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">25/30 km/h</td>
      </tr>

      <tr className="odd:bg-[#F4F5F0] h-12">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Motor</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">350 W</td>
      </tr>
      <tr className="odd:bg-gray-50 h-16">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tamaño de la rueda</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">8 pulgadas</td>
      </tr>

      <tr className="odd:bg-[#F4F5F0] h-12">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Carga máxima</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">90 kg</td>
      </tr>
      <tr className="odd:bg-gray-50 h-16">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tiempo de carga</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">6 hrs</td>
      </tr>

      <tr className="odd:bg-[#F4F5F0] h-12">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Marca</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">Minca</td>
      </tr>
      <tr className="odd:bg-gray-50 h-16">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tipo de la bateria</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">Litio 36V</td>
      </tr>

      <tr className="odd:bg-[#F4F5F0] h-12">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tipo</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">Scooters eléctricos</td>
      </tr>
      <tr className="odd:bg-gray-50 h-16">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tipo de freno</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">Freno de banda trasero</td>
      </tr>

      <tr className="odd:bg-[#F4F5F0] h-12">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Material</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">Aluminio</td>
      </tr>
      <tr className="odd:bg-gray-50 h-16">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Largo</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">110cm</td>
      </tr>

      <tr className="odd:bg-[#F4F5F0] h-12">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Edad mínima recomendada</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">14 años</td>
      </tr>
      <tr className="odd:bg-gray-50 h-16">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Garantía del proveedor</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">1 año</td>
      </tr>

      <tr className="odd:bg-[#F4F5F0] h-12">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Hecho en</td>
        <td className="whitespace-nowrap pr-4 py-2 text-gray-700">China</td>
      </tr>
    </tbody>
  </table>
</div>
    </>
  )
}
