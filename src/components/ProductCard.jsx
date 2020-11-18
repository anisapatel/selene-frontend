import React from "react";

const ProductCard = ({
  productTitle,
  productPrice,
  productDescription,
  productImage,
}) => {
  return (
    <div>
      <p>name: {productTitle}</p>
      <p>price: {productPrice}</p>
      <p>description: {productDescription}</p>
      <p>image: {productImage}</p>
    </div>
  );
};

export default ProductCard;
