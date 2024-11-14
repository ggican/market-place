// components/Input/Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";

import TextArea from "./TextArea";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "Form/TextArea",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

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
