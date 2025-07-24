"use client";
import FormInput from "@/components/FormInput";
import FormTextarea from "@/components/FormTextarea";
import { getAuthToken } from "@/lib/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  title: string;
  companyName: string;
  location: string;
  jobType: string;
  salaryRange: string;
  description: string;
  requirements: string;
  benefits: string;
};

const CreateJobsForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const defaultValues = {
    title: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryRange: "",
    description: "",
    requirements: "",
    benefits: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues });

  const onSubmit = async (value: FormValues) => {
    const {
      title,
      companyName,
      location,
      jobType,
      salaryRange,
      description,
      requirements,
      benefits,
    } = value;
    try {
      const token = await getAuthToken();
      const res = await fetch(
        `https://mini-job-board-back-production.up.railway.app/jobs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            companyName,
            location,
            jobType,
            salaryRange,
            description,
            requirements,
            benefits,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        console.log(data);
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (err) {
      console.error("Submission error:", err);
    }
    console.log(title, companyName, location, jobType, salaryRange);
  };

  return (
    <>
      {submitted && (
        <div className="m-2 p-2 rounded-md bg-green-100 text-green-800 text-sm border border-green-300">
          ✅ Job created successfully!
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="w-1/2">
            <FormInput
              label="Job Title"
              register={register("title", {
                required: "Job Title is required",
              })}
              error={errors.title}
            />
          </div>
          <div className="w-1/2">
            <FormInput
              label="Company Name"
              register={register("companyName", {
                required: "Company Name is required",
              })}
              error={errors.companyName}
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <FormInput
              label="Location"
              register={register("location", {
                required: "Location is required",
              })}
              error={errors.location}
            />
          </div>
          <div className="w-1/2">
            <FormInput
              label="Job Type"
              register={register("jobType", {
                required: "Job Type is required",
              })}
              error={errors.jobType}
            />
          </div>
        </div>
        <FormInput
          label="Salary Range"
          register={register("salaryRange", {
            required: "Job Type is required",
          })}
          error={errors.salaryRange}
        />
        <FormTextarea
          label="Job Description"
          register={register("description", {
            required: "Job Description is required",
            minLength: {
              value: 20,
              message: "Job Description must be at least 20 characters",
            },
          })}
          error={errors.description}
        />
        <FormTextarea
          label="Job Requirements"
          register={register("requirements", {
            required: "Job Requirements is required",
            minLength: {
              value: 20,
              message: "Job Requirements must be at least 20 characters",
            },
          })}
          error={errors.requirements}
        />
        <FormTextarea
          label="Job Benefits"
          register={register("benefits", {
            required: "Job Requirements is required",
            minLength: {
              value: 20,
              message: "Job Benefits must be at least 20 characters",
            },
          })}
          error={errors.benefits}
        />
        <button
          type="submit"
          className="m-2 mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Create Job
        </button>
      </form>
    </>
  );
};

export default CreateJobsForm;
