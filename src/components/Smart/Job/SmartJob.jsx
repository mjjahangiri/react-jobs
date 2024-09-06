import "./SmartJob.scss";
import PropTypes from "prop-types";

const SmartJob = ({ children }) => {
  return <div className="recent-job-wrapper">{children}</div>;
};

SmartJob.propTypes = {
  children: PropTypes.array.isRequired,
};

export default SmartJob;
