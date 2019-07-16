import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { actionTypes, correctGuess } from "../index";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("correctGuess", () => {
  test("returns an action with type as CORRECT_GUESS", () => {
    const action = correctGuess();
    // console.log(action);
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
