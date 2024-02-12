import "./App.css";
import { Basic } from "./components/Basic";
import { OrderHistory } from "./components/Product/OrderHistory";
import { Products } from "./components/Product/Products";
import { ProductContext } from "./components/context/ProductContext";
import Expenses from "./components/expenses/Expenses";
function App() {
  let products = [
    {
      name: "mouse",
      price: "2000",
    },
    {
      name: "keyboard",
      price: "5000",
    },
  ];
  return (
    <>
      <h1>React app</h1>

      <ProductContext.Provider value={{ products }}>
        <Products></Products>
        <OrderHistory></OrderHistory>
      </ProductContext.Provider>
      <Basic></Basic>
      <Expenses></Expenses>
    </>
  );
}

export default App;
