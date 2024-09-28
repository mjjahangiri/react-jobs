import "./SmartJobAction.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddJob = () => {
  const params = useParams();

  const [job, setJob] = useState(null);

  const getJob = async (params) => {
    const res = await fetch(`http://localhost:4000/jobs/${params.id}`);
    const data = await res.json();
    setJob(data);
    setType(data.type);
    setTitle(data.title);
    setDescription(data.description);
    setSalary(data.salary);
    setLocation(data.location);
  };

  useEffect(() => {
    if (Object.keys(params).length) getJob(params);
  }, [params]);

  const [type, setType] = useState("Full_Time");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("under_$50K");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const addJobHandler = async (e) => {
    e.preventDefault();

    const newJob = {
      type,
      title,
      description,
      salary,
      location,
    };

    await fetch("http://localhost:4000/jobs", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    navigate("/jobs");
  };

  const editJobHandler = async (e) => {
    e.preventDefault();

    const updatedJob = {
      id: params.id,
      type,
      title,
      description,
      salary,
      location,
    };

    await fetch(`http://localhost:4000/jobs/${params.id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    });

    navigate("/jobs");
  };

  return (
    <div className="smart-add-job">
      <form
        className="form-wrapper"
        onSubmit={job ? editJobHandler : addJobHandler}
      >
        <h2 className="title">{job ? "Update Job" : "Add Job"}</h2>
        <div className="form-row">
          <label htmlFor="job-type">Job Type</label>
          <select
            name="type"
            id="job-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Full_Time">Full-Time</option>
            <option value="Part_Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="InternShip">InternShip</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="job-listing">Job Listing Name</label>
          <input
            type="text"
            name="title"
            id="job-listing"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows={20}
            style={{ width: "100%" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-row">
          <label htmlFor="salary">Salary</label>
          <select
            name="salary"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          >
            <option value="under_$50K">Under $50K</option>
            <option value="$50K_$100k">$50K-$100k</option>
            <option value="$100k_$150k">$100k-$150k</option>
            <option value="$150k_$200k">$150k-$200k</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-row">
          <input type="submit" value={job ? "Update Job" : "Add Job"} />
        </div>
        <div className="form-row">
          <Link to="/jobs" className="btn back">
            Back to Jobs
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
