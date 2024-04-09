import React from 'react';
import Abbr from '../checkout/fomr-elements/Abbr';
import ArrowDown from '../checkout/iconCheckOut/ArrowDown';

const LocalidadesColombia = () => {
  const cities = [
    "Abejorral", "Abriaqui", "Alejandria", "Altamira", "Amaga", "Amalfi", "Andes", "Angelopolis", "Angostura", "Anori",
    "Anza", "Apartadó", "Arboletes", "Argelia", "Armenia mantequilla", "Barbosa", "Bello", "Belmira", "Betania", "Betulia",
    "Bolombolo", "Briceño", "Buritica", "Cáceres", "Caicedo", "Caldas", "Campamento", "Cañasgordas", "Caracolí", "Caramanta",
    "Carepa", "Carolina del principe", "Caucasia", "Chigorodo", "Cisneros", "Ciudad bolivar", "Cocorna", "Concepcion", "Concordia",
    "Copacabana", "Currulao", "Dabeiba", "Donmatias", "Doradal", "Ebéjico", "El bagre", "El carmen de viboral", "El doce",
    "El peñol", "El santuario", "El tigre", "El tres", "Entrerrios", "Envigado", "Fredonia", "Frontino", "Giraldo", "Girardota",
    "Gomez plata", "Granada", "Guadalupe", "Guarne", "Guatape", "Heliconia", "Hispania", "Itagui", "Ituango", "Jardin caceres",
    "Jardin suroeste", "Jerico", "La ceja", "La cruzada", "La estrella", "La pintada", "La sierra", "La tablaza", "La union",
    "Liborina", "Llanadas", "Llanos de cuivá", "Maceo", "Marinilla", "Medellín", "Montebello", "Murindo", "Mutata", "Nariño",
    "Nechi", "Necocli", "Nueva colonia", "Olaya", "Palermo", "Palmitas", "Peque", "Pueblorrico", "Puerto belgica", "Puerto berrio",
    "Puerto nare", "Puerto triunfo", "Puerto valdivia", "Remedios", "Retiro", "Rionegro", "Sabanalarga", "Sabaneta", "Salgar",
    "San andres de cuerquia", "San antonio de prado", "San carlos", "San francisco", "San jeronimo", "San jose de la montaña",
    "San jose del nus", "San juan de uraba", "San luis", "San miguel", "San pedro de los milagros", "San pedro de uraba",
    "San rafael", "San roque", "Santa barbara", "Santa elena", "Santa fe de antioquia", "Santa isabell", "Santa rosa de osos",
    "Santiago", "Santo domingo", "San vicente", "Segovia", "Sevilla", "Sonson", "Sopetran", "Tamesis", "Taraza", "Tarso",
    "Titiribi", "Toledo", "Turbo", "Uramita", "Urrao", "Valdivia", "Valparaiso", "Vegachi", "Venecia", "Versalles", "Yali",
    "Vigía del fuerte", "Yarumal", "Yolombo"
  ];

  const handleOnChange = () => {
    // Tu lógica de cambio aquí
  };

  return (
    <div className="mb-3">
      <label className="text-sm leading-7 text-gray-700" htmlFor="billing_city">
      Selecciona una Localidad/Ciudad
        <Abbr required />
      </label>
      <div className="relative w-full border-none">
        <select
          name="Ciudad"
          onChange={handleOnChange}
          className="inline-block w-full appearance-none rounded border border-[#F0F1EB] bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"
          id="billing_city"
        >
          <option value="">Localidad/Ciudad...</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
        <span className="absolute right-0 mr-1 text-gray-500" style={{ top: "25%" }}>
          <ArrowDown width={24} height={24} className="fill-current" />
        </span>
      </div>
    </div>
  );
};

export default LocalidadesColombia;
