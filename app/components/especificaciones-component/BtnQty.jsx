"use client"
import  { useState } from "react";

export const BtnQty = () => {
    const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div>
      <label htmlFor="Quantity" className="sr-only">
        Quantity
      </label>
      <div className="flex h-[44px] w-[100px] items-center gap-1 rounded-[62px] bg-[#F0F0F0]">
        <button
          type="button"
          className="size-10 text-[25px] leading-10 text-gray-600 transition"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <input
          type="number"
          id="Quantity"
          value={quantity}
          className="h-10 w-2 bg-[#F0F0F0] text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          className="size-10 text-[25px] leading-10 text-gray-600 transition"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
    </div>
  )
}
