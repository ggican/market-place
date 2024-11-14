import type { Meta, StoryObj } from "@storybook/react";

import AdminHeader from ".";

const meta: Meta<typeof AdminHeader> = {
  component: AdminHeader,
  title: "Layouts/Admin/Header",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AdminHeader>;

export const LayoutAdminDefault: Story = {
  args: {
    block: true,
    children: "Open Button",
  },
};
