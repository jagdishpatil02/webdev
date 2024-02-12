import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
export const Products = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      Products
      {products.map((product, index) => (
        <div key={index}>
          <div>product name: {product.name}</div>
          <div>product price: {product.price}</div>
        </div>
      ))}
    </div>
  );
};
