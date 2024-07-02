import { Scooters } from "@/lib/graphQLRequest";
import Scooter from "../carruseles/Scooter";
import Minca1600hs from "../hotSpotScooters/Minca1600hs";
import Minca350hs from "../hotSpotScooters/Minca350hs";
import Minca800hs from "../hotSpotScooters/Minca800hs";
import Minca500hs from "../hotSpotScooters/Minca500hs";

export const HotSpotEspecificaciones = (scooters) => {
  const componentesPorProducto = {
    "Scooter Elctrico Minca 350W": Minca350hs,
    "Scooter Elctrico MINCA 500W": Minca500hs,
    "Scooter Elctrico MINCA 800W": Minca800hs,
    "Scooter Elctrico MINCA 1600W": Minca1600hs,
  };

  const result =
    scooters.scooters.productTypes.nodes[0].products.nodes[0].sliderProductos
      .nombreProducto;

  const minca = result.trim().replace(/[^\w\s]/gi, "");
  const ComponenteScooter = componentesPorProducto[minca];

  if (!ComponenteScooter) {
    console.log(`No se encontró un componente para el producto: ${minca}`);
    return null;
  }

  return <ComponenteScooter />;
};
