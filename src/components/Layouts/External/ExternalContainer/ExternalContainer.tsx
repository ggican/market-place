import React, { ReactNode } from "react";

interface TExternalContainerProps {
  children: ReactNode;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

const ExternalContent: React.FC<TExternalContainerProps> = ({
  children,
  paddingLeft = "pl-9", // Tailwind for 36px (9 * 4px)
  paddingRight = "pr-9",
  paddingTop = "",
  paddingBottom = "",
}) => {
  return (
    <div
      className={`external-container w-full flex justify-center items-start ${paddingLeft} ${paddingRight} ${paddingTop} ${paddingBottom}`}
    >
      {children}
    </div>
  );
};

export default ExternalContent;
