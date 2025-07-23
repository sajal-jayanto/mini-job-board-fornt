import SearchBar from "@/components/SearchBar";
import JobCard from "@/components/JobCard";

const Home = () => {
  return (
    <>
      <SearchBar />
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <JobCard key={index} />
      ))}
    </>
  );
};

export default Home;
