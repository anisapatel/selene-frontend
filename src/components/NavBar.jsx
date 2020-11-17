import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
