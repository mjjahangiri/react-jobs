import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./SmartJobs.scss";

import SmartJob from "../Job/SmartJob";
import LocationSvg from "../../../assets/location.svg";

const SmartJobs = ({ summary = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jobsFetching = async () => {
      try {
        const res = await fetch("http://localhost:4000/jobs");
        const data = await res.json();
        summary ? setJobs(data.slice(0, 3)) : setJobs(data);
      } catch (error) {
        console.log("Error on Fetching jobs, ", error);
      } finally {
        setLoading(false);
      }
    };

    jobsFetching();
  }, []);

  return (
    <>
      <div className="jobs-container">
        <h2 className="jobs-title">
          {summary ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="jobs-wrapper">
          {loading ? (
            <h2>Loading ...</h2>
          ) : (
            jobs.map((job) => (
              <SmartJob key={job.id}>
                <span>{job.employment_type}</span>
                <h2>{job.title}</h2>
                <p>{job.description}</p>
                <span className="salary">{job.salary}</span>
                <div className="footer-wrapper">
                  <div className="location-wrapper">
                    <img
                      src={LocationSvg}
                      alt="location"
                      className="location-icon"
                    />
                    <span>{job.location}</span>
                  </div>
                  <Link to={`/jobs/${job.id}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </SmartJob>
            ))
          )}
        </div>
      </div>
    </>
  );
};

SmartJobs.propTypes = {
  summary: PropTypes.bool,
};

export default SmartJobs;
