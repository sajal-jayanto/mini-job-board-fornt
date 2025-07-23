import ApplicationForm from "@/components/ApplicationForm";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { FcKindle } from "react-icons/fc";
import { MdOutlineAttachMoney } from "react-icons/md";

const ApplyForm = () => {
  return (
    <div className="flex items-center w-full max-w-4xl mx-auto my-6 ">
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
          <ApplicationForm />
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
