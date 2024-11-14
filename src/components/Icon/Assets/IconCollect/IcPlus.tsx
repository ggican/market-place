import { IconProps } from "@components/Icon/Icon.types";
import { useIconProperties } from "@components/Icon/useIconProperties";

const IcPlus = ({ size = "md", color = "grey-dark", ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);
  return (
    <svg
      {...props}
      width={svgSize}
      height={svgSize}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 37.3334C8.87939 37.3223 0.677786 29.1207 0.666672 19.0001V18.6334C0.868213 8.55836 9.16341 0.53464 19.2396 0.668334C29.3157 0.802028 37.3951 9.04301 37.3293 19.1198C37.2634 29.1967 29.077 37.3314 19 37.3334ZM9.83334 17.1667V20.8334H17.1667V28.1667H20.8333V20.8334H28.1667V17.1667H20.8333V9.83339H17.1667V17.1667H9.83334Z"
        fill={fill}
      />
    </svg>
  );
};

export default IcPlus;
