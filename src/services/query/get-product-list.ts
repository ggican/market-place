import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";

import { getProductListService } from "@services/product-services";

const useGetProductList = (
  options?: Omit<UseQueryOptions<any, unknown, any, QueryKey>, "queryKey" | "queryFn">,
) => {
  return useQuery({ queryKey: ["todos"], queryFn: getProductListService });
};

export default useGetProductList;
