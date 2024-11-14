import { delay, http, HttpResponse } from "msw";

import { BookListMock } from "./data/book";
import { TReportItem } from "src/types/report.types";
import { reportItemMock } from "@lib/mocks/data/report-mock";
import { TCategory, TProduct } from "src/types/product.types";
import { TSuccessResponse, TSuccessResponseSecond } from "src/types/response.types";
import { ProductCategoryMock, ProductMock } from "@lib/mocks/data/product-mock";
import { TUserInfo } from "src/types/user.types";
import {
  UserInfoSuccessMock,
  UserLoginResponseSuccessMock,
  UserRegisterResponseSuccessMock,
} from "@lib/mocks/data/user-mock";

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_BASE_API}/platform/product/report`, () => {
    return HttpResponse.json<TReportItem[]>(reportItemMock);
  }),
  http.get(`${process.env.NEXT_PUBLIC_BASE_API}/platform/product`, () => {
    return HttpResponse.json<TSuccessResponseSecond<TProduct[]>>({
      data: {
        status: true,
        message: "Success get all product",
        response: ProductMock,
      },
    });
  }),
  http.get(`${process.env.NEXT_PUBLIC_BASE_API}/platform/product/categories`, () => {
    return HttpResponse.json<TSuccessResponse<TCategory[]>>({
      status: true,
      message: "Success get all product",
      response: ProductCategoryMock,
    });
  }),

  http.get(`${process.env.NEXT_PUBLIC_BASE_API}/platform/user/info`, () => {
    return HttpResponse.json<TSuccessResponse<TUserInfo>>(UserInfoSuccessMock);
  }),

  http.post(`${process.env.NEXT_PUBLIC_BASE_API}/platform/user/sign-up`, () => {
    return HttpResponse.json<TSuccessResponse<string>>(UserRegisterResponseSuccessMock);
  }),
  http.post(`${process.env.NEXT_PUBLIC_BASE_API}/platform/user/sign-in`, () => {
    return HttpResponse.json<TSuccessResponse<string>>(UserLoginResponseSuccessMock);
  }),
];
