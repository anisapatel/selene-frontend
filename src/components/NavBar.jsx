import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/sale">Sale</Link>
            </li>
            <li>
              <Link to="/womens">Womens</Link>
            </li>
            <li>
              <Link to="/mens">Mens</Link>
            </li>
            <li>
              <Link to="/girls">Girls</Link>
            </li>
            <li>
              <Link to="/home">Home & Gifts</Link>
            </li>*/}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    );
  }
}

export default NavBar;
