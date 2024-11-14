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
    menu: [
      {
        title: "Home",
        link: "/admin",
        icon: "home",
      },
      {
        title: "Products",
        link: "/admin/products",
        icon: "file",
      },
      {
        title: "Sales",
        link: "/admin/sales",
        icon: "chart",
      },
      {
        title: "Settings",
        link: "/admin/settings",
        icon: "gear",
      },
    ],
  },
};
