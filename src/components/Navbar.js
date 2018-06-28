import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    const { nav } = this.props;
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/home" activeStyle={{ color: "#1886a9" }} exact>
              <button>Home</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/personal" activeStyle={{ color: "#1886a9" }} exact>
              <button>Personal</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeStyle={{ color: "#1886a9" }} exact>
              <button disabled={nav.skillsNav}>Skills</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/porfolio" activeStyle={{ color: "#1886a9" }} exact>
              <button disabled={nav.porfolioNav}>Porfolio</button>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nav: state.form.nav
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);
