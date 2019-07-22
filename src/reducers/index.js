import { combineReducers } from "redux";
import succesReducer from "./succesReducer";
import guessedWordsReducer from "./guessedWordsReducer";

export default combineReducers({
  succesReducer,
  guessedWordsReducer
});
