import { useState } from "react";
import hoc from "./hoc/hoc";

const Person1 = ({ money, handleMoney }) => {
  return (
    <div>
      ${money}
      <button onClick={handleMoney}>set</button>
    </div>
  );
};

export default hoc(Person1);
