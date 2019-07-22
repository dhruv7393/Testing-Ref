import { guessLetterMatchCount } from "./../helpers/index";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD"
};

/* export const correctGuess = () => {
  return { type: actionTypes.CORRECT_GUESS };
}; */

export const guessedWordAction = guessedWord => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = guessLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });
    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      });
    }
  };
};
