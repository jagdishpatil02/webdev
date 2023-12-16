import React from "react";
import { useContext } from "react";
import { myProductContext } from "../context/ProductInfoContext";

export default function OrderHistory() {
  const { product } = useContext(myProductContext);

  return <div>OrderHistory ProductName: {product}</div>;
}
