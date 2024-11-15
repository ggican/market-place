import { IconProps } from "@components/Icon/Icon.types";
import { useIconProperties } from "@components/Icon/useIconProperties";

const IcHome = ({ size = "md", color = "grey-dark", ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);

  return (
    <svg
      {...props}
      width={svgSize}
      height={svgSize}
      viewBox="0 0 28 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.25 33.4999H1.75C0.783502 33.4999 0 32.7164 0 31.7499V14.9744C0 14.5103 0.184539 14.0652 0.51275 13.7371L12.7627 1.48713C13.091 1.15852 13.5364 0.973877 14.0009 0.973877C14.4653 0.973877 14.9108 1.15852 15.239 1.48713L27.489 13.7371C27.8176 14.0649 28.0015 14.5103 28 14.9744V31.7499C28 32.7164 27.2165 33.4999 26.25 33.4999ZM10.5 21.2499H17.5V29.9999H24.5V15.6989L14 5.19888L3.5 15.6989V29.9999H10.5V21.2499Z"
        fill={fill}
      />
    </svg>
  );
};

export default IcHome;
