// import axios from "axios";
import React, { useState } from "react";

export const Searchbar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    setTerm(term);
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
      </form>
    </div>
  );
};
