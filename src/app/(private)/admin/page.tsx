const AdminPage = () => {
  return (
    <div className="flex items-center w-full max-w-4xl mx-auto my-6 ">
      <div className="w-full h-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
        <div className="flex-1 p-4 flex flex-col justify-between">
          <h1 className="text-xl font-bold text-foreground mb-4">
            Create A New Job
          </h1>
          <div className="m-2">
            <label>Job Title *</label>
            <input className="mt-1 h-9 w-full border border-gray-300 rounded-md text-black text-base pl-4" />
          </div>
          <div className="m-2">
            <label>Company Name *</label>
            <input className="mt-1 h-9 w-full border border-gray-300 rounded-md text-black text-base pl-4" />
          </div>
          <div className="m-2">
            <label>Location *</label>
            <input className="mt-1 h-9 w-full border border-gray-300 rounded-md text-black text-base pl-4" />
          </div>
          <div className="m-2">
            <label>Job Type *</label>
            <input className="mt-1 h-9 w-full border border-gray-300 rounded-md text-black text-base pl-4" />
          </div>
          <div className="m-2">
            <label>Salary Range *</label>
            <input className="mt-1 h-9 w-full border border-gray-300 rounded-md text-black text-base pl-4" />
          </div>
          <div className="m-2 flex flex-col">
            <label>Job Description *</label>
            <textarea
              className="mt-1 border border-gray-300 rounded-md text-black text-base pl-4"
              id="w3review"
              name="w3review"
              rows={4}
              cols={50}
            />
          </div>
          <div className="m-2 flex flex-col">
            <label>Requirements *</label>
            <textarea
              className="mt-1 border border-gray-300 rounded-md text-black text-base pl-4"
              id="w3review"
              name="w3review"
              rows={4}
              cols={50}
            />
          </div>
          <div className="m-2 flex flex-col">
            <label>Benefits *</label>
            <textarea
              className="mt-1 border border-gray-300 rounded-md text-black text-base pl-4"
              id="w3review"
              name="w3review"
              rows={4}
              cols={50}
            />
          </div>
          <button className="m-2 mt-3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
