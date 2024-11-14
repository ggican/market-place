import ImageUpload from "@components/Form/ImageUpload";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ImageUpload> = {
  component: ImageUpload,
  title: "Form/ImageUpload",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ImageUpload>;

export const DefaultImageUpload: Story = {
  args: {
    value: "",
    onChange: (imageUrl: string) => {
      console.log("Image URL:", imageUrl);
    },
  },
};

export const ImageUploaded: Story = {
  args: {
    value: "https://via.placeholder.com/150", // Initial image preview URL
    onChange: (imageUrl: string) => {
      console.log("Image URL:", imageUrl);
    },
  },
};

export const ImageRemoved: Story = {
  args: {
    value: "https://via.placeholder.com/150", // Initial image preview URL
    onChange: (imageUrl: string) => {
      console.log("Image URL:", imageUrl);
    },
  },
};
