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
import { Testimonios } from "@/components/testimonio/Testimonios";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export let metadata = {
  title: `Minca Electric | Productos`,
  description:
    "Alto rendimiento en un vehículo liviano, suspensión delantera y trasera.",
  icons: {
    icon: "/favicon.png",
  },
};


const SingleProduct = async ({ params }) => {
  const paths = [
    "Scooter_Electrico_Minca_350W",
    "Scooter_Electrico_Minca_500W",
    "Scooter_Electrico_Minca_800W",
    "Scooter_Electrico_Minca_1600W",
  ];

  let { name } = params;
  decodeURIComponent(name);
  if (name === paths[0]) {
    name = "Minca 350W";
  }

  if (name === paths[1]) {
    name = "Minca 500W";
  }

  if (name === paths[2]) {
    name = "Minca 800W";
  }

  if (name === paths[3]) {
    name = "Minca 1600W";
  }

  metadata.title = `Productos | ${name}`;


  
  
  const scooters = await SingleProductos(name);
  return (
    <div>
      <HeaderSingleProducts />
      <HeroVideoSingleCarsProduct
        titulo="Last Mile"
        tituloSecundarioNegrita="MODE"
        urlVideo={scooters.edges[0]?.node.sliderProductos}
        scooters={scooters}
      />

      <SingleProductComponent scooters={scooters} />
      {/* <FinanciamientoFlexible/> */}
      <HeroVideoSingleCardProductTemporal
        urlVideo={scooters.edges[0]?.node.sliderProductos}
        scooters={scooters}
      />
      <HotSpot scooters={scooters} />
      {/* <CarruselSingleProduct /> */}
      {/* <StickyScrollRevealDemo/> */}
      {/* <Section3 /> */}
      <LayoutGridInfo scooter_name={scooters.edges[0]?.node.sliderProductos.nombreProducto}/>
      {/* <Section4 /> */}
      <CardHoverEffect />
      <ReactImagenGallery scooters={scooters} />
      <Section5 />
      <Testimonios />
      <PuedeInteresarte />
      <CarruselAccesorios />
      <AcordionSingleProduct />
      <Footer />
      <Whatsapp />
    </div>
  );
};
export default SingleProduct;
