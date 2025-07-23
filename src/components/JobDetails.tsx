import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { FcKindle } from "react-icons/fc";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { JobType } from "@/app/(public)/page";

const JobDetails = ({ job }: { job: JobType }) => {
  return (
    <div className="flex items-center w-full max-w-4xl mx-auto mb-6">
      <div className="w-full h-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="border-b border-gray-300 pb-3 mb-3">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              <Link className="flex" href={{ pathname: "/" }}>
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
          <p className="text-xl font-bold text-foreground mb-4">
            Job Description
          </p>
          <p className="text-gray-500 mb-4">{job.description}</p>
          <p className="text-xl font-bold text-foreground mb-2">Requirements</p>
          <div className="flex flex-col gap-2 mb-4 text-gray-500">
            {job.requirements?.split(".").map((text, index) => (
              <div key={index} className="flex gap-2">
                <FaHandPointRight className="mt-1" />
                {text}
              </div>
            ))}
          </div>
          <p className="text-xl font-bold text-foreground mb-2">Benefits</p>
          <div className="flex flex-col gap-2 mb-4 text-gray-500">
            {job.benefits?.split(".").map((text, index) => (
              <div key={index} className="flex gap-2">
                <FaHandPointRight className="mt-1" />
                {text}
              </div>
            ))}
          </div>
          <Link
            className="mt-3 bg-blue-600 flex justify-center text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            href={{ pathname: "/apply-form", query: { id: job.id } }}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
