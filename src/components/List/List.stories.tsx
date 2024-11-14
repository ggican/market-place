import type { Meta, StoryObj } from "@storybook/react";

import List from ".";

const meta: Meta<typeof List> = {
  component: List,
  title: "List",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof List>;

export const BarChartDefault: Story = {
  args: {
    title: "Top Seeling Product",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};
