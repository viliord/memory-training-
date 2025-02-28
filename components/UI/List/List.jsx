import PropTypes from "prop-types";

export const List = ({ className, children }) => {
  return <li className={className}>{children}</li>;
};
List.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};
