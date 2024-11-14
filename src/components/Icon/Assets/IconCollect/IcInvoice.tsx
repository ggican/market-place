import { IconProps } from "@components/Icon/Icon.types";
import { useIconProperties } from "@components/Icon/useIconProperties";

const IcInvoice = ({ size = "md", color = "grey-dark", ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);

  return (
    <svg
      {...props}
      width={svgSize}
      height={svgSize}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9167 35.25H4.58333C2.46624 35.25 0.75 33.5338 0.75 31.4167V4.58333C0.75 2.46624 2.46624 0.75 4.58333 0.75H31.4167C33.5338 0.75 35.25 2.46624 35.25 4.58333V19.9167C35.2491 19.9388 35.2453 19.9607 35.2385 19.9818C35.233 19.9993 35.2292 20.0173 35.227 20.0355C35.2162 20.2045 35.1833 20.3714 35.1292 20.5319L35.112 20.5837C35.0991 20.6269 35.0831 20.6692 35.0641 20.7102C34.9713 20.919 34.8414 21.1092 34.6808 21.2717L21.2641 34.6884C20.9066 35.046 20.4223 35.2479 19.9167 35.25ZM4.58333 4.58333V31.4167H18V19.9167C18 18.8581 18.8581 18 19.9167 18H31.4167V4.58333H4.58333ZM21.8333 21.8333V28.7084L28.7065 21.8333H21.8333Z"
        fill={fill}
      />
    </svg>
  );
};

export default IcInvoice;
