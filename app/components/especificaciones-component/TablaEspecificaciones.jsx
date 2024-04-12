import { manrope, ubuntu } from "@/ui/fonts";

export const TablaEspecificaciones = (scooters) => {
  const items = scooters.scooters.scooters.productTypes.nodes[0].products.nodes;

  const item = items[0].sliderProductos;

  return (
    <div>
      <>
        <div className="mt-16 flex items-center justify-between px-4 lg:mt-[80px] lg:pl-[96px]">
          <div className="lg:w-full">
            <h2 className="border-b-2 border-[#111] lg:mr-[30px]">
              Especificaciones
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto pb-[72px] lg:pb-[20px] lg:pl-[96px]">
          <table className="mt-8 min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <tbody className="divide-y divide-gray-200">
              <tr className="h-12 odd:bg-[#F4F5F0]">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Velocidad máxima
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  {item.velocidadNum} km/h
                </td>
              </tr>

              <tr className="h-16 odd:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Distancia recorrida
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  {item.distancia} km/h
                </td>
              </tr>

              <tr className="h-12 odd:bg-[#F4F5F0]">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Motor
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  {item.vatios}
                </td>
              </tr>
              <tr className="h-16 odd:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Tamaño de la rueda
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  {item.tipoRodamiento}
                </td>
              </tr>

              <tr className="h-12 odd:bg-[#F4F5F0]">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Carga máxima
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  {item.peso} kg
                </td>
              </tr>
              <tr className="h-16 odd:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Tiempo de carga
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  6 hrs
                </td>
              </tr>

              <tr className="h-12 odd:bg-[#F4F5F0]">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Marca
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  Minca
                </td>
              </tr>
              <tr className="h-16 odd:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Tipo de la bateria
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  {item.ampere} {item.tipo}
                </td>
              </tr>

              <tr className="h-12 odd:bg-[#F4F5F0]">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Tipo
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  Scooters eléctricos
                </td>
              </tr>
              <tr className="h-16 odd:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Tipo de freno
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  {item.tipofrenos}
                </td>
              </tr>

              <tr className="h-12 odd:bg-[#F4F5F0]">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Material
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  Aluminio
                </td>
              </tr>
              <tr className="h-16 odd:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Largo
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  110cm
                </td>
              </tr>

              <tr className="h-12 odd:bg-[#F4F5F0]">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Edad mínima recomendada
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  14 años
                </td>
              </tr>
              <tr className="h-16 odd:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Garantía del proveedor
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700 w-[70px]">
                  1 año 
                  <p>(Sujeto a revisión semestral o cada 600km)</p>
                </td>
              </tr>

              <tr className="h-12 odd:bg-[#F4F5F0]">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Hecho en
                </td>
                <td className="whitespace-nowrap py-2 pr-4 text-gray-700">
                  China
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};
