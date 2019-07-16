import { actionTypes } from "./../actions/index";

const initialState = {
  success: false
};

export default function succesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return {
        ...state,
        success: true
      };
    default:
      return state;
  }
}
