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
          <div className="m-2">
            <label>Full Name *</label>
            <input className="mt-1 h-9 w-full border border-gray-300 rounded-md text-black text-base pl-4" />
          </div>
          <div className="m-2">
            <label>Email Address *</label>
            <input className="mt-1 h-9 w-full border border-gray-300 rounded-md text-black text-base pl-4" />
          </div>
          <div className="m-2">
            <label>CV/Resume Link *</label>
            <input className="mt-1 h-9 w-full border border-gray-300 rounded-md text-black text-base pl-4" />
          </div>
          <button className="m-2 mt-3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
