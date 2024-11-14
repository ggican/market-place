import type { Meta, StoryObj } from "@storybook/react";

import { DropDownOption } from "./DropdownInput.types";

import DropdownInput from ".";

const meta: Meta<typeof DropdownInput> = {
  component: DropdownInput,
  title: "Form/DropdownInput",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownInput>;

const OPTIONS: DropDownOption[] = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export const DefaultDropdown: Story = {
  args: {
    options: OPTIONS,
    label: "Default Label",
    size: "md",
  },
};

export const SmallDropdown: Story = {
  args: {
    options: OPTIONS,
    label: "Small Dropdown",
    size: "sm",
  },
};

export const LargeDropdown: Story = {
  args: {
    options: OPTIONS,
    label: "Large Dropdown",
    size: "lg",
  },
};

export const NoLabelDropdown: Story = {
  args: {
    options: OPTIONS,
    size: "md",
  },
};
