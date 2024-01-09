import React, { useState } from "react";

function hoc(OriginalComponent) {
  function newComponent() {
    const [money, setMoney] = useState(0);
    const handleMoney = () => {
      setMoney((money) => money + 20);
    };

    return <OriginalComponent handleMoney={handleMoney} money={money} />;
  }
  return newComponent;
}

export default hoc;
