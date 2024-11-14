import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";

import { ColorsKeys, IconKeys, IconSize, tailwindConfigColors } from "./Icon.types";
import { iconsList } from "./IconList";

import Icon from ".";

const meta = {
  title: "General/Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Retrieve all icon names and colors
const allIcon: IconKeys[] = Object.keys(iconsList) as IconKeys[];
const allColor: ColorsKeys[] = Object.keys({ ...tailwindConfigColors }) as ColorsKeys[];

export const IconsList: Story = {
  args: {},
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchKeyword, setSearchKeyword] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const filteredIcons = useMemo(() => {
      return allIcon.filter((iconName) =>
        iconName.toLowerCase().includes(searchKeyword.toLowerCase()),
      );
    }, [searchKeyword]);

    return (
      <div>
        <div>
          <input
            style={{ width: 250, border: "1px solid #ddd", padding: "8px 12px", borderRadius: 8 }}
            type="text"
            placeholder="Search icons"
            value={searchKeyword}
            onChange={(event) => setSearchKeyword(event.target.value)}
          />
        </div>

        <div className="mt-8 grid gap-8 grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
          {filteredIcons.map((iconName) => (
            <div
              key={iconName}
              className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => navigator.clipboard.writeText(`<Icon icon="${iconName}" />`)}
            >
              <Icon {...args} icon={iconName} />
              <span>{iconName}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const IconVariantSize: Story = {
  args: {
    icon: "gear",
  },
  render: (args) => {
    const sizeList: IconSize[] = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"];

    return (
      <div className="mt-8 grid gap-8 grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
        {sizeList.map((size: IconSize) => (
          <div
            key={size}
            className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() =>
              navigator.clipboard.writeText(`<Icon icon="${args.icon}" size="${size}" />`)
            }
          >
            <Icon {...args} size={size} />
            <span>{size}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const IconVariantColor: Story = {
  args: {
    icon: "gear",
  },
  render: (args) => {
    return (
      <div className="mt-8 grid gap-8 grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
        {allColor.map((color: ColorsKeys) => (
          <div
            key={color}
            className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() =>
              navigator.clipboard.writeText(
                `<Icon icon="${args.icon}" color="${color}" size="md" />`,
              )
            }
          >
            <Icon {...args} color={color} size="md" />
            <span>{color}</span>
          </div>
        ))}
      </div>
    );
  },
};
