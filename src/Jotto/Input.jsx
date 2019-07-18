import React, { Component } from "react";
import { connect } from "react-redux";

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
  success: state.succesReducer.success
});

export default connect(mapStateToProps)(Input);
