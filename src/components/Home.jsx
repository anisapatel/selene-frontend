import React, { Component } from "react";
import * as api from "../utils/api";

class Home extends Component {
  state = {
    isLoading: true,
    products: [],
  };

  componentDidMount = () => {
    api
      .getProducts()
      .then((products) => {
        console.log(products, "<--");
        this.setState({ products, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return <main></main>;
  }
}

export default Home;
