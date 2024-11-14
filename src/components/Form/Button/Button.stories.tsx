import type { Meta, StoryObj } from "@storybook/react";

import Button from "@components/Form/Button";
import ImageUpload from "@components/Form/ImageUpload";

const meta: Meta<typeof Button> = {
  component: ImageUpload,
  title: "Form/Button",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    value: "",
    onChange: (imageUrl: string) => {
      console.log("Image URL:", imageUrl);
    },
  },
};
