import Minca1600hs from "../hotSpotScooters/Minca1600hs";
import Minca350hs from "../hotSpotScooters/Minca350hs";
import Minca800hs from "../hotSpotScooters/Minca800hs";
import Minca500hs from "../hotSpotScooters/Minca500hs";

const componentesPorProducto = {
  "Minca 350W": Minca350hs,
  "Minca 500W": Minca500hs,
  "Minca 800W": Minca800hs,
  "Minca 1600W": Minca1600hs,
};

export const HotSpot = (scooters) => {
  const result = scooters.scooters.edges[0].node.sliderProductos.nombreProducto;
  const minca = result.trim().replace(/[^\w\s]/gi, "");
  const ComponenteScooter = componentesPorProducto[minca];
  if (!ComponenteScooter) {
    console.log(`No se encontró un componente para el producto: ${minca}`);
    return null;
  }

  return <ComponenteScooter />;
};
