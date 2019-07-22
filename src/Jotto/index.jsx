import React, { Component } from "react";
import { connect } from "react-redux";
import Congrats from "./congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

class Jotto extends Component {
  state = {};
  render() {
    return (
      <div className="jotto">
        <Congrats success={this.props.success} />
        <Input />
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

const mapStateToProps = state => ({
  success: state.successReducer.success
});

export default connect(mapStateToProps)(Jotto);
