import "../assets/Job.scss";

import { Link, useLoaderData } from "react-router-dom";
import location from "../assets/location.svg";

const Job = () => {
  const job = useLoaderData();
  return (
    <div className="job-wrapper">
      <Link className="back" to="/jobs">
        {`<< `}Back to job listing
      </Link>
      <div className="job-container">
        <main className="job-detail">
          <div className="job-headers">
            {job.employment_type}
            <h2>{job.title}</h2>
            <div className="location-wrapper">
              <img src={location} alt="location" className="location-icon" />
              <span className="location-name">{job.location}</span>
            </div>
          </div>
          <div className="job-description">
            <h3>Job Description</h3>
            {job.description}
            <h3>Salary</h3>
            {job.salary}
          </div>
        </main>
        <aside className="job-actions">
          <h4 className="title">Manage Job</h4>
          <Link className="btn edit" to="">
            Edit Job
          </Link>
          <Link className="btn delete" to="">
            Delete Job
          </Link>
        </aside>
      </div>
    </div>
  );
};
const JobLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:4000/jobs/${params.id}`);
  const data = await res.json();

  return data;
};

export { Job as default, JobLoader };
