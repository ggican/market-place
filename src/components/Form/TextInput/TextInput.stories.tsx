// components/Input/Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";

import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "Form/TextInput",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const InputDefault: Story = {
  args: {
    placeholder: "Enter text here",
    block: true,
  },
};

export const InputNonBlock: Story = {
  args: {
    placeholder: "Enter text here",
    block: false,
  },
};
