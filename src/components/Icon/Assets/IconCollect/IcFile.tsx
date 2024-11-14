import { IconProps } from "@components/Icon/Icon.types";
import { useIconProperties } from "@components/Icon/useIconProperties";

const IcFile = ({ size = "md", color = "grey-dark", ...props }: IconProps): JSX.Element => {
  const { fill, svgSize } = useIconProperties(size, color);

  return (
    <svg
      {...props}
      width={svgSize}
      height={svgSize}
      viewBox="0 0 40 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.3824 33.2028H2.73044C2.22348 33.2079 1.73594 33.0079 1.3787 32.6482C1.02146 32.2884 0.824888 31.7995 0.833683 31.2926H0.820312V4.55073C0.820312 2.44086 2.5307 0.730469 4.64057 0.730469H16.1014C16.528 0.730876 16.9422 0.874107 17.278 1.13733L21.6407 4.55073H31.3824C33.4923 4.55073 35.2027 6.26112 35.2027 8.37099V16.0115H37.1128C37.7549 16.0116 38.3539 16.3342 38.7073 16.8703C39.0607 17.4064 39.1212 18.0841 38.8682 18.6742L33.1378 32.0452C32.8368 32.7473 32.1464 33.2028 31.3824 33.2028ZM9.72152 19.8318L5.62811 29.3824H30.1236L34.217 19.8318H9.72152ZM4.64057 8.37099V21.9902L6.70543 17.1691C7.00643 16.4669 7.69687 16.0116 8.46084 16.0115H31.3824V8.37099H4.64057Z"
        fill={fill}
      />
    </svg>
  );
};

export default IcFile;
