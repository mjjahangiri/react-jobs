import "./Navbar.scss";
import reactLogo from "../../../assets/react.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="brand-wrapper">
          <img src={reactLogo} alt="reactLogo" className="brand-logo" />
          <a className="brand" href="#">
            React Jobs
          </a>
        </div>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
