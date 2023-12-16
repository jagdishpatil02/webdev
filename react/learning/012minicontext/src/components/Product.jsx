// Product.js
import React, { useContext } from "react";
import { myProductContext } from "../context/ProductInfoContext";

function Product() {
  const { product, setProductName } = useContext(myProductContext);

  return (
    <div>
      <h1>{product}</h1>
      <button onClick={() => setProductName("Mouse")}>Click me</button>
    </div>
  );
}

export default Product;
