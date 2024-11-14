"use client";

import BarChart from "@components/Charts/BarChart";
import { TDataItem } from "@components/Charts/BarChart/BarChart";
import List from "@components/List";
import { getProductListService, getProductReport } from "@services/product-services";
import { useQuery } from "@tanstack/react-query";

const AdminHomePage = () => {
  const {
    data: responseReport,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["get-report-data"],
    queryFn: getProductReport,
  });

  return (
    <div className="w-full block p-[24px]">
      <BarChart
        title="Product Sold"
        options={[
          {
            value: "week",
            label: "This Week",
          },
        ]}
        isLoading={isLoading}
        data={responseReport?.data as TDataItem[]}
      ></BarChart>

      <div className="inline-flex w-[100%] md:w-[100%] lg:w-[100%] sm:w-[100%] xl:w-[50%] mt-[40px]">
        <List
          title="Top selling product"
          options={[
            {
              value: "week",
              label: "This Week",
            },
          ]}
        ></List>
      </div>
    </div>
  );
};

export default AdminHomePage;
