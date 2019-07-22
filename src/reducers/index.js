import { combineReducers } from "redux";
import successReducer from "./succesReducer";
import guessedWords from "./guessedWordsReducer";
import secretWord from "./secretWordsReducer";

export default combineReducers({
  successReducer,
  guessedWords,
  secretWord
});
