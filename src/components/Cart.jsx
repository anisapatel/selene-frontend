import React, { Component } from "react";
import ProductCard from "./ProductCard";

const sampleCartData = [
  { name: "Test 1", description: "Test Product 1", price: 20, id: 1 },
  { name: "Test 2", description: "Test Product 2", price: 10, id: 2 },
  { name: "Test 3", description: "Test Product 3", price: 30, id: 3 },
];
class Cart extends Component {
  render() {
    return (
      <div>
        <h2>Your cart!</h2>
        {sampleCartData.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    );
  }
}

export default Cart;
