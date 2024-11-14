import type { Meta, StoryObj } from "@storybook/react";

import Container from ".";

const meta: Meta<typeof Container> = {
  component: Container,
  title: "Layouts/External/Container",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const DefaultPadding: Story = {
  args: {},
  render: () => (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas veniam sunt similique,
      veritatis aliquam magnam quam unde, quisquam exercitationem, ullam consequuntur eum corporis
      vel fugiat cumque perspiciatis aspernatur accusamus.
    </Container>
  ),
};

export const CustomPaddingLeftRight: Story = {
  args: {
    paddingLeft: "pl-12", // 48px left padding
    paddingRight: "pr-12", // 48px right padding
  },
  render: (args) => (
    <Container {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas veniam sunt similique,
      veritatis aliquam magnam quam unde, quisquam exercitationem, ullam consequuntur eum corporis
      vel fugiat cumque perspiciatis aspernatur accusamus.
    </Container>
  ),
};

export const CustomPaddingAllSides: Story = {
  args: {
    paddingLeft: "pl-4", // 16px left padding
    paddingRight: "pr-4", // 16px right padding
    paddingTop: "pt-8", // 32px top padding
    paddingBottom: "pb-8", // 32px bottom padding
  },
  render: (args) => (
    <Container {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas veniam sunt similique,
      veritatis aliquam magnam quam unde, quisquam exercitationem, ullam consequuntur eum corporis
      vel fugiat cumque perspiciatis aspernatur accusamus.
    </Container>
  ),
};

export const NoPadding: Story = {
  args: {
    paddingLeft: "", // No left padding
    paddingRight: "", // No right padding
    paddingTop: "", // No top padding
    paddingBottom: "", // No bottom padding
  },
  render: (args) => (
    <Container {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas veniam sunt similique,
      veritatis aliquam magnam quam unde, quisquam exercitationem, ullam consequuntur eum corporis
      vel fugiat cumque perspiciatis aspernatur accusamus.
    </Container>
  ),
};
