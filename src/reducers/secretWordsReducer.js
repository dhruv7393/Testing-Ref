import { actionTypes } from "./../actions/index";

const initialState = {
  secretWord: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return {
        ...state,
        secretWord: action.payload
      };
    default:
      return state;
  }
};
