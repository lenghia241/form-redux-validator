import React, { Component } from "react";
import { connect } from "react-redux";

export class Sumary extends Component {
  render() {
    const { data } = this.props;
    // const otherSkill = Object.keys(data.otherSkill).filter(
    //   key => data.otherSkill[key] === true
    // );
    // const workPlace = Object.keys(data.workPlace).filter(
    //   key => data.workPlace[key] === true
    // );

    const mapOtherSkill = data.skills.otherSkill.map((skill, index) => {
      return (
        <p key={index}>
          {index + 1}. {skill}
        </p>
      );
    });

    const mapWorkPlace = data.skills.workPlace.map((place, index) => {
      return (
        <p key={index}>
          {index + 1}. {place}
        </p>
      );
    });
    // <p>{JSON.stringify(this.props.data, null, 2)}</p>

    return (
      <div className="section">
        <h2>4. Sumary</h2>
        <hr />

        <h3>Personal Infomation</h3>
        <h4>Full Name: {data.info.fullName}</h4>
        <p>Phone: {data.info.phone}</p>
        <p>Email: {data.info.email}</p>
        <p>Adress: {data.info.address}</p>
        <p>City: {data.info.city}</p>
        <p>State: {data.info.state}</p>
        <p>Where did you hear about us: {data.info.heard}</p>
        <br />
        <h3>Skills</h3>
        <p>Primary design discipline: {data.skills.primarySkill}</p>
        <div>
          Experience with disciplines:
          {mapOtherSkill}
        </div>
        <div>Workplace interest: {mapWorkPlace}</div>
        <br />
        <h3>Porfolio</h3>
        <p>Porfolio link: {data.porfolio.portLink}</p>
        <p>Other infomation: {data.porfolio.moreInfo}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.form
  };
};

export default connect(
  mapStateToProps,
  null
)(Sumary);
