import Button from "@components/Form/Button";
import QuantityInput from "@components/Form/ImageUpload";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof QuantityInput> = {
  component: QuantityInput,
  title: "Form/QuantityInput",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof QuantityInput>;

export const DefaultQuantityInput: Story = {
  args: {
    value: "",
    onChange: (imageUrl: string) => {
      console.log("Image URL:", imageUrl);
    },
  },
};
