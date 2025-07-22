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
      <div className="mb-8">
        <div className="relative"></div>
      </div>
    </>
  );
};

export default Home;
