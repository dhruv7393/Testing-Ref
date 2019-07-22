import React, { Component } from "react";
import { connect } from "react-redux";
import { guessedWordAction } from "./../actions/index";

class Input extends Component {
  state = {};
  render() {
    if (!this.props.success) {
      return (
        <div data-test="success-false">
          <form className="form-inline">
            <input data-test="input-box" type="text" />
            <button data-test="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      );
    }
    return <div data-test="success-true" />;
  }
}

const mapStateToProps = state => ({
  success: state.successReducer.success
});

const mapDispatchToProps = dispatch => ({
  guessedWordAction: word => dispatch(guessedWordAction(word))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
