import React from "react";

const ProductCard = ({ name, price }) => {
  return (
    <div>
      <p>name: {name}</p>
      <p>price: {price}</p>
    </div>
  );
};

export default ProductCard;
