import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import GuessedWords from "./../GuessedWords";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  guessWords: [{ gussedWord: "train", letterMatchCount: 3 }]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw error for default props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no guess words", () => {
  const wrapper = setup({ guessedWords: [] });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessword");
    expect(component.length).toBe(1);
  });
  test("renders instruction to guess a word", () => {
    const component = findByTestAttr(wrapper, "guess-instruction");
    expect(component.text().length).not.toBe(0);
  });
});

describe("if there are guess words", () => {
  const guessedWords = [
    { gussedWord: "train", letterMatchCount: 3 },
    { gussedWord: "agile", letterMatchCount: 1 },
    { gussedWord: "party", letterMatchCount: 5 }
  ];

  const wrapper = setup({ guessedWords });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessword");
    expect(component.length).toBe(1);
  });

  test("renders guess word section", () => {
    const guessWordsDiv = findByTestAttr(wrapper, "component-guessWordsDiv");
    expect(guessWordsDiv.length).toBe(1);
  });

  test("renders correct number of guessed words", () => {
    const guessWordsDiv = findByTestAttr(wrapper, "guess-word");
    expect(guessWordsDiv.length).toBe(guessedWords.length);
  });
});
