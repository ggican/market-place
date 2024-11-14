import { useState } from "react";

import Icon from "@components/Icon"; // Assuming you have an Icon component

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(0);

  // Increment function
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrement function
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="flex w-full items-center justify-center mt-[20px] pb-[50px]">
      <button onClick={decreaseQuantity} disabled={quantity === 0}>
        <Icon size="lg" color={quantity === 0 ? "disabled" : "primary-light"} icon="min" />
      </button>

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(0, Number(e.target.value)))}
        placeholder="0"
        className="w-[106px] text-center h-[55px] text-[38px] mx-[10px] rounded-[10px] border-[1px] border-primary bg-white"
      />

      <button onClick={increaseQuantity}>
        <Icon color="primary-light" size="lg" icon="plus" />
      </button>
    </div>
  );
};

export default QuantityInput;
