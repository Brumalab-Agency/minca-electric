"use client";
import { addToCart } from "@/utils/cart/cartUtils";
import { useContext, useState } from "react";
import { AppContext } from "../context/Context";
import Link from "next/link";
import cx from "classnames";

export const AddToCart = ({ producto }) => {
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
        className={addToCartBtnClasses}
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
      {isAddedToCart && !loading ? (
        <Link
          href="/productos"
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          onClick={() => addToCart(producto.databaseId ?? 0)}
        >
          Ver carrito
        </Link>
      ) : null}
    </>
  );
};
export default AddToCart;
