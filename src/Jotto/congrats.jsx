import React from "react";
import PropTypes from "prop-types";

const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-test="component-congrats">
        Congrats! you have successfully guessed the word
      </div>
    );
  }
  return <div data-test="component-congrats" />;
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
