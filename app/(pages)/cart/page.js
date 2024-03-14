import { Header } from "@/components/home/Header";
import CarItemsContainer from "@/components/cart/CarItemsContainer";
import { HeroContext } from "@/components/reusable/HeroContext";
import { Footer } from "@/components/home/Footer";

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
