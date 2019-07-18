import checkPropTypes from "check-prop-types";

import rootReducer from "../src/reducers";
import { createStore, applyMiddleware } from "redux";
import { middlewear } from "./../src/configureStore";

export const storeFactory = initialState => {
  const createStoreWithMiddlewear = applyMiddleware(...middlewear)(createStore);
  return createStoreWithMiddlewear(rootReducer, initialState);
};

/**
 * @function findByTestAttr - Returns wrapper if data-test value matches val
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, confirmingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confirmingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
