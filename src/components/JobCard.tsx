import { JobType } from "@/app/(public)/page";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";

const JobCard = ({ job }: { job: JobType }) => {
  return (
    <>
      <div className="flex items-center w-full max-w-4xl mx-auto mb-6">
        <div className="w-full h-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div className="border-b border-gray-300 pb-2">
              <div className="flex justify-between">
                <p className="text-lg font-semibold text-gray-800 mb-1">
                  {job.title}
                </p>
                <p className="text-gray-600">{job.salaryRange}</p>
              </div>
              <p className="text-lg font-medium text-primary mb-1 text-blue-600">
                {job.companyName}
              </p>
              <div className="flex gap-2 text-gray-500">
                <div className="flex gap-1">
                  <CiLocationOn className="mt-1" />
                  <p className="flex">{job.location}</p>
                </div>
                <div className="flex gap-1">
                  <CiStopwatch className="mt-1" />
                  <p className="flex">{job.jobType}</p>
                </div>
              </div>
            </div>
            <Link
              className="mt-3 bg-blue-600 flex justify-center text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              href={{ pathname: "/job-details", query: { id: job.id } }}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
