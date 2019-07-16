import React, { Component } from "react";
import Congrats from "./congrats";
import GuessedWords from "./GuessedWords";

class Jotto extends Component {
  state = {};
  render() {
    return (
      <div className="jotto">
        <Congrats success={false} />
        <GuessedWords
          guessedWords={[
            { gussedWord: "train", letterMatchCount: 3 },
            { gussedWord: "agile", letterMatchCount: 1 },
            { gussedWord: "party", letterMatchCount: 5 }
          ]}
        />
      </div>
    );
  }
}

export default Jotto;
