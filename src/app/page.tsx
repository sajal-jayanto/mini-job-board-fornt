import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import { FcKindle } from "react-icons/fc";

const Home = () => {
  return (
    <>
      <nav className="bg-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center text-xl font-bold text-white">
                Shomvob
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-md px-4 py-2 rounded-md bg-white text-blue-600">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="py-12">
        <SearchBar />
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <div className="flex items-center w-full max-w-4xl mx-auto mb-6">
        <div className="w-full h-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div className="border-b border-gray-300 pb-3">
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Senior Frontend Developer
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium text-primary flex gap-1">
                    <FcKindle className="mt-1" />
                    TechCorp
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Full-time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-secondary">
                    $120,000 - $150,000
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Posted 2 days ago
              </p>
            </div>
            <p>Job Description</p>
            <p>
              We are seeking a talented Senior Frontend Developer to join our
              dynamic team. You will be responsible for building responsive web
              applications using modern JavaScript frameworks and ensuring
              excellent user experiences across all platforms.
            </p>
            <p>Requirements</p>
            <p>
              We are seeking a talented Senior Frontend Developer to join our
              dynamic team. You will be responsible for building responsive web
              applications using modern JavaScript frameworks and ensuring
              excellent user experiences across all platforms.
            </p>
            <p>Benefits</p>
            <p>
              We are seeking a talented Senior Frontend Developer to join our
              dynamic team. You will be responsible for building responsive web
              applications using modern JavaScript frameworks and ensuring
              excellent user experiences across all platforms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
