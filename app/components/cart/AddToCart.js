"use client";
import { addToCart } from "@/utils/cart/cartUtils";
import { useContext, useState } from "react";
import { AppContext } from "../context/Context";

import cx from "classnames";

export const AddToCart = ({ producto, clases, partialPayment }) => {
  const [cart, setCart] = useContext(AppContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);

  const noStock = producto.stockStatus === "OUT_OF_STOCK";
  const onBackOrder = producto.stockStatus === "ON_BACKORDER";

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

    if (onBackOrder) {
      if (!partialPayment) return;
        setLoading(true);
        const newPrice = parseInt(producto.sliderProductos.precioActual.replace(/\./g, '').replace('$', ''), 10);
      
        addToCart(
          producto?.databaseId ?? 0,
          1,
          (updatedCart) => {
            // Update line_subtotal, line_total, data.price, and data.regular_price for the relevant cart item
            const updatedCartItems = updatedCart.cartItems.map(item => {
              if (item.product_id === producto.databaseId) {
                return {
                  ...item,
                  line_subtotal: newPrice,
                  line_total: newPrice,
                  data: {
                    ...item.data,
                    price: newPrice.toString(),
                    regular_price: newPrice.toString()
                  }
                };
              }
              return item;
            });
      
            setCart({
              ...updatedCart,
              cartItems: updatedCartItems,
              totalPrice: newPrice
            });
            setIsAddedToCart(true);
            setLoading(false);
          },
          setIsAddedToCart,
          setLoading
        );
      } else if (!noStock) {
          addToCart(
            producto?.databaseId ?? 0,
            1,
            setCart,
            setIsAddedToCart,
            setLoading,
          )
    }
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
