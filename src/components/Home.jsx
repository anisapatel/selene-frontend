import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

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
    if (this.state.isLoading) return <Loader />;
    return (
      <main>
        {this.state.products.map((product) => {
          return <ProductCard key={product._id} {...product} />;
        })}
      </main>
    );
  }
}

export default Home;
