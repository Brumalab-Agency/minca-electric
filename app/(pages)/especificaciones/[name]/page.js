import { Footer } from "@/components/home/Footer";
import { EspecificacionesMinca } from "@/components/especificaciones-component/EspecificacionesMinca";
import { HeroContext } from "@/components/reusable/HeroContext";
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct";
import { PuedeInteresarte } from "@/components/sigle-product/PuedeInteresarte";
import { CarruselAccesorios } from "@/components/carruseles/accesorios/CarruselAccesorios";
import { SingleProductosWoocommerce } from "@/lib/graphQLRequest";
import { EspecificacionesMincaNew } from "@/components/especificaciones-component/EspecificacionesMincaNew";
import Whatsapp from "@/components/whatsapp/Whatsapp";

import { HotSpotEspecificaciones } from "@/components/sigle-product/HotSpotEspecificaciones";
import Minca800hs from "@/components/hotSpotScooters/Minca800hs";
import { Testimonios } from "@/components/testimonio/Testimonios";
import { Acordion } from "@/components/reusable/Acordion";
import { AcordionSingleProduct } from "@/components/reusable/AcordionSingleProduct";

export let metadata = {
  title: "Especificaciones",
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
  icons: {
    icon: "/favicon.png",
  },
};

const Especificaciones = async ({ params }) => {
  const paths = [
    "Especificaciones_Scooter_Electrico_Minca_350W",
    "Especificaciones_Scooter_Electrico_Minca_500W",
    "Especificaciones_Scooter_Electrico_Minca_800W",
    "Especificaciones_Scooter_Electrico_Minca_1600W",
  ];

  let { name } = params;
  decodeURIComponent(name);

  if (name === paths[0]) {
    name = "Scooter Eléctrico Minca 350W";
  }

  if (name === paths[1]) {
    name = "Scooter Eléctrico MINCA‎ 500W‎";
  }

  if (name === paths[2]) {
    name = "Scooter Eléctrico MINCA‎ 800W‎";
  }

  if (name === paths[3]) {
    name = "Scooter Eléctrico MINCA 1600W‎";
  }
  metadata.title = `Especificaciones | ${name}`;

  const scooters = await SingleProductosWoocommerce(name);
  console.log(
    scooters.productTypes.nodes[0].products.nodes[0].sliderProductos
      .nombreProducto,
  );

  /* const scooters = await SingleProductos(decodeURIComponent(id)); */

  return (
    <div className="Especificaciones">
      <HeroContext titulo="MINCA" tituloNegrita="SCOOTERS" />

      {/* <EspecificacionesMinca scooters={scooters} /> */}
      <EspecificacionesMincaNew scooters={scooters} />
      <HotSpotEspecificaciones scooters={scooters} />
      {/* Review */}
      <Testimonios />
      <AcordionSingleProduct clase="mx-0 mb-0" />

      <HeroVideoSingleProduct
        titulo="MINCA"
        tituloSecundarioNegrita="Scooters"
        urlVideo="https://test.mincaelectric.com/wp-content/uploads/2024/03/Minca-Electric-Carro-o-Scooter_.mp4"
      />
      <PuedeInteresarte />
      <hr className="border-1 hidden lg:m-auto lg:block lg:w-[90%]"></hr>
      <br></br>
      <br></br>
      <CarruselAccesorios />
      <Footer />
      <Whatsapp />
    </div>
  );
};

export default Especificaciones;
