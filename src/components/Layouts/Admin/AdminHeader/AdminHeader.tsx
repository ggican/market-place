"use client";

import Icon from "@components/Icon";
import React from "react";

const AdminHeader: React.FC<any> = () => {
  return (
    <header
      className="bg-white justify-between inline-flex lg:p-[24px] md:py-[12px] py-[12px] px-[24px] sm:py-[12px] xs:py-[12px] md:px-[24px] sm:px-[24px] xs:px-[24px]"
      id="admin-header-admin"
    >
      <div
        id="admin-header-title"
        className=" hidden md:hidden lg:inline-flex sm:hidden xs:hidden text-[41.55px] text-black-title font-bold leading-[48.69px] tracking-[0.075em] text-left decoration-skip-none"
      >
        Home
      </div>

      <div className="flex justify-between items-center md:flex lg:hidden sm:flex xs:flex">
        <span className="w-[33px] h-[33px] inline-flex rounded-full bg-primary-dark border-[4px] border-white relative">
          <span className="absolute right-[-30px] bg-danger w-[20px] mr-[5px] h-[20px] border-[4px] border-white rounded-full inline-flex"></span>
        </span>
        <span className="w-[calc(100%-80px)] text-[30px] font-bold leading-[35.16px] text-left text-primary-dark decoration-skip-none">
          BeLaundry
        </span>
      </div>
      <div
        id="admin-header-profile"
        className="hidden md:hidden lg:inline-flex sm:hidden xs:hidden items-center"
      >
        <Icon icon="user" size="lg"></Icon>
        <span className="ml-2 text-primary-dark text-[24px] underline font-semi-medium font-roboto">
          John Doe
        </span>
      </div>
    </header>
  );
};

export default AdminHeader;
