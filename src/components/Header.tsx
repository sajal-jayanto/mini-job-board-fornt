import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center text-2xl font-bold text-white">
              <Link href="/">Shomvob</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
