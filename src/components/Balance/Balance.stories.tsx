import type { Meta, StoryObj } from "@storybook/react";

import Balance from ".";

const meta: Meta<typeof Balance> = {
  component: Balance,
  title: "Components/Balance",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Balance>;

export const DefaultDropdown: Story = {
  args: {
    name: "Default Label",
    balance: "$200.000",
  },
};
