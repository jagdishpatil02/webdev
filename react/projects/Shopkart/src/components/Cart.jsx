import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FaCartArrowDown } from "react-icons/fa";

export const Cart = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  let total = 0;

  const productsWithQuantity = cartItems.reduce((acc, product) => {
    const existingProduct = acc.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }

    return acc;
  }, []);

  if (productsWithQuantity.length > 0) {
    total = productsWithQuantity.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
  }

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const checkoutHandler = () => {
    alert(`Checkout-Subtotal:$ ${total}`);
  };
  return (
    <>
      <div
        className="bg-black p-2 text-white rounded    h-[50px] w-[50px] cursor-pointer right-0 top-0 lg:sticky absolute"
        onClick={toggleDrawer}
      >
        <FaCartArrowDown className="text-2xl" />
        <span className="absolute top-6 right-1 bg-white rounded-full text-black w-[20px] h-[20px] flex justify-center items-center">
          {cartItems?.length}
        </span>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className=" overflow-y-auto drawer-cart relative"
      >
        <div
          onClick={toggleDrawer}
          className="bg-black text-white  absolute w-[25px] h-[25px] text-center cursor-pointer "
        >
          X
        </div>
        {productsWithQuantity &&
          productsWithQuantity.length > 0 &&
          productsWithQuantity.map((product, index) => (
            <div
              className="w-full p-4 border-bottom flex justify-between flex-row relative mt-8"
              key={index}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-[100px]"
              />
              <p className="mx-2">{product.title}</p>
              <p>Quantity: {product.quantity}</p>
              <p className="mx-2">${product.price}</p>
            </div>
          ))}

        {/* Total block */}

        {productsWithQuantity.length > 0 && (
          <div className="w-full px-6 border-bottom flex justify-end flex-col">
            <p className="flex justify-end">Total: ${total}</p>
            <button
              onClick={checkoutHandler}
              className="bg-black p-2 text-white rounded mx-2 mt-16"
            >
              Checkout
            </button>
          </div>
        )}

        {productsWithQuantity.length == 0 && (
          <p className="flex justify-center items-center h-screen">
            Add some items in the cart
          </p>
        )}
      </Drawer>
    </>
  );
};
