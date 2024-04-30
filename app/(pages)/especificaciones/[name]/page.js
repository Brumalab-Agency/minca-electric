import { Footer } from "@/components/home/Footer";
import { EspecificacionesMinca } from "@/components/especificaciones-component/EspecificacionesMinca";
import { HeroContext } from "@/components/reusable/HeroContext";
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct";
import { PuedeInteresarte } from "@/components/sigle-product/PuedeInteresarte";
import { CarruselAccesorios } from "@/components/carruseles/accesorios/CarruselAccesorios";
import { SingleProductosWoocommerce,  SingleProductos} from "@/lib/graphQLRequest";
import { EspecificacionesMincaNew } from "@/components/especificaciones-component/EspecificacionesMincaNew";
import Whatsapp from "@/components/whatsapp/Whatsapp";

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
    "Especificaciones_Scooter_Electrico_Minca_800W",
    "Especificaciones_Scooter_Electrico_Minca_1600W"
  ];

  let { name } = params;
  decodeURIComponent(name)

  console.log(name)

  if (name === paths[0]) {
    name = "Minca 350W";
  }

  if (name === paths[1]) {
    name = "Minca 800W";
  }

  if (name === paths[2]) {
    name = "Minca 1600W"; 
  }
  metadata.title = `Especificaciones | ${name}`

  const scooters = await SingleProductosWoocommerce(name);
  /* const scooters = await SingleProductos(decodeURIComponent(id)); */

  return (
    <div className="Especificaciones">
      <HeroContext titulo="MINCA" tituloNegrita="SCOOTERS" />
      {/* <EspecificacionesMinca scooters={scooters} /> */}
      <EspecificacionesMincaNew scooters={scooters}/>
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
      <Whatsapp/>
    </div>
  );
};

export default Especificaciones;
