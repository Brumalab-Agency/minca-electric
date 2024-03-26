import { CarruselSingleProduct } from "@/components/reusable/CarruselSingleProduct";
import { Section3 } from "@/components/sigle-product/Section3";
import { Section4 } from "@/components/sigle-product/Section4";
import { Section5 } from "@/components/sigle-product/Section5";
import { HotSpot } from "@/components/sigle-product/HotSpot";
import { PuedeInteresarte } from "@/components/sigle-product/PuedeInteresarte";
import { Footer } from "@/components/home/Footer";
import { CarruselAccesorios } from "@/components/carruseles/accesorios/CarruselAccesorios";
import { MincaCity } from "@/lib/graphQLRequest";
import { HeroContextBreadCrumb } from "@/components/reusable/HeroContextBreadCrumb";
import { MincaCityComponent } from "@/components/ebikes/MincaCityComponent";
import { HeroVideoMincaCity } from "@/components/ebikes/HeroVideoMincaCity";

export const metadata = {
  title: "Ebikes",
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
  icons: {
    icon: "/favicon.ico",
  },
};

const EbikesPage = async ({ params }) => {
  const { id } = params;
  const mincaCity = await MincaCity(decodeURIComponent(id));
  console.log(mincaCity);
  return (
    <>
      <HeroContextBreadCrumb titulo="MINCA " tituloNegrita="CITY" />
      <MincaCityComponent mincacity={mincaCity}/>
      {/* <HeroVideoMincaCity
        titulo="Last Mile"
        tituloSecundarioNegrita="mODE"
        urlVideo={scooters.edges[0].node.sliderProductos.videoBannerArchivo.mediaItemUrl}
      /> */}
      <CarruselSingleProduct />
      <Section3 />
      <Section4 />
      <Section5 />
      <PuedeInteresarte />
      <CarruselAccesorios />
      <Footer />
    </>
  );
};
export default EbikesPage;
