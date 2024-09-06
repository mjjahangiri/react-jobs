import "../assets/Home.scss";

import HeroSection from "../components/Smart/Hero/HeroSection";
import SmartJobs from "../components/Smart/Jobs/SmartJobs";
import SmartCards from "../components/Smart/Cards/SmartCards";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SmartCards />
      <SmartJobs summary={true} />
      <div className="view-all-jobs">
        <Link className="link" to="/jobs">
          View all Jobs
        </Link>
      </div>
    </>
  );
};

export default Home;
