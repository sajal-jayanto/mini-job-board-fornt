import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 text-2xl font-bold text-white">
            <Link href="/">Shomvob</Link>
          </div>

          <div className="flex items-center">
            <Link
              href="/admin"
              className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
            >
              Create Jobs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
