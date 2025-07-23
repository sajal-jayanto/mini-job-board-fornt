import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { FcKindle } from "react-icons/fc";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import Link from "next/link";

const JobDetails = () => {
  return (
    <div className="flex items-center w-full max-w-4xl mx-auto mb-6">
      <div className="w-full h-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="border-b border-gray-300 pb-3 mb-3">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Senior Frontend Developer
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-medium text-primary flex gap-1 text-blue-600">
                  <FcKindle className="mt-1" />
                  TechCorp
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <CiLocationOn /> <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <CiStopwatch /> <span>Full-time</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <MdOutlineAttachMoney />
                $120,000 - $150,000
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-gray-500">
              Posted 2 days ago
            </p>
          </div>
          <p className="text-xl font-bold text-foreground mb-4">
            Job Description
          </p>
          <p className="text-gray-500 mb-4">
            We are seeking a talented Senior Frontend Developer to join our
            dynamic team. You will be responsible for building responsive web
            applications using modern JavaScript frameworks and ensuring
            excellent user experiences across all platforms.
          </p>
          <p className="text-xl font-bold text-foreground mb-2">Requirements</p>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex gap-2">
              <FaHandPointRight className="mt-1" />
              Strong analytical and data-driven decision making skills
            </div>
            <div className="flex gap-2">
              <FaHandPointRight className="mt-1" />
              Strong analytical and data-driven decision making skills
            </div>
            <div className="flex gap-2">
              <FaHandPointRight className="mt-1" />
              Strong analytical and data-driven decision making skills
            </div>
            <div className="flex gap-2">
              <FaHandPointRight className="mt-1" />
              Strong analytical and data-driven decision making skills
            </div>
            <div className="flex gap-2">
              <FaHandPointRight className="mt-1" />
              Strong analytical and data-driven decision making skills
            </div>
          </div>
          <p className="text-xl font-bold text-foreground mb-2">Benefits</p>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex gap-2">
              <FaHandPointRight className="mt-1" />
              Strong analytical and data-driven decision making skills
            </div>
            <div className="flex gap-2">
              <FaHandPointRight className="mt-1" />
              Strong analytical and data-driven decision making skills
            </div>
            <div className="flex gap-2">
              <FaHandPointRight className="mt-1" />
              Strong analytical and data-driven decision making skills
            </div>
            <div className="flex gap-2">
              <FaHandPointRight className="mt-1" />
              Strong analytical and data-driven decision making skills
            </div>
            <div className="flex gap-2">
              <FaHandPointRight className="mt-1" />
              Strong analytical and data-driven decision making skills
            </div>
          </div>
          <Link
            className="mt-3 bg-blue-600 flex justify-center text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            href="/apply-form"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
