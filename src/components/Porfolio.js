import React from "react";
import { withRouter } from "react-router-dom";
import validator from "validator";
import { connect } from "react-redux";
import * as actions from "../actions";

class Porfolio extends React.Component {
  state = {
    portLink: "",
    moreInfo: "",
    isTouched: {
      portLink: false
    }
  };

  componentDidMount() {
    const { portLink, moreInfo } = this.props.data;
    this.setState({
      portLink: portLink,
      moreInfo: moreInfo
    });
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFocus = e => {
    this.setState({
      isTouched: {
        ...this.state.isTouched,
        [e.target.name]: true
      }
    });
  };

  isSubmitDisabled = errors => {
    return Object.values(errors).some(errMsg => {
      return errMsg;
    });
  };

  validate = (portLink, moreInfo) => {
    const errors = {
      portLink: validator.isURL(portLink) ? "" : "Invalid Link"
    };

    return errors;
  };

  onSubmit = e => {
    e.preventDefault();
    // clear form
    this.setState({
      portLink: "",
      moreInfo: ""
    });
    this.props.onSubmitPortfolio(this.state);
    this.props.history.push("/sumary");
  };

  render() {
    const { portLink, isTouched, moreInfo } = this.state;
    const errors = this.validate(portLink);
    return (
      <form className="section">
        <h2>3. Portfolio</h2>
        <hr />
        <p>
          Prove you're IBM's next great designer by showing us who you are. What
          you've done. How you think. Tell us your story.
        </p>
        <input
          type="text"
          name="portLink"
          placeholder="Portfolio link*"
          value={portLink}
          onChange={this.onInputChange}
          onBlur={this.handleFocus}
          className={errors.portLink && isTouched.portLink ? "invalid" : ""}
        />
        {errors.portLink &&
          isTouched.portLink && (
            <span className="err-msg">{errors.portLink}</span>
          )}
        <textarea
          name="moreInfo"
          cols={30}
          rows={5}
          placeholder="Anything else(another link, availability, etc.)?"
          required
          value={moreInfo}
          onChange={this.onInputChange}
        />
        <button
          className="submitButton"
          onClick={() => {
            this.props.history.push("./skills");
          }}
        >
          Back
        </button>
        &nbsp;
        <button
          type="Submit"
          className="submitButton"
          onClick={this.onSubmit}
          disabled={this.isSubmitDisabled(errors)}
        >
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.form.porfolio
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmitPortfolio: data => {
      dispatch(actions.submitPortfolio(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Porfolio));
