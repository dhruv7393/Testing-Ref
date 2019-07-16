import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  if (props.guessedWords.length === 0) {
    return (
      <div data-test="component-guessword">
        <div data-test="guess-instruction">Please enter a guess word</div>
      </div>
    );
  }
  return <div />;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      gussedWord: PropTypes.string,
      letterMatchCount: PropTypes.number
    })
  )
};

export default GuessedWords;
