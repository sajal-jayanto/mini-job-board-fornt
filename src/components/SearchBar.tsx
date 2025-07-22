"use client";

import { useState } from "react";
import { Search } from "lucide-react";
export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // Add navigation or API call logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-4xl mx-auto bg-white border border-gray-600 rounded-lg px-4 py-2 shadow-sm"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Jobs...."
        className="flex-grow bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
      />
      <button type="submit" className="text-gray-500 hover:text-blue-600">
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
}
