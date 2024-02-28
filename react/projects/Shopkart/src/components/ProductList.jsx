import React, { useEffect, useState } from "react";
import { Sizes } from "./Sizes";

export const ProductList = () => {
  const [productlist, setProductList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.escuelajs.co/api/v1/products");
      const response = await data.json();
      setProductList(response);
    };
    fetchData();
    console.log(productlist);
  }, []);

  return (
    <div>
      <div className="flex px-16 py-16">
        <div className="w-1/4">
          <Sizes></Sizes>
        </div>
        <div className="w-3/4">
          <div className="flex flex-wrap flex-row">
            {productlist?.map((product, index) => (
              <div className="w-1/3 p-4" key={index}>
                <img src={product.images[0]} alt={product.images.title} />
                <p className="my-2">{product.title}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
