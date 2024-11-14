import type { Meta, StoryObj } from "@storybook/react";

import Content from ".";

const meta: Meta<typeof Content> = {
  component: Content,
  title: "Layouts/External/Content",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Content>;

export const LayoutAdminDefault: Story = {
  args: {},
  render: () => {
    return (
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas veniam sunt similique,
        veritatis aliquam magnam quam unde, quisquam exercitationem, ullam consequuntur eum corporis
        vel fugiat cumque perspiciatis aspernatur accusamus.
      </Content>
    );
  },
};
