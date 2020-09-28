import React from "react";

const ProductCard = ({ name, price }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
