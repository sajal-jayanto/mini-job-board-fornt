"use client";

import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  resumeLink: string;
};

const ApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const defaultValues = { name: "", email: "", resumeLink: "" };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues });

  const onSubmit = async (value: FormValues) => {
    const { name, email, resumeLink: fileUrl } = value;
    try {
      const res = await fetch(
        `https://mini-job-board-back-production.up.railway.app/application`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, fileUrl }),
        }
      );
      if (!res.ok) {
        console.log("Internal server error!");
      }
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {submitted && (
        <div className="m-2 p-2 rounded-md bg-green-100 text-green-800 text-sm border border-green-300">
          ✅ Application submitted successfully!
        </div>
      )}
      <FormInput
        label="Full Name"
        register={register("name", { required: "Full Name is required" })}
        error={errors.name}
      />
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
        label="CV/Resume link"
        register={register("resumeLink", {
          required: "CV/Resume link is required",
        })}
        error={errors.resumeLink}
      />
      <button
        type="submit"
        className="m-2 mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ApplicationForm;
