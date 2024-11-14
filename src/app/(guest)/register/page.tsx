// RegisterForm.tsx
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { TRegisterPayload } from "src/types/user.types";

// Define the Zod schema for registration form
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Define the TypeScript type for the form based on the Zod schema

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterPayload>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: TRegisterPayload) => {
    console.log("Registration Data:", data);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your name"
          />
          {errors.name && <p className="mt-1 text-sm text-danger">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Phone</label>
          <input
            type="text"
            {...register("phone")}
            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="mt-1 text-sm text-danger">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your email"
          />
          {errors.email && <p className="mt-1 text-sm text-danger">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your password"
          />
          {errors.password && <p className="mt-1 text-sm text-danger">{errors.password.message}</p>}
        </div>
        <div className="w-full block">
          <button
            type="submit"
            className="w-full mt-[20px] bg-primary px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </div>
      </form>
      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <Link className="text-primary hover:underline" href="/login">
          Login
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
