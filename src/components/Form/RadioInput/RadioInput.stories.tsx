// components/RadioButton/RadioButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form"; // Import react-hook-form

import RadioButton from "."; // Import your RadioButton component

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
      { value: 1, label: "Wash and Fold" },
      { value: 2, label: "Dry Clean" },
      { value: 3, label: "Home" },
      { value: 4, label: "Others" },
    ],
    name: "radio-group",
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm({
      defaultValues: { radioInput: 1 }, // Set a default value for the radio button (use number for consistency)
    });

    return (
      <FormProvider {...methods}>
        {" "}
        {/* Wrap your component in FormProvider */}
        <RadioButton {...args} control={methods.control} /> {/* Pass control from useForm */}
      </FormProvider>
    );
  },
};
