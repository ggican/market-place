import classNames from "classnames";
import React, { Suspense } from "react";

import { IconStyles } from "./Icon.styles";
import { SIZES_ICON, type IconProps } from "./Icon.types";
import { iconsList } from "./IconList";

const IconElement = ({
  icon = "default",
  size = "md",
  className,
  style,
  rotate,
  color = "grey",
  ...rest
}: IconProps) => {
  const SvgIcon: any = iconsList[icon];
  const svgSize = SIZES_ICON[size];

  if (!SvgIcon) return null;

  return (
    <Suspense fallback={null}>
      <div
        className={classNames(IconStyles, className)}
        style={{ ...style, fontSize: svgSize, transform: `rotate(${rotate || 0}deg)`, color }}
        {...rest}
      >
        <SvgIcon className={className} size={size} color={color} />
      </div>
    </Suspense>
  );
};

export default IconElement;
