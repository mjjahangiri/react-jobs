import "./Navbar.scss";
import reactLogo from "../../../assets/react.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="brand-wrapper">
          <img src={reactLogo} alt="reactLogo" className="brand-logo" />
          <NavLink className="brand" to="/">
            React Jobs
          </NavLink>
        </div>

        <ul className="nav">
          <li className="nav-item">
            <NavLink
              className={`nav-link ${(isActive) => (isActive ? "active" : "")}`}
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${(isActive) => (isActive ? "active" : "")}`}
              to="/jobs"
            >
              Jobs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${(isActive) => (isActive ? "active" : "")}`}
              to="/add-job"
            >
              Add Job
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
