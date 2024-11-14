import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import QuantityInput from "@components/Form/QuantityInput";

const meta: Meta<typeof QuantityInput> = {
  component: QuantityInput,
  title: "Form/QuantityInput",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof QuantityInput>;

// Default Quantity Input story
export const DefaultQuantityInput: Story = {
  args: {},
};

// QuantityInput with value 5
export const QuantityInputWithValue: Story = {
  args: {
    // Simulate an initial value of 5
    value: 5,
    onChange: (value: number) => {
      console.log("Updated quantity:", value);
    },
  },
};

// QuantityInput with value 0 (disabled min button)
export const QuantityInputZero: Story = {
  args: {
    value: 0,
    onChange: (value: number) => {
      console.log("Updated quantity:", value);
    },
  },
};

// QuantityInput with custom increment/decrement behavior
export const InteractiveQuantityInput: Story = {
  render: (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [quantity, setQuantity] = useState<any>(0);

    const increaseQuantity = () => setQuantity((prev: any) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev: any) => (prev > 0 ? prev - 1 : 0));

    return (
      <QuantityInput
        {...args}
        value={quantity}
        onChange={(newQuantity: number) => setQuantity(newQuantity)}
        onIncrement={increaseQuantity}
        onDecrement={decreaseQuantity}
      />
    );
  },
};
