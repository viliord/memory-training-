import PropTypes from "prop-types";

export const Radio = ({
  id,
  type,
  name,
  checked,
  value,
  onChange,
  htmlFor,
  children,
}) => {
  return (
    <>
      <input
        id={id}
        type={type}
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={htmlFor}>{children}</label>
    </>
  );
};

Radio.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  htmlFor: PropTypes.string,
  children: PropTypes.string,
};
