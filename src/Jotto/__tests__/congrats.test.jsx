import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./../congrats";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

/**
 * Function to create shallow wrapper and return
 * @function setup
 * @param {object} props - props to be supplied
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});
test("displays congrats msg on success", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text().length).not.toBe(0);
});
test("displays nothing in case if the guess has hot yet occured", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});
test("does not throw error with expected props", () => {
  const expectedProps = { success: true };
  checkProps(Congrats, expectedProps);
});
