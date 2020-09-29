import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import "./NavBar.css";

class NavBar extends Component {
  //Define your linkFunc so it will redirect to specified route provided via argument.

  // linkFunc(path) {
  //   this.props.history.push(path);
  // }

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

// const mapStateToProps = (state) => {
//   return {
//     user: this.state.user,
//   };
// };

// //Then wrap our Component with the HOC, and the connect double invoked.
// export default withRouter(connect(mapStateToProps)(NavBar));

export default NavBar;
