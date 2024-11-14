import { getUserInfoService, postUserLoginService } from "@services/user-services";
import type { NextAuthConfig } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "email", name: "email" },
        password: { label: "Password", type: "password", name: "password" },
      },
      async authorize(credentials: any) {
        const result: any = await postUserLoginService({
          email: credentials?.email,
          password: credentials?.password,
        });

        if (result?.data?.status) {
          const userData: any = await getUserInfoService(result?.data?.response);
          return {
            ...result?.data,
            ...userData?.response,
          };
        }
        throw new Error(JSON.stringify({ error: "coooy" }));
      },
    }),
  ],
  callbacks: {
    async jwt(props: any) {
      const { user, token } = props;
      if (user) {
        token.user = user;
      }

      return {
        ...user,
        ...token,
      };
    },
    async signIn() {
      return true;
    },

    async session(props: { session: any; token: JWT; user: any }) {
      const { session, token } = props;
      return {
        ...session,
        ...token,
      };
    },
  },
  secret: "NQIg3A9PXO7An2JplLcgvppQDakIGkhXPd5dk2Qu6Dk=",
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig;
