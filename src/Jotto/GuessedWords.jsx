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
  return (
    <div data-test="component-guessword">
      <div data-test="component-guessWordsDiv">
        <table>
          <thead>
            <tr>
              <th>Guessed</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {props.guessedWords.map(guessedWording => {
              return (
                <tr key={guessedWording.gussedWord} data-test="guess-word">
                  <td>{guessedWording.gussedWord}</td>
                  <td>{guessedWording.letterMatchCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
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
