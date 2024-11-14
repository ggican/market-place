export type TErrorResponse<TErrorData = undefined> = {
  code:
    | "ERROR"
    | "RUNTIME_ERROR"
    | "MISSING_ACCESS_TOKEN"
    | "UNAUTHORIZED"
    | "DUPLICATE_DATA"
    | "FAILED_TO_UPLOAD_ACTIVITY_IN_PROGRESS"
    | "INVALID_FILE_EXTENSION"
    | "UNKNOWN_ERROR";
  data: null;
  message: string;
  serverTime?: string;
  status?: number;
  errors?: TErrorData;
};

export type TSuccessResponse<TData = undefined> = {
  status: boolean;
  message: string;
  response?: TData;
  data?: TData;
  token?: TData;
};

export type TSuccessResponseSecond<TData = undefined> = {
  data?: {
    status: boolean;
    message: string;
    response?: TData;
  };
  token?: TData;
};

export type TypeAPIResponse<TData, ErrorData = undefined> =
  | TSuccessResponse<TData>
  | TSuccessResponseSecond<TData>
  | TErrorResponse<ErrorData>;
