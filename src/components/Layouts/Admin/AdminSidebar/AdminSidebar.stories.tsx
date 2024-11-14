import type { Meta, StoryObj } from "@storybook/react";

import AdminSidebar from ".";

const meta: Meta<typeof AdminSidebar> = {
  component: AdminSidebar,
  title: "Layouts/Admin/Sidebar",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AdminSidebar>;

export const LayoutAdminDefault: Story = {
  args: {
    block: true,
    children: "Open Button",
  },
};
