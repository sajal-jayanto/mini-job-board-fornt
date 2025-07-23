import CreateJobsForm from "@/components/CreateJobsForm";

const AdminPage = () => {
  return (
    <div className="flex items-center w-full max-w-4xl mx-auto my-6 ">
      <div className="w-full h-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
        <div className="flex-1 p-4 flex flex-col justify-between">
          <h1 className="text-xl font-bold text-foreground mb-4">
            Create A New Job
          </h1>
          <CreateJobsForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
