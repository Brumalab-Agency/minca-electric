import { Footer } from "@/components/home/Footer";
import { HeroContext } from "@/components/reusable/HeroContext";
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct";
import { PuedeInteresarte } from "@/components/sigle-product/PuedeInteresarte";
import { CarruselAccesorios } from "@/components/carruseles/accesorios/CarruselAccesorios";
import { MincaCity } from "@/lib/graphQLRequest";
import { EspecificacionesMincaEbikes } from "@/components/especificaciones-component/EspecificacionesMincaEbikes";

const EspecificacionesEbikes = async ({ params }) => {
  const { id } = params;

  const ebikes = await MincaCity(decodeURIComponent(id));

  console.log(ebikes);

  const ebike = ebikes.products.edges;

  console.log(ebike);
  return (
    <div className="EspecificacionesEbikes">
      <HeroContext titulo="MINCA" tituloNegrita="EBIKES" />
      <EspecificacionesMincaEbikes ebike={ebike} />
      {/*  <HeroVideoSingleProduct
        titulo="MINCA"
        tituloSecundarioNegrita="Scooters"
        urlVideo="https://test.mincaelectric.com/wp-content/uploads/2024/03/Minca-Electric-Carro-o-Scooter_.mp4"
      /> */}
      <PuedeInteresarte />
      <hr className="border-1 hidden lg:m-auto lg:block lg:w-[90%]"></hr>
      <br></br>
      <br></br>
      <CarruselAccesorios />
      <Footer />
    </div>
  );
};

export default EspecificacionesEbikes;
