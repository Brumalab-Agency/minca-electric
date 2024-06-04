"use client";
import { addToCart } from "@/utils/cart/cartUtils";
import { useContext, useState } from "react";
import { AppContext } from "../context/Context";

import cx from "classnames";

export const AddToCart = ({ producto, clases }) => {
  const [cart, setCart] = useContext(AppContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(producto)
  console.log(cart)

  //cart.totalPrice = producto.sliderProductos.precioActual;

  const noStock = producto.stockStatus === "OUT_OF_STOCK" || producto.stockStatus === "ON_BACKORDER";

  const addToCartBtnClasses = cx(
    "duration-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
    {
      "h-[52px] rounded-[62px] bg-[#111] text-white lg:w-[74%] 2xl:w-[79%]":
        !loading && !noStock,
      "bg-white hover:bg-gray-100": loading,
      "text-gray-800 bg-gray-200 rounded-[62px] cursor-not-allowed": noStock,
    },
    clases,
  );

  const handleAddToCart = () => {
    if (noStock) return;

    setLoading(true);
    addToCart(
      producto?.databaseId ?? 0,
      1,
      (updatedCart) => {
        setCart({ ...updatedCart, totalPrice: parseInt(producto.sliderProductos.precioActual.replace(/\./g, '').replace('$', ''), 10) });
        setIsAddedToCart(true);
        setLoading(false);
      },
      setIsAddedToCart,
      setLoading
    );
  };

  return (
    <>
      <button
        className={addToCartBtnClasses}
        onClick={handleAddToCart}
        disabled={loading || noStock}
      >
        {loading ? "Agregando..." : "Agregar al carrito"}
      </button>
    </>
  );
};

export default AddToCart;
