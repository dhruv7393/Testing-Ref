import React from "react";

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

export default Congrats;
