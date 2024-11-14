import type { Meta, StoryObj } from "@storybook/react";

import ProductCard from ".";

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  title: "Components/ProductCard", // Update the title as per your directory structure
  parameters: {
    docs: {
      description: {
        component: "Displays a product with title, image, price, and quantity or category.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

// Default ProductCard with image, title, and quantity
export const ProductCardDefault: Story = {
  args: {
    image: "/no-image.png", // Replace with your default image URL
    title: "Bag of Laundry",
    totalPrice: "$4.00",
    totalQuantity: 12,
  },
};

// ProductCard with a category
export const ProductCardWithCategory: Story = {
  args: {
    image: "/no-image.png", // Replace with your default image URL
    title: "Leather Wallet",
    totalPrice: "$25.00",
    category: "Accessories", // Category example
  },
};

// ProductCard with no category but price per item
export const ProductCardWithoutCategory: Story = {
  args: {
    image: "/no-image.png", // Replace with your default image URL
    title: "Smartphone",
    totalPrice: "$499.99",
    totalQuantity: 1,
  },
};

export const ProductCardWithoutAllProps: Story = {
  args: {
    image: "/no-image.png",
  },
};
