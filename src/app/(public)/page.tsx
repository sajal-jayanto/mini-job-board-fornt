import SearchBar from "@/components/SearchBar";
import JobCard from "@/components/JobCard";

export type JobType = {
  id: string;
  title: string;
  companyName: string;
  location: string;
  jobType: "Full-time" | "Part-time" | "Contract" | "Internship" | string;
  salaryRange: string;
  description: string;
  requirements: string;
  benefits: string;
};

const Home = async () => {
  const res = await fetch("http://localhost:3001/jobs");
  const jobs = await res.json();

  return (
    <>
      <SearchBar />
      {jobs.map((job: JobType) => (
        <JobCard key={job.id} job={job} />
      ))}
    </>
  );
};

export default Home;
