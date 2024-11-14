"use client";

import Icon from "@components/Icon";
import { IconKeys } from "@components/Icon/Icon.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export type TMenu = {
  title: string;
  link: string;
  icon: IconKeys;
};

const AdminSidebar: React.FC<{
  menu: TMenu[];
}> = ({ menu }) => {
  const pathname = usePathname();
  return (
    <aside
      id="admin-sidebar"
      className="bg-primary w-[350px] hidden px-[32px] pt-[20px] md:hidden sm:hidden xs:hidden lg:inline-flex"
    >
      <ul className="w-full flex flex-col">
        <li className="flex justify-between items-center ">
          <span className="w-[56px] h-[56px] inline-flex rounded-full bg-primary-dark border-[4px] border-white relative">
            <span className="absolute right-[-40px] bg-danger w-[20px] mr-[5px] h-[20px] border-[4px] border-white rounded-full inline-flex"></span>
          </span>
          <span className="w-[calc(100%-100px)] text-[30px] font-bold leading-[35.16px] text-left text-white decoration-skip-none">
            BeLaundry
          </span>
        </li>
        <li className="flex mt-[40px]">
          <span className="bg-primary p-[21] my-[16px] flex w-full text-[26.2px] font-normal leading-[30.7px] text-left decoration-skip-none text-white">
            Menu
          </span>
        </li>

        {menu?.map((item: TMenu, key: number) => {
          return (
            <li key={key}>
              <Link
                href={item?.link}
                className={
                  item?.link === pathname
                    ? "my-[4px] items-center font-bold py-[18px] px-[14px] bg-white text-primary-dark rounded-md flex w-full text-[26.2px] leading-[30.7px] text-left decoration-skip-none group transition-all duration-300"
                    : "my-[4px] items-center hover:font-bold py-[18px] px-[14px] hover:bg-white hover:text-primary-dark rounded-md flex w-full text-[26.2px] font-normal leading-[30.7px] text-left decoration-skip-none text-white group transition-all duration-300"
                }
              >
                <Icon
                  size="lg"
                  color="white" // initial color
                  icon={item?.icon}
                  className={
                    item?.link === pathname
                      ? "mr-[18px] [&_*]:fill-primary-dark transition-colors duration-300"
                      : 'mr-[18px] group-hover:*:fill-primary-dark transition-colors duration-300"'
                  }
                />
                {item?.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
