import { useState } from "react";
import "./Index.css";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookLIst";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  const deleteBoookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };
  const editBoookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id == id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <>
      <div className="app">
        <h1>Reading list</h1>
        <BookList
          books={books}
          onDelete={deleteBoookById}
          onEdit={editBoookById}
        />
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
}

export default App;
