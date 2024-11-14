// LoginForm.tsx
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { TLoginPayload } from "src/types/user.types";

// Define the schema with zod
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginPayload>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: TLoginPayload) => {
    console.log("Login Data:", data);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
          <input
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
            type="password"
            {...register("password")}
            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="w-full block">
          <button
            type="submit"
            className="w-full mt-[20px] bg-primary px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
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
