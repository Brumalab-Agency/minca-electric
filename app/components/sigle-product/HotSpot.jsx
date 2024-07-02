import Minca1600hs from "../hotSpotScooters/Minca1600hs";
import Minca350hs from "../hotSpotScooters/Minca350hs";
import Minca800hs from "../hotSpotScooters/Minca800hs";

const componentesPorProducto = {
  "Minca 350W": Minca350hs,
  "Minca 800W": Minca800hs,
  "Minca 1600W": Minca1600hs,
  // Agrega más productos aquí si es necesario
};

export const HotSpot = (scooters) => {
  const result = scooters.scooters.edges[0].node.sliderProductos.nombreProducto;
  const minca = result.trim().replace(/[^\w\s]/gi, "");

console.log(minca);
  const ComponenteScooter = componentesPorProducto[minca];

  if (!ComponenteScooter) {
    console.log(`No se encontró un componente para el producto: ${minca}`);
    return null;
  }

  return <ComponenteScooter />;
};