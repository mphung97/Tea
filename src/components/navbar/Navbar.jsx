import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex bg-white py-2 px-5 border-bottom justify-content-between">
        <Link to="/" className="h1">
          <span className="font-weight-bold brand">/Eat </span>
          restaurant
        </Link>
        <Link
          to="/logout"
          className="btn btn-light bg-transparent border-0 text-secondary logout"
        >
          <i className="fas fa-sign-out-alt" />
        </Link>
      </div>
    );
  }
}

export default Navbar;
