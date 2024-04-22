"use client";
import { useState } from "react";

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
    <div className="btn-aumentarDisminuir flex  h-[44px] w-[126px] items-center gap-1 rounded-[62px] bg-[#F0F0F0] px-[20px] py-[12px]">
      <button
        className="size-10 text-[25px] leading-10 text-gray-600 transition"
        onClick={(event) => handleQtyChange(event, item?.cartKey, "decrement")}
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
        data-cart-key={item?.data?.cartKey}
        className={`${updatingProduct ? "disabled" : ""} [&::-webkit-outer-spin-button]:appearance-none" h-10 w-2 bg-[#F0F0F0] text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0`}
        value={productCount}
        onChange={(event) => handleQtyChange(event, item?.cartKey, "")}
      />
      <button
        className="size-10 text-[25px] leading-10 text-gray-600 transition"
        onClick={(event) => handleQtyChange(event, item?.cartKey, "increment")}
      >
        +
      </button>
    </div>
  );
};
