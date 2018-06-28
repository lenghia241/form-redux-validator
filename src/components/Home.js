import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/personal">
          <button className="submitButton">Go To The Form</button>
        </Link>
      </div>
    );
  }
}

export default Home;
