export type TUserInfo = {
  id: number;
  name: string;
};

export interface TRegisterPayload {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export interface TLoginPayload {
  email: string;
  password: string;
}
