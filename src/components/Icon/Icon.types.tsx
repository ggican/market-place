import type { CSSProperties } from "react";

import tailwindConfig from "@tailwind/theme";

import { iconsList } from "./IconList";

export const tailwindConfigColors = tailwindConfig?.theme?.colors;

export type ColorsKeys = keyof typeof tailwindConfigColors;
export type IconKeys = keyof typeof iconsList;

export type IconProps = {
  icon?: IconKeys;
  className?: string;
  color?: string;
  rotate?: string;
  style?: CSSProperties;
  size?: IconSize;
};

export type ISvgIconProps = {
  style?: CSSProperties;
};

export const SIZES_ICON: Record<IconSize, number> = {
  xxs: 12,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
  extra: 171,
};

export type IconColor = ColorsKeys;

export type IconSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "extra";

export const COLORS: Record<ColorsKeys, string> = {
  ...tailwindConfigColors,
};

export const SIZES: Record<IconSize, number> = {
  xxs: 12,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
  extra: 171,
};
