import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list__item">
            <Link className="nav__list__item__link" to="/">
              Products
            </Link>
          </li>
          <li className="nav__list__item">
            <Link className="nav__list__item__link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav__list__item">
            <Link className="nav__list__item__link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
