import { guessLetterMatchCount } from "./../helpers/index";

export const asyncTrial = async () => {
  const result = await guessLetterMatchCount("dhruv", "trial");
  return result;
};
