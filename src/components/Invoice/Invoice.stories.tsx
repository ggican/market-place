import type { Meta, StoryObj } from "@storybook/react";

import Invoice from ".";

const meta: Meta<typeof Invoice> = {
  component: Invoice,
  title: "Components/Invoice",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Invoice>;

export const DefaultDropdown: Story = {
  args: {
    image: "/no-image.png",
    productTitle: "Bag of Laundry",
    total: "$ 180.00",
  },
};
