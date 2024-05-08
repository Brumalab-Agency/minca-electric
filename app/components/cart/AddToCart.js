"use client"
import { addToCart } from "@/utils/cart/cartUtils";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import cx from "classnames";

export const AddToCart = ({ producto, clases }) => {
  const [cart, setCart] = useContext(AppContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [canAddToCart, setCanAddToCart] = useState(true); 

  useEffect(() => {
    
    const timer = setTimeout(() => {
      const canAdd = Math.random() < 0.5; 
      setCanAddToCart(canAdd);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []); 

  const addToCartBtnClasses = cx(
    "duration-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
    {
      "bg-white text-gray-800 hover:bg-gray-100": !loading && canAddToCart,
      "bg-gray-200 text-gray-500 cursor-not-allowed": !loading && !canAddToCart,
      "bg-gray-200 text-gray-500": loading,
    },
  );

  const handleClick = () => {
    if (canAddToCart) {
      addToCart(
        producto?.databaseId ?? 0,
        1,
        setCart,
        setIsAddedToCart,
        setLoading,
      );
    }
  };

  return (
    <>
      <button
        className={`h-[52px] rounded-[62px] bg-[#111] text-black lg:w-[74%] 2xl:w-[79%] ${addToCartBtnClasses} ${clases}`}
        onClick={handleClick}
        disabled={!canAddToCart || loading} // Deshabilita el botón solo si no se puede agregar al carrito o si se está cargando
      >
        {loading ? "Agregando..." : "Agregar al carrito"}
      </button>
    </>
  );
};

export default AddToCart;
