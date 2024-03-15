import { HeroContext } from "@/components/reusable/HeroContext"; 
import { SingleProductComponent } from "@/components/sigle-product/SingleProductComponent";
import { CarruselSingleProduct } from "@/components/reusable/CarruselSingleProduct";
import { Section3 } from "@/components/sigle-product/Section3";
import { Section4 } from "@/components/sigle-product/Section4";
import { Section5 } from "@/components/sigle-product/Section5";
import { HotSpot } from "@/components/sigle-product/HotSpot";
import { PuedeInteresarte } from "@/components/sigle-product/PuedeInteresarte";
import { Footer } from "@/components/home/Footer";
import { HeroVideoSingleProduct } from "@/components/reusable/HeroVideoSingleProduct";
import { CarruselAccesorios } from "@/components/carruseles/accesorios/CarruselAccesorios";
import { SingleProductos } from "@/lib/graphQLRequest";

export const metadata = {
  title: "Productos",
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
  icons: {
    icon: "/favicon.ico",
  },
};

const SingleProduct = async ({ params }) => {
 
  const { id } = params;
  const scooters = await SingleProductos(decodeURIComponent(id));
  return (
    <>
      <HeroContext titulo="MINCA" tituloNegrita="SCOOTERS" />
      <SingleProductComponent scooters={scooters} />
      <HeroVideoSingleProduct
        titulo="Last Mile"
        tituloSecundarioNegrita="mODE"
        urlVideo="/video/videoplayback.mp4"
      />
      <CarruselSingleProduct />
      <Section3 />
      <Section4 />
      <Section5 />
      <HotSpot scooters={scooters} />
      <PuedeInteresarte />
      <CarruselAccesorios />
      <Footer />
    </>
  );
};
export default SingleProduct;
