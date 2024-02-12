import React from "react";

export const ExpenseFilter = ({ onInputChange }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => onInputChange(e.target.value)}
        style={{ border: "1px solid" }}
      />
    </div>
  );
};
