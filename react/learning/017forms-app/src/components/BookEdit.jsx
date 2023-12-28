import { useState } from "react";

export const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book?.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-Primary">Save</button>
      </form>
    </div>
  );
};
