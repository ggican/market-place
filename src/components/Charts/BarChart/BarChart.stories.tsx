import type { Meta, StoryObj } from "@storybook/react";
import BarChart from ".";

const meta: Meta<typeof BarChart> = {
  component: BarChart,
  title: "BarChart",
  parameters: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BarChart>;

const MOCK_DATA_CHART = [
  {
    created_at: "2023-07-20",
    total: 25,
    income: 80,
  },
  {
    created_at: "2023-07-21",
    total: 30,
    income: 120,
  },
  {
    created_at: "2023-07-22",
    total: 49,
    income: 20,
  },
  {
    created_at: "2023-07-23",
    total: 48,
    income: 420,
  },
  {
    created_at: "2023-07-24",
    total: 30,
    income: 30,
  },
  {
    created_at: "2023-07-25",
    total: 31,
    income: 40,
  },
  {
    created_at: "2023-07-26",
    total: 15,
    income: 230,
  },
];

const HIGH_INCOME_DATA = [
  { created_at: "2023-07-20", total: 20, income: 800 },
  { created_at: "2023-07-21", total: 35, income: 950 },
  { created_at: "2023-07-22", total: 48, income: 400 },
  { created_at: "2023-07-23", total: 60, income: 1100 },
  { created_at: "2023-07-24", total: 25, income: 620 },
  { created_at: "2023-07-25", total: 18, income: 740 },
  { created_at: "2023-07-26", total: 22, income: 880 },
];

const EMPTY_DATA: [] = [];

export const BarChartDefault: Story = {
  args: {
    data: MOCK_DATA_CHART,
    title: "Product Sold",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};

export const CustomTitle: Story = {
  args: {
    data: MOCK_DATA_CHART,
    title: "Custom Sales Data",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};

export const DifferentMaxHeight: Story = {
  args: {
    data: MOCK_DATA_CHART,
    title: "Sales with Taller Chart",
    maxHeight: 500,
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};

export const EmptyData: Story = {
  args: {
    data: EMPTY_DATA,
    title: "No Sales Data",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};

export const HighIncomeData: Story = {
  args: {
    data: HIGH_INCOME_DATA,
    title: "High Income Data",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};
