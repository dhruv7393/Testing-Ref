export function guessLetterMatchCount(guessedWord, secretWord) {
  const secretWordSet = new Set(secretWord.split(""));
  const guessedtWordSet = new Set(guessedWord.split(""));
  return [...secretWordSet].filter(letter => guessedtWordSet.has(letter))
    .length;
}
