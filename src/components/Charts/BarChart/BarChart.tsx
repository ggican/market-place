"use client";

import React, { useMemo } from "react";

import { DropDownOption } from "@components/Balance/Balance.types";

import DropdownInput from "../../Form/DropdownInput";

export interface TDataItem {
  created_at: string;
  income: number;
  total: number;
}

interface BarChartProps {
  data: TDataItem[];
  title: string;
  maxHeight?: number;
  isLoading?: boolean;
  options: DropDownOption[];
}

const BarChart: React.FC<BarChartProps> = ({
  isLoading,
  data,
  title,
  maxHeight = 300,
  options,
}) => {
  const maxIncome = useMemo(() => {
    if (!isLoading && data?.length > 0) {
      return Math.max(...data.map((item) => item.income));
    } else {
      return 0;
    }
  }, [data, isLoading]);
  const height = maxHeight;
  const scalingFactor = height / maxIncome;

  return (
    <div className="bar-chart shadow-[1.9px_3.79px_6.63px_4.74px_#EFEFEF40] bg-white flex-col rounded-[14px] p-[24px] flex w-full">
      <div className="header-bar-chart title pb-[21px] items-center border-b-[2px] border-[#F2F7FB] justify-between flex w-full">
        <span className=" text-black font-['Poppins'] text-[17.06px] font-semibold leading-[25.59px] text-left decoration-skip-none">
          {title}
        </span>
        <div className="inline-flex w-[115px] items-center justify-center">
          <DropdownInput options={options} size="sm" />
        </div>
      </div>
      <div className="pt-[24px] w-full flex">
        <div
          style={{ height: height + 42 }}
          className={`w-full flex flex-row items-end justify-between`}
        >
          <>
            {isLoading ? (
              <div
                style={{ height: height + 42 }}
                className="flex w-full justify-center items-center"
              >
                <p className="text-grey text-poppins text-bold text-[20px]">LOADING ....</p>
              </div>
            ) : data && data?.length > 0 ? (
              data.map((item, index) => {
                const date = new Date(item.created_at);
                const month = date.getMonth() + 1;
                const day = date.getDate();
                const formattedDate = `${month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}`;
                return (
                  <div
                    key={index}
                    className="cursor-pointer inline-flex flex-col md:w-[26px] w-[26px] lg:w-[68px] sm:w-[26px] justify-center items-center group"
                  >
                    <span className="font-poppins text-chart text-[10px] md:text-[10px] lg:text-[14px] sm:text-[10px] block text-center font-normal leading-[19.9px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.total} items
                    </span>

                    <div
                      style={{
                        height: item.income * scalingFactor,
                      }}
                      className="bg-chart w-full rounded-md group-hover:bg-chart-hover transition-colors duration-300"
                    />

                    <span className="block text-chart font-poppins text-[10px] md:text-[10px] lg:text-[14px] sm:text-[10px] font-normal leading-[19.9px] text-center w-full">
                      {formattedDate}
                    </span>
                  </div>
                );
              })
            ) : (
              <div
                style={{ height: height + 42 }}
                className="flex w-full justify-center items-center"
              >
                <p className="text-grey text-poppins text-bold text-[20px]">NO DATA</p>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
