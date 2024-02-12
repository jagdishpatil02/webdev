import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
export const OrderHistory = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <div>product name: {product.name}</div>
          <div>product price: {product.price}</div>
        </div>
      ))}
    </div>
  );
};
