import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Product from "./components/Product";
import Profile from "./components/Profile";
import { myProductContext } from "./context/ProductInfoContext";
import UserContextProvider from "./context/UserContextProvider";
import OrderHistory from "./components/OrderHistory";
function App() {
  const [product, setProductName] = useState("");

  return (
    <>
      <myProductContext.Provider value={{ product, setProductName }}>
        <Product />
        <OrderHistory />
      </myProductContext.Provider>

      <UserContextProvider>
        <h1>create context</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
