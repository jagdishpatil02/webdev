import { useState } from "react";

export const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  const onChangeInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a Book</h3>
        <input className="input" value={title} onChange={onChangeInput} />
        <button className="button" type="submit">
          Create book
        </button>
      </form>
    </div>
  );
};
