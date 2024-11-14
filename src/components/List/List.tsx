import React from "react";

import DropdownInput from "../Form/DropdownInput";

const List: React.FC<any> = ({ title, options }) => {
  return (
    <div className="bar-chart shadow-[1.9px_3.79px_6.63px_4.74px_#EFEFEF40] flex-col rounded-[14px] bg-white  flex w-full">
      <div className="header-bar-chart title pb-[21px] items-center justify-between flex w-full p-[24px]">
        <span className=" text-black font-['Poppins'] text-[17.06px] font-semibold leading-[25.59px] text-left decoration-skip-none">
          {title}
        </span>
        <div className="inline-flex w-[115px] items-center justify-center">
          <DropdownInput options={options} size="sm" />
        </div>
      </div>
      <div className="pt-[24px] w-full flex flex-col">
        <div className="px-[24px]">
          <div className="header-list flex justify-between border-b-[2px] border-[#F2F7FB] items-center pb-[8px]">
            <span className="text-grey font-poppins text-custom-13 font-medium leading-custom-19">
              Name
            </span>
            <span className="text-grey  font-poppins text-custom-13 font-medium leading-custom-19">
              Value
            </span>
          </div>
        </div>
        <div className="content-list lex justify-between items-center">
          <ul>
            <li className="even:bg-[#F2F7FB] py-[16px] flex w-full justify-between px-[24px]">
              <span className="font-poppins text-custom-13 font-normal leading-custom-19">
                Item A
              </span>
              <span className="font-poppins text-custom-13 font-normal leading-custom-19">
                $ 120.00
              </span>
            </li>
            <li className="even:bg-[#F2F7FB] py-[16px] flex w-full justify-between px-[24px]">
              <span className="font-poppins text-custom-13 font-normal leading-custom-19">
                Item A
              </span>
              <span className="font-poppins text-custom-13 font-normal leading-custom-19">
                $ 120.00
              </span>
            </li>
            <li className="even:bg-[#F2F7FB] py-[16px] flex w-full justify-between px-[24px]">
              <span className="font-poppins text-custom-13 font-normal leading-custom-19">
                Item A
              </span>
              <span className="font-poppins text-custom-13 font-normal leading-custom-19">
                $ 120.00
              </span>
            </li>
            <li className="even:bg-[#F2F7FB] py-[16px] flex w-full justify-between px-[24px]">
              <span className="font-poppins text-custom-13 font-normal leading-custom-19">
                Item A
              </span>
              <span className="font-poppins text-custom-13 font-normal leading-custom-19">
                $ 120.00
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
