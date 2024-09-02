import PropTypes from "prop-types";
import "./BaseCard.scss";

const BaseCard = ({ children }) => {
  return <div className="card-wrapper">{children}</div>;
};

BaseCard.propTypes = {
  children: PropTypes.array.isRequired,
};

export default BaseCard;
