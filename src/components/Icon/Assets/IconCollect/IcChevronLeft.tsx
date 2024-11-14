import { IconProps } from "@components/Icon/Icon.types";
import { useIconProperties } from "@components/Icon/useIconProperties";

const IcChevronLeft = ({ size = "md", color = "grey-dark", ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);

  return (
    <svg
      {...props}
      width={svgSize}
      height={svgSize}
      viewBox="0 0 19 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.374672 15.5L15.1493 30.2746L18.6253 26.7985L7.317 15.4902L18.6253 4.18182L15.1493 0.725403L0.374672 15.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default IcChevronLeft;
