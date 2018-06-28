import React, { Component } from "react";
import validator from "validator";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      fruits: ["banana"],
      isTouched: {
        firstName: false,
        lastName: false,
        emailAddress: false
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    alert("submitting");
  };

  isSubmitDisabled = errors => {
    return Object.values(errors).some(errMsg => {
      return errMsg;
    });
  };

  validate = (firstName, lastName, emailAddress, fruits) => {
    const errors = {
      firstName: validator.isAlpha(firstName)
        ? ""
        : "you can have only alphabetic characters",
      lastName: validator.isAlpha(firstName)
        ? ""
        : "you can have only alphabetic characters",
      emailAddress: validator.isEmail(emailAddress)
        ? ""
        : "an invalid email address",
      fruits: fruits.length ? "" : "pick at least one option"
    };

    return errors;
  };

  handleFocus = e => {
    const field = e.target.name;
    this.setState(prevState => ({
      isTouched: {
        ...prevState.isTouched,
        [field]: true
      }
    }));
  };

  handleCheck = e => {
    const value = e.target.value;
    const index = this.state.fruits.indexOf(value);
    // const newFruits = [...this.state.fruits];

    index === -1
      ? this.setState(prevState => ({ fruits: [...prevState.fruits, value] }))
      : this.setState(prevState => {
          // newFruits.splice(index, 1);
          // return {fruits: newFruits}
          return {
            fruits: [
              ...prevState.fruits.slice(0, index),
              ...prevState.fruits.slice(index + 1)
            ]
          };
        });
  };

  render() {
    const { firstName, lastName, emailAddress, isTouched, fruits } = this.state;
    const errors = this.validate(firstName, lastName, emailAddress, fruits);

    return (
      <form className="App" onSubmit={this.handleSubmit}>
        <h1>Forms</h1>

        <label htmlFor="firstName">First name:</label>
        <input
          id="firstName"
          className={errors.firstName && isTouched.firstName ? "invalid" : ""}
          onChange={e => this.setState({ firstName: e.target.value })}
          value={firstName}
          onBlur={this.handleFocus}
          name="firstName"
        />
        {isTouched.firstName &&
          errors.firstName && (
            <span className="err-msg">{errors.firstName}</span>
          )}

        <br />

        <label htmlFor="lastName">Last name:</label>
        <input
          id="lastName"
          className={errors.lastName && isTouched.lastName ? "invalid" : ""}
          onChange={e => this.setState({ lastName: e.target.value })}
          value={lastName}
          onBlur={this.handleFocus}
          name="lastName"
        />
        {isTouched.lastName &&
          errors.lastName && <span className="err-msg">{errors.lastName}</span>}

        <br />

        <label htmlFor="emailAddress">Email:</label>
        <input
          id="emailAddress"
          className={
            errors.emailAddress && isTouched.emailAddress ? "invalid" : ""
          }
          onChange={e => this.setState({ emailAddress: e.target.value })}
          value={emailAddress}
          onBlur={this.handleFocus}
          name="emailAddress"
        />
        {isTouched.emailAddress &&
          errors.emailAddress && (
            <span className="err-msg">{errors.emailAddress}</span>
          )}

        <br />

        <input
          type="checkbox"
          id="banana"
          onChange={this.handleCheck}
          checked={fruits.includes("banana")}
          value="banana"
          name="fruits"
        />
        <label htmlFor="banana">banana</label>
        <br />
        <input
          type="checkbox"
          id="apple"
          onChange={this.handleCheck}
          checked={fruits.includes("apple")}
          value="apple"
          name="fruits"
        />
        <label htmlFor="apple">apple</label>
        <br />
        <input
          type="checkbox"
          id="watermelon"
          onChange={this.handleCheck}
          checked={fruits.includes("watermelon")}
          value="watermelon"
          name="fruits"
        />
        <label htmlFor="watermelon">watermelon</label>
        <br />
        <span className="err-msg">{errors.fruits}</span>

        <br />

        <button type="submit" disabled={this.isSubmitDisabled(errors)}>
          submit
        </button>
      </form>
    );
  }
}

export default App;
