import PropTypes from "prop-types";

export const Tag = ({ tag, children, className, style }) => {
  const content = () => {
    switch (tag) {
      case "h1":
        return <h1>{children}</h1>;
      case "h2":
        return <h2>{children}</h2>;
      case "h3":
        return <h3 style={style}>{children}</h3>;
      case "h4":
        return <h4>{children}</h4>;
      case "h5":
        return <h5>{children}</h5>;
      case "h6":
        return <h6>{children}</h6>;
      case "aside":
        return <aside className={className}>{children}</aside>;
      case "p":
        return <p style={style}>{children}</p>;

      default:
        return <div className={className}>{children}</div>;
    }
  };

  return <>{content()}</>;
};

Tag.propTypes = {
  tag: PropTypes.any,
  children: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string,
};
