import fetchAPI from "@services/fetchAPI";
import { TPayloadProduct, TProduct } from "src/types/product.types";
import {
  TSuccessResponse,
  TSuccessResponseSecond,
  TypeAPIResponse,
} from "src/types/response.types";

export const getProductListService = async () => {
  const result = await fetchAPI(`/platform/product`, "GET");

  return result;
};

export const postProductService = async (payload: TPayloadProduct) => {
  const result = await fetchAPI(`/platform/product`, "POST", {}, payload);

  return result;
};
export const getProductCategoriesService = async () => {
  const result = await fetchAPI<any>(`/platform/product/categories`, "GET");
  console.log(result, "result");
  return {
    ...result?.data,
  };
};
export const getProductDetailByIdService = async (id: string) =>
  await fetchAPI(`/platform/product/${id}`, "GET");

export const getProductReport = async () => {
  const response = await fetchAPI<TSuccessResponse<TProduct[]> | TSuccessResponseSecond>(
    "/platform/product/report",
    "GET",
  );

  console.log(response);
  return response;
  // if ("data" in response) {
  //   // Handle TSuccessResponse<TProduct[]> here
  //   return response.data; // This will be of type TProduct[]
  // } else if ("otherData" in response) {
  //   // Handle TSuccessResponseSecond here
  //   return response.otherData; // This will be of type string
  // }
};
