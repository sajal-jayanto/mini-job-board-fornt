"use client";

import FormInput from "@/components/FormInput";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const AdminLogin = () => {
  const defaultValues = { email: "", password: "" };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues });

  const onSubmit = (value: FormValues) => {
    const { email, password } = value;
    console.log(email, password);
  };

  return (
    <div className="h-screen flex items-center w-full max-w-lg mx-auto my-6 ">
      <div className="w-full h-auto bg-white rounded-md shadow-md overflow-hidden border border-gray-200 flex flex-col">
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="flex justify-center border-b border-gray-300 p-4">
            <div className="flex-shrink-0 flex items-center text-2xl font-bold text-black">
              Shomvob
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              label="Email Address"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              error={errors.email}
            />
            <FormInput
              type="password"
              label="Password"
              register={register("password", {
                required: "Password is required",
              })}
              error={errors.password}
            />
            <button
              type="submit"
              className="m-2 mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
