"use client";
import { useContext, useState } from "react";
import { AppContext } from "../context/Context";
import { updateCart } from "@/utils/cart/cartUtils";

export const BtnQty = ({ item }) => {
  console.log(item);
  const [cart, setCart] = useContext(AppContext);
  const { cartItems } = cart || {};
  const [productCount, setProductCount] = useState(item.quantity);
  const [updatingProduct, setUpdatingProduct] = useState(false);

  const handleQtyChange = (type) => {
    let newQty;

    // Verificar que no se esté actualizando el producto y la cantidad sea válida
    if (!updatingProduct && ((type === "decrement" && productCount > 1) || type === "increment")) {
      // Calcular la nueva cantidad
      newQty = type === "increment" ? productCount + 1 : productCount - 1;

      // Actualizar el estado con la nueva cantidad
      setProductCount(newQty);

      // Actualizar el carrito
      updateCart(item.cartKey, newQty, setCart, setUpdatingProduct);
    }
  };

  return (
    <div className="btn-aumentarDisminuir flex h-[44px] w-[126px] items-center gap-1 rounded-[62px] bg-[#F0F0F0] px-[20px] py-[12px]">
      <button
        className="size-10 text-[25px] leading-10 text-gray-600 transition"
        onClick={() => handleQtyChange("decrement")}
      >
        -
      </button>
      <input
        type="number"
        min="1"
        style={{
          textAlign: "center",
          width: "50px",
          paddingRight: "0",
        }}
        className={`${updatingProduct ? "disabled" : ""} [&::-webkit-outer-spin-button]:appearance-none" h-10 w-2 bg-[#F0F0F0] text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0`}
        value={productCount}
        onChange={(event) => setProductCount(parseInt(event.target.value))}
      />
      <button
        className="size-10 text-[25px] leading-10 text-gray-600 transition"
        onClick={() => handleQtyChange("increment")}
      >
        +
      </button>
    </div>
  );
};
