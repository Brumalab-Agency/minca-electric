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
// Importa los demás componentes de municipios según sea necesario

const CiudadesColombia = ({ handleOnChange, setFormIsValid }) => {
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
    Guajira: "La Guajira",
    Magdalena: "Magdalena",
    Meta: "Meta",
    Narino: "Nariño",
    NorteDeSantander: "Norte de Santander",
    Putumayo: "Putumayo",
    Quindio: "Quindío",
    Risaralda: "Risaralda",
    Santander: "Santander",
    SanAndres: "San Andrés y Providencia",
    Sucre: "Sucre",
    Tolima: "Tolima",
    ValleDelCauca: "Valle del Cauca",
    Vaupes: "Vaupés",
    Vichada: "Vichada",
  };

  const handleCityChange = (event) => {
    const cityValue = event.target.value;
    setSelectedCity(cityValue);

    // Set the selected department based on the selected city
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
    console.log(selectedDepartment)
  };

  const cities = Object.keys(cityDepartmentMapping);

  return (
    <div>
      <div className="flex">
        <h2 className="text-sm leading-7 text-gray-700">
          Selecciona un Departamento
        </h2>
        <Abbr required />
      </div>
      <CitySelect cities={cities} onChange={handleCityChange} />

      {/* Renderiza el componente de municipios correspondiente */}
      {selectedDepartment === "Bolívar" && (
        <Bolivar onChange={handleDepartmentChange} />
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
  );
};

export default CiudadesColombia;
