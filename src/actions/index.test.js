import moxios from "moxios";
import { storeFactory } from "./../../test/testUtils";
import { getSecretWord } from "./";

describe("get secret word action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("adds response word to state", () => {
    const secretWord = "party";
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { secretWord }
      });
    });

    store.dispatch(getSecretWord());
    const newState = store.getState();
    const expectedState = { secretWord };
    expect(newState).toEqual(expectedState);
  });
});
