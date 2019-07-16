import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { actionTypes, correctGuess } from "./../actions/index";
import succesReducer from "./succesReducer";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("correctGuess", () => {
  test("returns false initially", () => {
    const action = succesReducer(undefined, {});
    expect(action.success).toBe(false);
  });
  test("returns true on dispatch", () => {
    const action = succesReducer(undefined, {
      type: actionTypes.CORRECT_GUESS
    });
    expect(action.success).toBe(true);
  });
});
