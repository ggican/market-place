import fetchAPI, { errorResponse } from "@services/fetchAPI";
import { TypeAPIResponse } from "src/types/response.types";

export const postUserLoginService = async (payload: { email: string; password: string }) => {
  const result = await fetchAPI(`/platform/user/sign-in`, "POST", {}, payload, true);

  return result;
};

export const getUserInfoService = async (token: string) => {
  const url = "/platform/user/info";
  try {
    let currentUrl: string = `${process.env.NEXT_PUBLIC_BASE_API}${url}`;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("token", token);

    const requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(currentUrl, requestOptions);
    return (await response.json()) as TypeAPIResponse<any, undefined>;
  } catch (e) {
    return errorResponse(e);
  }
};
