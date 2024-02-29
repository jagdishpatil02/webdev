import React, { useEffect, useState } from "react";
import { Sizes } from "./Sizes";
import { Categories } from "./Categories";
export const ProductList = () => {
  const [productlist, setProductList] = useState();
  const [categoryId, setCategoryId] = useState();
  const [cartData, setCartData] = useState([]);

  const sendCategories = (id) => {
    setCategoryId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId) {
        const data = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
        );
        const response = await data.json();
        setProductList(response);
      } else {
        const data = await fetch("https://api.escuelajs.co/api/v1/products");
        const response = await data.json();
        setProductList(response);
      }
    };
    fetchData();
  }, [categoryId]);

  const addToCart = (product) => {
    setCartData((currentCart) => [...currentCart, product]);
  };

  return (
    <div>
      <div className="flex px-16 py-16">
        <div className="w-1/4">
          <Sizes sendCategories={sendCategories}></Sizes>
        </div>
        <div className="w-3/4">
          <div className="flex flex-wrap flex-row">
            {productlist &&
              productlist.length > 0 &&
              productlist.map((product, index) => (
                <div className="w-1/3 p-4" key={index}>
                  <img src={product.images[0]} alt={product.title} />
                  <p className="min-h-[50px] my-2">{product.title}</p>
                  <p>${product.price}</p>
                  <button
                    className="bg-black p-2 text-white rounded mt-4 w-full"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
        <div>
          <Categories cartItems={cartData}></Categories>
        </div>
      </div>
    </div>
  );
};
