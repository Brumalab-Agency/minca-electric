"use client";
import { addToCart } from "@/utils/cart/cartUtils";
import { useContext, useState } from "react";
import { AppContext } from "../context/Context";

import cx from "classnames";


export const AddToCart = ({ producto, clases }) => {



  const [cart, setCart] = useContext(AppContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const addToCartBtnClasses = cx(
    "duration-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
    {
      "bg-white hover:bg-gray-100": !loading,
      "bg-gray-200": loading,
    },
  );

  return (
    <>
      <button
        className={`bg-[#111] text-white lg:w-[74%] 2xl:w-[79%] h-[52px] rounded-[62px] ${clases}`}
        onClick={() =>
          addToCart(
            producto?.databaseId ?? 0,
            1,
            setCart,
            setIsAddedToCart,
            setLoading,
          )
        }
        disabled={loading}
      >
        {loading ? "Agregando..." : "Agregar al carrito"}
      </button>
 

    </>
  );
};
export default AddToCart;
