// useIconProperties.ts

import { useMemo } from "react";

import { COLORS, ColorsKeys, IconSize, SIZES_ICON } from "@components/Icon/Icon.types";

export const useIconProperties = (size: IconSize = "md", color: string = "grey-dark") => {
  const fill = useMemo(
    () => (color && color in COLORS ? COLORS[color as ColorsKeys] : color),
    [color],
  );

  const svgSize = useMemo(() => SIZES_ICON[size], [size]);

  return { fill, svgSize };
};
