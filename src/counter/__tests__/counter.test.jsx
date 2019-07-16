import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Counter from "./../counter";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  return shallow(<Counter {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appCompnent = wrapper.find("[data-test='component-app']");
  expect(appCompnent.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("count");
  expect(initialCounterState).toBe(0);
});

test("clicking button increments counter display", () => {
  const wrapper = setup();
  const appCompnent = wrapper.find("#increment");
  appCompnent.simulate("click");
  expect(wrapper.state("count")).toBe(1);
});

test("clicking button increments to 8 in counter display", () => {
  const wrapper = setup();
  wrapper.setState({ count: 7 });
  const appCompnent = wrapper.find("#increment");
  appCompnent.simulate("click");
  expect(wrapper.state("count")).toBe(8);
});
