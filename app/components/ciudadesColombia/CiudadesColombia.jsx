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
// Importa los demás componentes de municipios según sea necesario

const CiudadesColombia = ({
  handleOnChange,
  setFormIsValid,
  input,
  isShipping,
  errors,
}) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

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

  const handleCityChange = (event) => {
    const cityValue = event.target.value;
    setSelectedCity(cityValue);

    if (cityDepartmentMapping[cityValue]) {
      setSelectedDepartment(cityDepartmentMapping[cityValue]);
    } else {
      setSelectedDepartment("");
    }

    handleOnChange();
    setFormIsValid(cityValue !== "");
  };

  const handleDepartmentChange = (event) => {
    const departmentValue = event.target.value;
    setSelectedDepartment(departmentValue);
    console.log(selectedDepartment);
  };

  const cities = Object.keys(cityDepartmentMapping);
;

  const handleCheckChange = () => {
    setMostrarEmpresa(!mostrarEmpresa);
  };

  return (
    <div>
      <div className="w-full overflow-hidden sm:my-2 md:w-1/2">
        <div className="flex">
          <h2 className="text-sm font-bold leading-7 text-[#111]">
            Departamento
          </h2>
          <Abbr required />
        </div>
        <CitySelect cities={cities} onChange={handleCityChange} />
        <div className="flex">
          <h2 className="text-sm font-bold leading-7 text-[#111] ">Municipio</h2>
          <Abbr required />
        </div>
        {!selectedDepartment && <CampoVacio />}
        {/* Renderiza el componente de municipios correspondiente */}
        {selectedDepartment === "Bolívar" && (
          <Bolivar onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Atlántico" && (
          <Atlantico onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Amazonas" && (
          <Amazonas onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Antioquia" && (
          <Antioquia onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Arauca" && (
          <Arauca onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Boyacá" && (
          <Boyaca onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Caldas" && (
          <Caldas onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Caquetá" && (
          <Caqueta onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Casanare" && (
          <Casanare onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Cauca" && (
          <Cauca onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Cesar" && (
          <Cesar onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Chocó" && (
          <Choco onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Córdoba" && (
          <Cordoba onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Cundinamarca" && (
          <Cundinamarca onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Bogotá" && (
          <Bogota onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Guainía" && (
          <Guainia onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Guaviare" && (
          <Guaviare onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Huila" && (
          <Huila onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "La Guajira" && (
          <Guajira onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Magdalena" && (
          <Magdalena onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Meta" && (
          <Meta onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Nariño" && (
          <Narino onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Norte de Santander" && (
          <NorteDeSantander onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Putumayo" && (
          <Putumayo onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Quindío" && (
          <Quindio onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Risaralda" && (
          <Risaralda onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Santander" && (
          <Santander onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "San Andrés y Providencia" && (
          <SanAndres onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Sucre" && (
          <Sucre onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Tolima" && (
          <Tolima onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Valle del Cauca" && (
          <ValleDelCauca onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Vaupés" && (
          <Vaupes onChange={handleDepartmentChange} />
        )}
        {selectedDepartment === "Vichada" && (
          <Vichada onChange={handleDepartmentChange} />
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
          />
          <div className="flex items-center gap-3">
            <InputField
              name="DireccionSamsung1"
              type="number"
              inputValue={input?.DireccionSamsung1}
              handleOnChange={handleOnChange}
              errors={errors}
              isShipping={isShipping}
              containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
            />
            <span className="text-base font-bold">#</span>
            <InputField
              name="DireccionSamsung2"
              type="number"
              inputValue={input?.DireccionSamsung2}
              handleOnChange={handleOnChange}
              errors={errors}
              isShipping={isShipping}
              containerClassNames="w-full overflow-hidden sm:my-2 md:w-1/2"
            />
            <span className="text-base font-bold">-</span>
            <InputField
              name="DireccionSamsung3"
              type="number"
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

        {selectedDepartment === "Bogotá" && (
          <RecogidaSelection
            handleOnChange={handleOnChange}
          />
        )}
        {selectedDepartment !== "Bogotá" && <CampoVacio />}

        {/*  <RecogidaSelection
          handleShippingFee={handleShippingFee}
          handleOnChange={handleOnChange}
        /> */}

        <hr className="my-8 border-[1px] border-[#111] stroke-black"></hr>
      </div>
    </div>
  );
};

export default CiudadesColombia;
