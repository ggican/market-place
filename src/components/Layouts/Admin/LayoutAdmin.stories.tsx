import type { Meta, StoryObj } from "@storybook/react";

import LayoutAdmin from ".";

const meta: Meta<typeof LayoutAdmin> = {
  component: LayoutAdmin,
  title: "Layouts/Admin/Full Layouts",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LayoutAdmin>;

export const LayoutAdminDefault: Story = {
  args: {
    children: "Open Button",
  },
};
