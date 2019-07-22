import { asyncTrial } from "./asyncTrial";

jest.mock("./../helpers/index", () => {
  return {
    guessLetterMatchCount: jest.fn(() => Promise.resolve({ data: {} }))
  };
});

test("It should return me 3", async () => {
  const wrapper = await asyncTrial();
  // wrapper.then(result => console.log("result is" + result));
  console.log(wrapper.data);
});
