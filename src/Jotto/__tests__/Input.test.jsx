import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import Input from "./../Input";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("word has not been guessed", () => {
  const wrapper = setup();
  test("renders component without error", () => {
    const container = findByTestAttr(wrapper, "success-false");
    expect(container.length).toBe(1);
  });
  test("renders input box", () => {
    const container = findByTestAttr(wrapper, "input-box");
    expect(container.length).toBe(1);
  });
  test("renders submit button", () => {
    const container = findByTestAttr(wrapper, "submit-button");
    expect(container.length).toBe(1);
  });
});

describe("word has been guessed", () => {
  const initialState = { successReducer: { success: true } };
  const wrapper = setup(initialState);
  test("renders component without error", () => {
    const container = findByTestAttr(wrapper, "success-true");
    expect(container.length).toBe(1);
  });
  test("does not renders input box", () => {
    const container = findByTestAttr(wrapper, "input-box");
    expect(container.length).toBe(0);
  });
  test("does not renders submit button", () => {
    const container = findByTestAttr(wrapper, "submit-button");
    expect(container.length).toBe(0);
  });
});
