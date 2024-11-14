"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
// eslint-disable-next-line import/order
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { TLoginPayload } from "src/types/user.types";

// Define the schema with zod
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginPayload>({
    defaultValues: {
      email: "ggican@gmail.com",
      password: "12345678",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: TLoginPayload) => {
    setLoading(true);
    await signIn("credentials", {
      ...data,
      redirect: true,
    });

    setLoading(false);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
          <input
            autoComplete="off"
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
          <input
            autoComplete="off"
            type="password"
            {...register("password")}
            defaultValue="12345678"
            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="w-full block">
          <button
            className=" w-full mt-[20px] bg-primary px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300w-full h-[60px] flex justify-center items-center focus:ring-blue-500 focus:ring-offset-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Loading...
              </>
            ) : (
              "Login"
            )}
          </button>
        </div>
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link className="text-primary hover:underline" href="/register">
            Register
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
