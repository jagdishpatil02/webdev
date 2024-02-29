import React, { useEffect, useState } from "react";
import { Sizes } from "./Sizes";
import { Categories } from "./Categories";
import { Rings } from "react-loader-spinner";

export const ProductList = () => {
  const [productlist, setProductList] = useState();
  const [categoryId, setCategoryId] = useState();
  const [cartData, setCartData] = useState([]);
  const [loader, setLoader] = useState(false);

  const sendCategories = (id) => {
    setCategoryId(id);
  };

  useEffect(() => {
    setLoader(true);

    const fetchData = async () => {
      if (categoryId) {
        const data = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
        );
        const response = await data.json();
        setProductList(response);
        setLoader(false);
      } else {
        const data = await fetch("https://api.escuelajs.co/api/v1/products");
        const response = await data.json();
        setProductList(response);
        setLoader(false);
      }
    };
    fetchData();
  }, [categoryId]);

  const addToCart = (product) => {
    setCartData((currentCart) => [...currentCart, product]);
  };

  return (
    <div>
      <div className="flex">
        <div className="w-1/4 px-4 py-16">
          <Sizes sendCategories={sendCategories}></Sizes>
        </div>
        <div className="w-3/4 px-4 py-16">
          <p className="mx-4">{productlist?.length} Product(s) found</p>

          <div className="flex flex-wrap flex-row">
            {productlist &&
              productlist.length > 0 &&
              productlist.map((product, index) => (
                <div className="w-1/3 p-4" key={index}>
                  {product.price > 50 && (
                    <p className="bg-black text-white absolute right-82 px-2 text-sm">
                      Free shipping
                    </p>
                  )}
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

            {loader && (
              <div className="flex justify-center items-center w-full h-screen">
                <Rings
                  visible={loader}
                  height="80"
                  width="80"
                  color="#333"
                  ariaLabel="rings-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <Categories cartItems={cartData}></Categories>
        </div>
      </div>
    </div>
  );
};
