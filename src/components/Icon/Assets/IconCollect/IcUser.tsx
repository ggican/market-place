import { IconProps } from "@components/Icon/Icon.types";
import { useIconProperties } from "@components/Icon/useIconProperties";

const IcUser = ({ size = "md", color = "grey-dark", ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);

  return (
    <svg
      {...props}
      width={svgSize}
      height={svgSize}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.375 13C11.375 8.51269 15.0127 4.875 19.5 4.875C23.9873 4.875 27.625 8.51269 27.625 13C27.625 17.4873 23.9873 21.125 19.5 21.125C15.0127 21.125 11.375 17.4873 11.375 13ZM19.5 17.875C22.1924 17.875 24.375 15.6924 24.375 13C24.375 10.3076 22.1924 8.125 19.5 8.125C16.8076 8.125 14.625 10.3076 14.625 13C14.625 15.6924 16.8076 17.875 19.5 17.875Z"
        fill={fill}
      />
      <path
        d="M10.3076 26.5576C7.86964 28.9956 6.5 32.3022 6.5 35.75H9.75C9.75 33.1641 10.7772 30.6842 12.6057 28.8557C14.4342 27.0272 16.9141 26 19.5 26C22.0859 26 24.5658 27.0272 26.3943 28.8557C28.2228 30.6842 29.25 33.1641 29.25 35.75H32.5C32.5 32.3022 31.1304 28.9956 28.6924 26.5576C26.2544 24.1196 22.9478 22.75 19.5 22.75C16.0522 22.75 12.7456 24.1196 10.3076 26.5576Z"
        fill={fill}
      />
    </svg>
  );
};

export default IcUser;
