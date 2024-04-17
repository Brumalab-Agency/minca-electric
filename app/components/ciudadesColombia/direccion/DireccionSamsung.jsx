import ArrowDown from '@/components/checkout/iconCheckOut/ArrowDown';
import React from 'react';

const DireccionSamsung = ({ onChange }) => {
  const options = [
    "Anillo", "Autopista", "Avenida", "Barrio", "Bloque", "Calle", "Calzada", "Camino",
    "Carrera", "Carretera", "Carril", "Caserío", "Cerro", "Circular", "Circunvalar",
    "Ciudadela", "Clínica", "Corregimiento", "Diagonal", "Finca", "Hacienda", "Lote",
    "Manzana", "Parcela", "Ramal", "Ruta", "Sector", "Sendero", "Terminal", "Terminal de Transporte",
    "Trasversal", "Unidad", "Urbanización", "Variante", "Vereda", "Vía", "Zona", "Zona Comercial",
    "Zona Franca", "Zona Industrial"
  ];

  return (
    <div className='relative sm:mb-2 md:w-1/2 mb-4'>
        <select
          data-automation-id="address.line2"
          id="DireccionSamsungTipoVivienda"
          name="DireccionSamsungTipoVivienda"
          className="w-full select2-hidden-accessible inline-block appearance-none rounded border border-[#F0F1EB] bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500 font-light text-[14px]"
          onChange={onChange}
          required
        >
          <option value="" disabled selected>
            Por favor seleccione
          </option>
          {options.map((option, index) => (
            <option key={index} value={option} data-information={option}>
              {option}
            </option>
          ))}
        </select>
        <span
          className="absolute right-0 mr-1 text-[#111]"
          style={{ top: "25%" }}
        >
          <ArrowDown width={24} height={24} className="fill-current" />
        </span>
    </div>
  );
};

export default DireccionSamsung;
