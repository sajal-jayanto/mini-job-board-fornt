import Card from "@/components/Card";
import Header from "@/components/Header";
import JobDetails from "@/components/JobDetails";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  return (
    <>
      <Header />
      <div className="py-12">
        <SearchBar />
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <JobDetails />
    </>
  );
};

export default Home;
