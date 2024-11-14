import { getSession } from "next-auth/react";

import { TErrorResponse, TypeAPIResponse } from "src/types/response.types";

export const errorResponse = (e: unknown): TErrorResponse => {
  if (e instanceof Error) {
    return {
      code: "RUNTIME_ERROR",
      message: e.message,
      data: null,
    };
  } else {
    return {
      code: "UNKNOWN_ERROR",
      message: "Oops, something went wrong!",
      data: null,
    };
  }
};

const fetchAPI = async <T>(
  url: string,
  method: string,
  params?: any,
  payload?: any,
  guestMode?: boolean,
): Promise<TypeAPIResponse<T, any>> => {
  try {
    let currentUrl: string = `${process.env.NEXT_PUBLIC_BASE_API}${url}`;
    if (params && Object.keys(params).length) {
      currentUrl = `${process.env.NEXT_PUBLIC_BASE_API}${url}?${new URLSearchParams(params).toString()}`;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if (!guestMode) {
      const status: any = getSession();
      myHeaders.append("token", (await status)?.response);
    }

    const requestOptions: any = {
      method: method,
      headers: myHeaders,
      redirect: "follow",
    };

    if (payload) {
      requestOptions.body = JSON.stringify(payload);
    }
    const response = await fetch(currentUrl, requestOptions);
    return {
      data: await response.json(),
    } as TypeAPIResponse<T, undefined>;
  } catch (e) {
    return errorResponse(e);
  }
};

export default fetchAPI;
