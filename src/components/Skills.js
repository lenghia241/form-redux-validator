import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class Skills extends React.Component {
  state = {
    primarySkill: "Design Reseach",
    otherSkill: [],
    workPlace: []
  };

  componentDidMount() {
    const { primarySkill, otherSkill, workPlace } = this.props.data;
    this.setState({
      primarySkill: primarySkill,
      otherSkill: otherSkill,
      workPlace: workPlace
    });
  }

  onRadioChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSkillCheckboxChange = e => {
    const value = e.target.value;
    const index = this.state.otherSkill.indexOf(value);
    index === -1
      ? this.setState(prevState => ({
          otherSkill: [...prevState.otherSkill, value]
        }))
      : this.setState(prevState => {
          return {
            otherSkill: [
              ...prevState.otherSkill.slice(0, index),
              ...prevState.otherSkill.slice(index + 1)
            ]
          };
        });
  };

  onWorkplaceChange = e => {
    const value = e.target.value;
    const index = this.state.workPlace.indexOf(value);
    index === -1
      ? this.setState(prevState => ({
          workPlace: [...prevState.workPlace, value]
        }))
      : this.setState(prevState => {
          return {
            workPlace: [
              ...prevState.workPlace.slice(0, index),
              ...prevState.workPlace.slice(index + 1)
            ]
          };
        });
  };

  onSubmit = e => {
    e.preventDefault();
    // clear form
    this.props.onSubmitSkills(this.state);
    this.props.history.push("/porfolio");
  };

  validate = (otherSkill, workPlace) => {
    const errors = {
      otherSkill: otherSkill.length ? "" : "Please pick at least 1 option",
      workPlace: workPlace.length ? "" : "Please pick at least 1 option"
    };
    return errors;
  };

  isSubmitDisabled = errors => {
    return Object.values(errors).some(errMsg => {
      return errMsg;
    });
  };

  render() {
    const { otherSkill, workPlace } = this.state;

    const errors = this.validate(otherSkill, workPlace);

    return (
      <form className="section">
        <h2>2. Skills and location</h2>
        <hr />
        <div>
          <h3>Which is your primary design discipline?*</h3>
          <div className="flexContainer">
            <input
              type="radio"
              name="primarySkill"
              value="Design Reseach"
              id="design"
              onChange={this.onRadioChange}
              checked={this.state.primarySkill === "Design Reseach"}
              hidden
            />
            <label htmlFor="design" className="radioButton">
              Design Research
            </label>
            <input
              type="radio"
              name="primarySkill"
              value="Visual Design"
              id="visual"
              onChange={this.onRadioChange}
              checked={this.state.primarySkill === "Visual Design"}
              hidden
            />
            <label htmlFor="visual" className="radioButton">
              Visual Design
            </label>

            <input
              type="radio"
              name="primarySkill"
              id="ux"
              value="UX Design"
              onChange={this.onRadioChange}
              checked={this.state.primarySkill === "UX Design"}
              hidden
            />
            <label htmlFor="ux" className="radioButton">
              UX Design
            </label>

            <input
              type="radio"
              name="primarySkill"
              value="Front-end Dev"
              id="frontend"
              onChange={this.onRadioChange}
              checked={this.state.primarySkill === "Front-end Dev"}
              hidden
            />
            <label htmlFor="frontend" className="radioButton">
              Front-end Dev
            </label>
          </div>
        </div>
        <div className="flexContainer">
          <div className="workSide">
            <h3>Do you have experience with any other disciplines?</h3>
            <label>
              <input
                type="checkbox"
                name="otherSkill"
                value="Visual Design"
                id="VD"
                checked={otherSkill.includes("Visual Design")}
                onChange={this.onSkillCheckboxChange}
                hidden
              />
              <span className="checkmark" />
              &nbsp; Visual Design
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="otherSkill"
                checked={otherSkill.includes("UX Design")}
                id="UD"
                value="UX Design"
                onChange={this.onSkillCheckboxChange}
                hidden
              />
              <span className="checkmark" />
              &nbsp; UX Design
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="otherSkill"
                checked={otherSkill.includes("Front-end Development")}
                id="FE"
                value="Front-end Development"
                onChange={this.onSkillCheckboxChange}
                hidden
              />
              <span className="checkmark" />
              &nbsp; Front-end Development
            </label>
            <br />
            <span className="err-msg">{errors.otherSkill}</span>
          </div>

          <div className="workSide">
            <h3>Where are you interested in working?*</h3>
            <p>
              You must be legally authorized to work without visa sponsorship in
              the location(s) you choose.
            </p>
            <label>
              <input
                type="checkbox"
                name="workPlace"
                value="Austin, Texas"
                checked={workPlace.includes("Austin, Texas")}
                onChange={this.onWorkplaceChange}
                id="austin"
                hidden
              />
              <span className="checkmark" />
              &nbsp; Austin, Texas
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="workPlace"
                value="New York, New York"
                checked={workPlace.includes("New York, New York")}
                onChange={this.onWorkplaceChange}
                id="newyork"
                hidden
              />
              <span className="checkmark" />
              &nbsp; New York, New York
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="workPlace"
                value="Toronto, Canada"
                checked={workPlace.includes("Toronto, Canada")}
                onChange={this.onWorkplaceChange}
                id="toronto"
                hidden
              />
              <span className="checkmark" />
              &nbsp; Toronto, Canada
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="workPlace"
                value="Shanghai, China"
                checked={workPlace.includes("Shanghai, China")}
                onChange={this.onWorkplaceChange}
                id="shanghai"
                hidden
              />
              <span className="checkmark" />
              &nbsp; Shanghai, China
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="workPlace"
                value="Dublin, Ireland"
                checked={workPlace.includes("Dublin, Ireland")}
                onChange={this.onWorkplaceChange}
                id="dublin"
                hidden
              />
              <span className="checkmark" />
              &nbsp; Dublin, Ireland
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="workPlace"
                value="Hursley, United Kingdom"
                checked={workPlace.includes("Hursley, United Kingdom")}
                onChange={this.onWorkplaceChange}
                id="hursley"
                hidden
              />
              <span className="checkmark" />
              &nbsp; Hursley, United Kingdom
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="workPlace"
                value="Boenlingen, Germany"
                checked={workPlace.includes("Boenlingen, Germany")}
                onChange={this.onWorkplaceChange}
                id="germany"
                hidden
              />
              <span className="checkmark" />
              &nbsp; Boenlingen, Germany
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="workPlace"
                value="Somewhere else"
                checked={workPlace.includes("Somewhere else")}
                onChange={this.onWorkplaceChange}
                id="else"
                hidden
              />
              <span className="checkmark" />
              &nbsp; Somewhere else
            </label>
            <br />
            <span className="err-msg">{errors.workPlace}</span>
          </div>
        </div>
        <button
          className="submitButton"
          onClick={() => {
            this.props.history.push("/personal");
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
          Next
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.form.skills
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmitSkills: data => {
      dispatch(actions.submitSkills(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Skills));
