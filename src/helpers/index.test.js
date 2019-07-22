import { guessLetterMatchCount } from "./index";

describe("guessLetterMatchCount", () => {
  const secretWord = "party";
  test("3 letters match", () => {
    const matchingLetters = guessLetterMatchCount("train", secretWord);
    expect(matchingLetters).toBe(3);
  });
  test("no letters match", () => {
    const matchingLetters = guessLetterMatchCount("hcked", secretWord);
    expect(matchingLetters).toBe(0);
  });
  test("when there are duplicate letters", () => {
    const matchingLetters = guessLetterMatchCount("parka", secretWord);
    expect(matchingLetters).toBe(3);
  });
});
