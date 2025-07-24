"use client";

import JobDetails from "@/components/JobDetails";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { JobType } from "../page";

const JobDetailsPage = () => {
  const [job, setJob] = useState<JobType>({} as JobType);
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");

  useEffect(() => {
    if (!jobId) return;
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://mini-job-board-back-production.up.railway.app/jobs/${jobId}`
        );
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
    <Suspense fallback={<div>Loading job details...</div>}>
      <div className="py-12">
        <JobDetails job={job} />
      </div>
    </Suspense>
  );
};

export default JobDetailsPage;
