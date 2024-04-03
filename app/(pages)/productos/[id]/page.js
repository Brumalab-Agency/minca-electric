import { SingleProductComponent } from "@/components/sigle-product/SingleProductComponent";
import { CarruselSingleProduct } from "@/components/reusable/CarruselSingleProduct";
import { Section3 } from "@/components/sigle-product/Section3";
import { Section4 } from "@/components/sigle-product/Section4";
import { Section5 } from "@/components/sigle-product/Section5";
import { HotSpot } from "@/components/sigle-product/HotSpot";
import { PuedeInteresarte } from "@/components/sigle-product/PuedeInteresarte";
import { Footer } from "@/components/home/Footer";
import { CarruselAccesorios } from "@/components/carruseles/accesorios/CarruselAccesorios";
import { SingleProductos } from "@/lib/graphQLRequest";
import { HeroContextBreadCrumb } from "@/components/reusable/HeroContextBreadCrumb";
import { StickyScrollRevealDemo } from "@/components/financiamientoflexible/StickyScrollRevealDemo";
import { LayoutGridInfo } from "@/components/layoutgrid/LayoutGridInfo";
import { CardHoverEffect } from "@/components/cardhovereffect/CardHoverEffect";
import { HeroVideoSingleCarsProduct } from "@/components/reusable/HeroVideoSingleCardProduct";
import { AcordionSingleProduct } from "@/components/reusable/AcordionSingleProduct";
import ReactImagenGallery from "@/components/react-image-gallery/ReactImagenGallery";
import { HeaderSingleProducts } from "@/components/home/HeaderSingleProducts";
import { HeroVideoSingleCardProductTemporal } from "@/components/reusable/HeroVideoSingleCardProductTemporal";

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
  
console.log(scooters);
  return (
    <div>
    <HeaderSingleProducts/>
        <HeroVideoSingleCarsProduct
        titulo="Last Mile"
        tituloSecundarioNegrita="MODE"
        urlVideo={scooters.edges[0].node.sliderProductos}
        scooters={scooters}
      />
      <SingleProductComponent scooters={scooters} />
      {/* <FinanciamientoFlexible/> */}
      <HeroVideoSingleCardProductTemporal urlVideo={scooters.edges[0].node.sliderProductos}  scooters={scooters}/>
      {/* <CarruselSingleProduct /> */}
      {/* <StickyScrollRevealDemo/> */}
      {/* <Section3 /> */}
      <LayoutGridInfo/>
      {/* <Section4 /> */}
      <CardHoverEffect/>
      <ReactImagenGallery scooters={scooters}/>
      <Section5 />
      <HotSpot scooters={scooters} />
      <PuedeInteresarte />
      <CarruselAccesorios />
      <AcordionSingleProduct/>
      <Footer />
    </div>
  );
};
export default SingleProduct;
