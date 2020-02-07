import React from "react";
import PropTypes from "prop-types";

const Button = ({ actionFunction, actionText }) => {
  return (
    <button type="button" onClick={actionFunction}>
      {actionText}
    </button>
  );
};

export default Button;

Button.propTypes = {
  actionFunction: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired
};
