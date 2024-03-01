import React, { useEffect, useState } from "react";
import { Categories } from "./Categories";
import { Cart } from "./Cart";
import { Rings } from "react-loader-spinner";

export const ProductList = () => {
  const [productlist, setProductList] = useState();
  const [categoryId, setCategoryId] = useState();
  const [cartData, setCartData] = useState([]);
  const [serachProduct, setProductSearch] = useState("");

  const [loader, setLoader] = useState(false);

  const sendCategories = (id) => {
    setCategoryId(id);
  };

  useEffect(() => {
    setLoader(true);

    const fetchData = async () => {
      if (categoryId) {
        try {
          const data = await fetch(
            `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
          );
          const response = await data.json();
          setProductList(response);
        } catch (error) {
          // Handle the error gracefully
          console.error("Error fetching data:", error);
          // Optionally, you can set some default or empty value for productList
          setProductList([]);
        }

        setLoader(false);
      } else {
        try {
          const data = await fetch("https://api.escuelajs.co/api/v1/products");
          const response = await data.json();
          setProductList(response);
        } catch (error) {
          // Handle the error gracefully
          console.error("Error fetching data:", error);
          // Optionally, you can set some default or empty value for productList
          setProductList([]);
        }
        setLoader(false);
      }
    };
    fetchData();
  }, [categoryId]);

  const addToCart = (product) => {
    setCartData((currentCart) => [...currentCart, product]);
  };

  const getProductsFromSearch = async (product) => {
    setProductSearch(product);
    setLoader(true);
    try {
      const data = await fetch(
        `https://api.escuelajs.co/api/v1/products/?title=${product}`
      );
      const response = await data.json();
      setProductList(response);
    } catch (error) {
      // Handle the error gracefully
      console.error("Error fetching data:", error);
      // Optionally, you can set some default or empty value for productList
      setProductList([]);
    }

    setLoader(false);
  };

  return (
    <div>
      <h1 className="my-8 font-bold underline text-2xl text-center">
        Shopkart
      </h1>
      <div className="flex flex-col lg:flex-row relative">
        <div className="lg:w-1/4 w-full px-4 py-4">
          <Categories sendCategories={sendCategories}></Categories>
        </div>
        <div className="lg:w-[72%] w-full px-4 py-4">
          <input
            type="text"
            className="p-2 lg:w-[97%] w-[95%] border-1 border-black outline mx-4 my-2"
            placeholder="Search for Products..."
            value={serachProduct}
            onChange={(e) => getProductsFromSearch(e.target.value)}
          />
          <p className="mx-4 my-2 font-medium">
            {productlist?.length} Product(s) found
          </p>

          <div className="flex flex-wrap">
            {productlist &&
              productlist.length > 0 &&
              productlist.map((product, index) => (
                <div className="w-full lg:w-1/3 p-4" key={index}>
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
        <Cart cartItems={cartData}></Cart>
        {/* Placeholder for cart, adjust width if needed */}
      </div>
    </div>
  );
};
