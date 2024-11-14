import { IconProps } from "@components/Icon/Icon.types";
import { useIconProperties } from "@components/Icon/useIconProperties";

const IcChart = ({ size = "md", color = "grey-dark", ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);
  return (
    <svg
      {...props}
      width={svgSize}
      height={svgSize}
      viewBox="0 0 36 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.1127 34.7991H2.64048C1.58554 34.7991 0.730347 33.9439 0.730347 32.889V0.416748H4.55061V30.9788H35.1127V34.7991ZM10.9935 25.2484L8.37087 22.6812L17.6465 13.5966C18.3766 12.887 19.5389 12.887 20.2691 13.5966L24.5229 17.7626L32.4901 9.9674L35.1127 12.5346L25.8371 21.6192C25.1069 22.3289 23.9447 22.3289 23.2145 21.6192L18.9587 17.4513L10.9954 25.2484H10.9935Z"
        fill={fill}
      />
    </svg>
  );
};

export default IcChart;
