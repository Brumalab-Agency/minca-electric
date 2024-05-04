import React, { useState } from "react";
import CitySelect from "./CitySelect";
import Abbr from "../checkout/fomr-elements/Abbr";
import Bolivar from "./municipios/Bolivar"; // Importa el componente de municipios
import Amazonas from "./municipios/Amazonas";
import Antioquia from "./municipios/Antioquia";
import Arauca from "./municipios/Arauca";
import Boyaca from "./municipios/Boyaca";
import Caldas from "./municipios/Caldas";
import Caqueta from "./municipios/Caqueta";
import Casanare from "./municipios/Casanare";
import Cauca from "./municipios/Cauca";
import Cesar from "./municipios/Cesar";
import Choco from "./municipios/Choco";
import Cordoba from "./municipios/Cordoba";
import Cundinamarca from "./municipios/Cundinamarca";
import Bogota from "./municipios/Bogota";
import Guainia from "./municipios/Guania";
import Guaviare from "./municipios/Guaviare";
import Huila from "./municipios/Huila";
import Guajira from "./municipios/Guajira";
import Magdalena from "./municipios/Magdalena";
import Meta from "./municipios/Meta";
import Narino from "./municipios/Narino";
import NorteDeSantander from "./municipios/NorteDeSantander";
import Putumayo from "./municipios/Putumayo";
import Quindio from "./municipios/Quindio";
import Risaralda from "./municipios/Risaralda";
import Santander from "./municipios/Santander";
import SanAndres from "./municipios/SanAndres";
import Sucre from "./municipios/Sucre";
import Tolima from "./municipios/Tolima";
import ValleDelCauca from "./municipios/ValleDelCauca";
import Vaupes from "./municipios/Vapues";
import Vichada from "./municipios/Vichada";
import Atlantico from "./municipios/Atlantico";
import CampoVacio from "./municipios/CampoVacio";
import DireccionSamsung from "./direccion/DireccionSamsung";
import InputField from "../checkout/fomr-elements/InputField";
import TipoViviendaSamsung from "./direccion/TipoViviendaSamsung";
import RecogidaSelection from "../checkout/Recogida";
import Envio from "../checkout/Envio";
import useShowroomStore from "@/store/orden.store";
import useDepartmentStore from "@/store/department.store";

// El componete es el mismo de CiudadesColombia pero con el enfoque de solo a motivos de facturación
// es decir no para aplicar cargos adicionales

const CiudadesColombiaShowrooms = ({
  handleOnChange,
  setFormIsValid,
  input,
  isShipping,
  errors,
}) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDepartment, setSelectedDepartmentOption] = useState("");
  const [selectedPrefijo, setPrefijo] = useState("");
  const [selectedLivingType, setLivingType] = useState("");
  const setSelectedDepartment = useDepartmentStore((state) => state.setSelectedDepartment);

  const cityDepartmentMapping = {
    Amazonas: "Amazonas",
    Antioquia: "Antioquia",
    Arauca: "Arauca",
    Atlántico: "Atlántico",
    Bolívar: "Bolívar",
    Boyacá: "Boyacá",
    Caldas: "Caldas",
    Caquetá: "Caquetá",
    Casanare: "Casanare",
    Cauca: "Cauca",
    Cesar: "Cesar",
    Chocó: "Chocó",
    Córdoba: "Córdoba",
    Cundinamarca: "Cundinamarca",
    Bogotá: "Bogotá",
    Guainía: "Guainía",
    Guaviare: "Guaviare",
    Huila: "Huila",
    "La Guajira": "La Guajira",
    Magdalena: "Magdalena",
    Meta: "Meta",
    Narino: "Nariño",
    "Norte de Santander": "Norte de Santander",
    Putumayo: "Putumayo",
    Quindio: "Quindío",
    Risaralda: "Risaralda",
    Santander: "Santander",
    "San Andrés y Providencia": "San Andrés y Providencia",
    Sucre: "Sucre",
    Tolima: "Tolima",
    "Valle del Cauca": "Valle del Cauca",
    Vaupes: "Vaupés",
    Vichada: "Vichada",
  };

  const handleDepartmentChange = (event) => {
    const departmentValue = event.target.value;
    setSelectedCity(departmentValue);
    setSelectedDepartmentOption(departmentValue)
    setSelectedDepartment(departmentValue)
  };

  const handleCityChange = (event) => {
    const cityValue = event.target.value;
    setSelectedCity(cityValue);
  };

  const handlePrefijoChange = (event) => {
    const prefijo = event.target.value;
    setPrefijo(prefijo);

  }

  const handleLivingType = (event) => {
    const typeValue = event.target.value;
    setLivingType(typeValue);
  }

  sessionStorage.setItem("City", selectedCity);
  sessionStorage.setItem("Department", selectedDepartment);
  sessionStorage.setItem("Prefijo", selectedPrefijo)
  sessionStorage.setItem("LivingType", selectedLivingType)

  const departments = Object.keys(cityDepartmentMapping);
;

  /* const handleCheckChange = () => {
    setMostrarEmpresa(!mostrarEmpresa);
  };
 */
  return (
    <div>
      <div className="w-full overflow-hidden sm:my-2 md:w-1/2">
        <div className="flex">
          <h2 className="text-sm font-bold leading-7 text-[#111]">
            Departamento
          </h2>
          <Abbr required />
        </div>
        <CitySelect 
          departments={departments} 
          onChange={handleDepartmentChange}/>
        <div className="flex">
          <h2 className="text-sm font-bold leading-7 text-[#111] ">Municipio</h2>
          <Abbr required />
        </div>
        {!selectedDepartment && <CampoVacio />}
        {/* Renderiza el componente de municipios correspondiente */}
        {selectedDepartment === "Bolívar" && (
          <Bolivar onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Atlántico" && (
          <Atlantico onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Amazonas" && (
          <Amazonas onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Antioquia" && (
          <Antioquia onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Arauca" && (
          <Arauca onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Boyacá" && (
          <Boyaca onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Caldas" && (
          <Caldas onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Caquetá" && (
          <Caqueta onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Casanare" && (
          <Casanare onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Cauca" && (
          <Cauca onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Cesar" && (
          <Cesar onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Chocó" && (
          <Choco onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Córdoba" && (
          <Cordoba onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Cundinamarca" && (
          <Cundinamarca onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Bogotá" && (
          <Bogota onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Guainía" && (
          <Guainia onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Guaviare" && (
          <Guaviare onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Huila" && (
          <Huila onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "La Guajira" && (
          <Guajira onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Magdalena" && (
          <Magdalena onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Meta" && (
          <Meta onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Nariño" && (
          <Narino onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Norte de Santander" && (
          <NorteDeSantander onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Putumayo" && (
          <Putumayo onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Quindío" && (
          <Quindio onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Risaralda" && (
          <Risaralda onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Santander" && (
          <Santander onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "San Andrés y Providencia" && (
          <SanAndres onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Sucre" && (
          <Sucre onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Tolima" && (
          <Tolima onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Valle del Cauca" && (
          <ValleDelCauca onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Vaupés" && (
          <Vaupes onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
        {selectedDepartment === "Vichada" && (
          <Vichada onChange={handleCityChange} inputValue={input?.Ciudad}/>
        )}
      </div>
      {/* El resto de campos el ¿porque se hizo asi?  es por requerimiento de que el campo de seleccion de envio coincida con la opción que el cliente tome al seleccionar una Ciudad*/}
      <div>
        <div className="flex">
          <h2 className="text-sm font-bold leading-7 text-[#111]">Dirección</h2>
          <Abbr required />
        </div>
        <div className="relative w-full overflow-hidden mb-4">
          <DireccionSamsung
            inputValue={input?.CiudadesColombia}
            handleOnChange={handleOnChange}
            setFormIsValid={setFormIsValid}
            isShipping={isShipping}
            onChange={handlePrefijoChange}
          />
          <div className="flex items-center gap-3">
            <InputField
              name="DireccionSamsung1"
              type="text"
              inputValue={input?.DireccionSamsung1}
              handleOnChange={handleOnChange}
              errors={errors}
              isShipping={isShipping}
              containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
            />
            <span className="text-base font-bold">#</span>
            <InputField
              name="DireccionSamsung2"
              type="text"
              inputValue={input?.DireccionSamsung2}
              handleOnChange={handleOnChange}
              errors={errors}
              isShipping={isShipping}
              containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
            />
            <span className="text-base font-bold">-</span>
            <InputField
              name="DireccionSamsung3"
              type="text"
              inputValue={input?.DireccionSamsung3}
              handleOnChange={handleOnChange}
              errors={errors}
              isShipping={isShipping}
              containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <InputField
            name="Barrio"
            type="text"
            label="Barrio"
            required
            inputValue={input?.Barrio}
            handleOnChange={handleOnChange}
            errors={errors}
            isShipping={isShipping}
            containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
          />
          <div className="mb-4 w-full overflow-hidden sm:my-2 md:w-1/2">
            <div className="flex">
              <h2 className="text-sm font-bold leading-7 text-[#111]">
                Tipo de Inmueble
              </h2>
              <Abbr required />
            </div>
            <TipoViviendaSamsung
              inputValue={input?.TipoViviendaSamsung}
              handleOnChange={handleOnChange}
              setFormIsValid={setFormIsValid}
              isShipping={isShipping}
              onChange={handleLivingType}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="mb-4 w-full overflow-hidden sm:my-2 md:w-1/2">
            <div className="flex">
              <h2 className="text-sm font-bold leading-7 text-[#111]">
                Nombre de la persona que recibe
              </h2>
              <Abbr required />
            </div>
            <InputField
              name="Quienrecibe"
              type="text"
              label=""
              inputValue={input?.Quienrecibe}
              handleOnChange={handleOnChange}
              errors={errors}
              isShipping={isShipping}
              containerClassNames="w-full overflow-hidden sm:my-2"
            />
          </div>
          <div className="mb-4 w-full overflow-hidden sm:my-2 md:w-1/2">
            <div className="flex">
              <h2 className="text-sm font-bold leading-7 text-[#111]">
                Teléfono celular (Persona receptora)
              </h2>
              <Abbr required />
            </div>
            <InputField
              name="Receptor"
              type="tel"
              label=""
              inputValue={input?.Receptor}
              handleOnChange={handleOnChange}
              errors={errors}
              isShipping={isShipping}
              containerClassNames="w-full overflow-hidden sm:my-2"
            />
          </div>
        </div>

        <InputField
          name="Referencia"
          type="text"
          label="Lugar de referencia: calle , lugar o punto de
          indicación para encontrar tu direccion (opcional)"
          inputValue={input?.Referencia}
          handleOnChange={handleOnChange}
          errors={errors}
          isShipping={isShipping}
          containerClassNames="w-full overflow-hidden sm:my-2 mb-4"
          classLabel="w-full lg:w-[60%] block 2xl:w-[43%]"
        />

        {/* {selectedDepartment === "Bogotá" && (
          <RecogidaSelection
            handleOnChange={handleOnChange}
          />
        )}
        {selectedDepartment !== "Bogotá" && <Envio handleOnChange={handleOnChange}/>} */}


        <hr className="mt-20 mb-10 border-[1px] border-[#111] stroke-black"></hr>
      </div>
    </div>
  );
};

export default CiudadesColombiaShowrooms;
