import "./App.scss";

import HeroSection from "./components/Smart/Hero/HeroSection.jsx";
import Navbar from "./components/Smart/Navbar/Navbar.jsx";
import BaseCard from "./components/Base/BaseCard/BaseCard.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <div className="container">
        <BaseCard>
          <h1 className="title">For Developers</h1>
          <p className="description">
            Browse our React jobs and start your career today
          </p>
          <button className="btn btn-developer">Browse Jobs</button>
        </BaseCard>
        <BaseCard>
          <h1 className="title">For Employers</h1>
          <p className="description">
            List your jobs to find the perfect developer for the role
          </p>
          <button className="btn">Add Job</button>
        </BaseCard>
      </div>
    </>
  );
}

export default App;
