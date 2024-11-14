// components/RadioButton/RadioButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import RadioButton from ".";

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: "Form/RadioButton",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const DefaultRadioButton: Story = {
  args: {
    options: [
      {
        value: 1,
        label: "Wash and Fold",
      },
      {
        value: 2,
        label: "Dry Clean",
      },
      {
        value: 3,
        label: "Home",
      },
      {
        value: 4,
        label: "Others",
      },
    ],
    name: "radio-group",
    onChange: (value: string | number) => {
      console.log("Selected:", value);
    },
  },
};
