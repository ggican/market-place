import React, { ReactNode } from "react";

const ExternalContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="external-content w-full flex justify-center items-start">
      <div className="flex md:w-[375px] sm:w-[375px] lg:w-[375px] xl:w-[375px] w-[100%] flex-col">
        {children}
      </div>
    </div>
  );
};

export default ExternalContent;
