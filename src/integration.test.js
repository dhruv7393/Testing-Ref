import { storeFactory } from "./../test/testUtils";
import { guessedWordAction } from "./actions";

const secretWord = "party";
const unsuccessfulGuess = "train";

describe("guess word action creator", () => {
  describe("no guessed word", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state successfully for incorrect guess", () => {
      store.dispatch(guessedWordAction(unsuccessfulGuess));
      const expectedState = {
        ...initialState,
        successReducer: { success: false },
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      };
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
    test("updates state successfully for correct guess", () => {
      store.dispatch(guessedWordAction(secretWord));
      const expectedState = {
        ...initialState,
        successReducer: { success: true },
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
  });

  describe("some guessed word", () => {
    let store;
    const guessedWords = [
      {
        guessedWord: "agile",
        letterMatchCount: 1
      }
    ];
    const initialState = { guessedWords, secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state successfully for incorrect guess", () => {
      store.dispatch(guessedWordAction(unsuccessfulGuess));
      const expectedState = {
        secretWord,
        successReducer: { success: false },
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      };
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
    test("updates state successfully for correct guess", () => {
      store.dispatch(guessedWordAction(secretWord));
      const expectedState = {
        secretWord,
        successReducer: { success: true },
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
  });
});
