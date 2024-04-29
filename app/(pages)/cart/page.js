import CarItemsContainer from "@/components/cart/CarItemsContainer";
import { HeroContext } from "@/components/reusable/HeroContext";
import { Footer } from "@/components/home/Footer";

export const metadata = {
  title: "Minca Electric | Carrito",
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
};

const Cart = () => {
  
  return (
    <>
      <HeroContext titulo="carrito"/>
      <CarItemsContainer/>
      <Footer/>
    </>
  );
};

export default Cart;
