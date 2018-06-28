import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";
import validator from "validator";

class PersonalInfo extends React.Component {
  state = {
    fullName: "",
    phone: "",
    email: "",
    reEmail: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    heard: "",
    isTouched: {
      fullName: false,
      phone: false,
      email: false,
      reEmail: false,
      address: false,
      city: false,
      state: false,
      country: false,
      zip: false,
      heard: false
    }
  };

  componentDidMount() {
    const {
      fullName,
      phone,
      email,
      reEmail,
      address,
      city,
      state,
      country,
      zip,
      heard
    } = this.props.data;
    this.setState(prevState => ({
      ...prevState,
      fullName: fullName,
      phone: phone,
      email: email,
      reEmail: reEmail,
      address: address,
      city: city,
      state: state,
      country: country,
      zip: zip,
      heard: heard
    }));
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmitInfo(this.state);
    this.props.history.push("/skills");
  };

  handleFocus = e => {
    this.setState({
      isTouched: {
        ...this.state.isTouched,
        [e.target.name]: true
      }
    });
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  isSubmitDisabled = errors => {
    return Object.values(errors).some(errMsg => {
      return errMsg;
    });
  };

  validate = (
    fullName,
    phone,
    email,
    reEmail,
    address,
    city,
    state,
    country,
    zip,
    heard
  ) => {
    const errors = {
      fullName: validator.isAlpha(fullName) ? "" : "*Input a valid name.",
      address: validator.isAlphanumeric(address)
        ? ""
        : "*Input a valid address.",
      city: validator.isAlpha(city) ? "" : "*Input a valid city.",
      state: validator.isAlpha(state) ? "" : "*Input state.",
      country: validator.isAlpha(country) ? "" : "*Input a country",
      reEmail:
        validator.isEmail(reEmail) && reEmail === this.state.email
          ? ""
          : "Email not match",
      zip: validator.isInt(zip) ? "" : "Invalid zip code",
      phone: validator.isInt(phone) ? "" : "Invalid Phone Number",
      email: validator.isEmail(email) ? "" : "Invalid Email address"
    };
    // /^[0-9]{9,15}$/
    return errors;
  };

  render() {
    const {
      fullName,
      phone,
      email,
      reEmail,
      address,
      city,
      state,
      country,
      zip,
      heard,
      isTouched
    } = this.state;

    const errors = this.validate(
      fullName,
      phone,
      email,
      reEmail,
      address,
      city,
      state,
      country,
      zip,
      heard
    );

    return (
      <form className="section">
        <h2>1. Personal Infomation</h2>
        <hr />
        <div className="flexContainer">
          <div className="leftInfo">
            <input
              type="text"
              name="fullName"
              placeholder="Full name*"
              value={fullName}
              onChange={this.onInputChange}
              onBlur={this.handleFocus}
              className={errors.fullName && isTouched.fullName ? "invalid" : ""}
            />
            {errors.fullName &&
              isTouched.fullName && (
                <span className="err-msg">{errors.fullName}</span>
              )}

            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={email}
              onChange={this.onInputChange}
              onBlur={this.handleFocus}
              className={errors.email && isTouched.email ? "invalid" : ""}
            />
            {errors.email &&
              isTouched.email && (
                <span className="err-msg">{errors.email}</span>
              )}

            <input
              type="email"
              name="reEmail"
              placeholder="Re-enter email*"
              value={reEmail}
              onChange={this.onInputChange}
              onBlur={this.handleFocus}
              className={errors.reEmail && isTouched.reEmail ? "invalid" : ""}
            />
            {errors.reEmail &&
              isTouched.reEmail && (
                <span className="err-msg">{errors.reEmail}</span>
              )}
          </div>

          <div className="rightInfo">
            <input
              type="phone"
              name="phone"
              placeholder="Phone*"
              value={phone}
              onChange={this.onInputChange}
              onBlur={this.handleFocus}
              className={errors.phone && isTouched.phone ? "invalid" : ""}
            />
            {errors.phone &&
              isTouched.phone && (
                <span className="err-msg">{errors.phone}</span>
              )}
          </div>
        </div>
        <input
          type="text"
          name="address"
          rows={3}
          placeholder="Address*"
          value={address}
          onChange={this.onInputChange}
          onBlur={this.handleFocus}
          className={errors.address && isTouched.address ? "invalid" : ""}
        />
        {errors.address &&
          isTouched.address && (
            <span className="err-msg">{errors.address}</span>
          )}

        <div className="flexContainer">
          <div className="spanInputBox">
            <input
              type="text"
              name="city"
              placeholder="City*"
              value={city}
              onChange={this.onInputChange}
              onBlur={this.handleFocus}
              className={errors.city && isTouched.city ? "invalid " : ""}
            />
            {errors.city &&
              isTouched.city && <span className="err-msg">{errors.city}</span>}
          </div>

          <div className="spanInputBox">
            <input
              type="text"
              name="state"
              placeholder="State"
              className={errors.state && isTouched.state ? "invalid " : ""}
              value={state}
              onChange={this.onInputChange}
              onBlur={this.handleFocus}
            />
            {errors.state &&
              isTouched.state && (
                <span className="err-msg">{errors.state}</span>
              )}
          </div>

          <div className="spanInputBox">
            <input
              type="text"
              name="country"
              placeholder="Country/Region*"
              className={errors.country && isTouched.country ? "invalid " : ""}
              value={country}
              onChange={this.onInputChange}
              onBlur={this.handleFocus}
            />
            {errors.country &&
              isTouched.country && (
                <span className="err-msg">{errors.country}</span>
              )}
          </div>

          <div className="spanInputBox">
            <input
              type="text"
              name="zip"
              placeholder="Zip/Postal code"
              className={errors.zip && isTouched.zip ? "invalid " : ""}
              value={zip}
              onChange={this.onInputChange}
              onBlur={this.handleFocus}
            />
            {errors.country &&
              isTouched.country && (
                <span className="err-msg">{errors.zip}</span>
              )}
          </div>
        </div>
        <input
          type="text"
          name="heard"
          placeholder="How did you hear about us"
          value={heard}
          onChange={this.onInputChange}
          onBlur={this.handleFocus}
        />

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
    data: state.form.info
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmitInfo: data => {
      dispatch(actions.submitInfo(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonalInfo));
