import "./SmartCards.scss";

import BaseCard from "../../Base/BaseCard/BaseCard";
import { Link } from "react-router-dom";

const SmartCards = () => {
  return (
    <div className="container">
      <BaseCard>
        <h1 className="title">For Developers</h1>
        <p className="description">
          Browse our React jobs and start your career today
        </p>
        <Link className="btn btn-developer" to="/jobs">
          Browse Jobs
        </Link>
      </BaseCard>
      <BaseCard>
        <h1 className="title">For Employers</h1>
        <p className="description">
          List your jobs to find the perfect developer for the role
        </p>
        <Link className="btn" to="/add-job">
          Add Job
        </Link>
      </BaseCard>
    </div>
  );
};

export default SmartCards;
