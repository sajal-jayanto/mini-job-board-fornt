import SearchBar from "@/components/SearchBar";
import JobCard from "@/components/JobCard";

export type JobType = {
  id: string;
  title: string;
  companyName: string;
  location: string;
  jobType: string;
  salaryRange: string;
  description: string;
  requirements: string;
  benefits: string;
};

const Home = async () => {
  const res = await fetch(
    "http://mini-job-board-back-production.up.railway.app/jobs"
  );
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
