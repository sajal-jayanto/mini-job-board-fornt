"use client";

import ApplicationForm from "@/components/ApplicationForm";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { FcKindle } from "react-icons/fc";
import { MdOutlineAttachMoney } from "react-icons/md";
import { JobType } from "../page";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const ApplyForm = () => {
  const [job, setJob] = useState<JobType>({} as JobType);
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");

  useEffect(() => {
    if (!jobId) return;
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/jobs/${jobId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch job");
        }
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };
    fetchData();
  }, [jobId]);

  return (
    <div className="flex items-center w-full max-w-4xl mx-auto my-6 ">
      <div className="w-full h-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="border-b border-gray-300 pb-3 mb-3">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              <Link
                className="flex"
                href={{ pathname: "/job-details", query: { id: job.id } }}
              >
                <IoArrowBackOutline className="mr-2 mt-1" />
                {job.title}
              </Link>
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-medium text-primary flex gap-1 text-blue-600">
                  <FcKindle className="mt-1" />
                  {job.companyName}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <CiLocationOn /> <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <CiStopwatch /> <span>{job.jobType}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <MdOutlineAttachMoney />
                {job.salaryRange}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-gray-500">
              Posted 2 days ago
            </p>
          </div>
          <ApplicationForm />
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
