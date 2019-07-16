/**
 * @function findByTestAttr - Returns wrapper if data-test value matches val
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
