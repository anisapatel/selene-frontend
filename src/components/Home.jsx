import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

class Home extends Component {
  state = {
    isLoading: true,
    products: [
      {
        productId: 1,
        productTitle: "Moon Necklace",
        productDescription: "Gold stylish necklace",
        productPrice: "£5.00",
        productImage: "",
      },
      {
        productId: 2,
        productTitle: "Silver Necklace",
        productDescription: "Gold stylish necklace",
        productPrice: "£5.00",
        productImage: "",
      },
      {
        productId: 3,
        productTitle: "Star Necklace",
        productDescription: "Gold stylish necklace",
        productPrice: "£5.00",
        productImage: "",
      },
      {
        productId: 4,
        productTitle: "Unicorn Necklace",
        productDescription: "Gold stylish necklace",
        productPrice: "£5.00",
        productImage: "",
      },
    ],
  };

  // componentDidMount = () => {
  //   api
  //     .getProducts()
  //     .then((products) => {
  //       console.log(products, "<--");
  //       this.setState({ products, isLoading: false });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  render() {
    // if (this.state.isLoading) return <Loader />;
    return (
      <main>
        {this.state.products.map((product) => {
          return <ProductCard key={product.productId} {...product} />;
        })}
      </main>
    );
  }
}

export default Home;
