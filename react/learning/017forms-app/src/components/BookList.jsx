import { BookShow } from "./BookShow";

export const BookList = ({ books, onDelete, onEdit }) => {
  console.log(books);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} key={book.id} book={book} onEdit={onEdit} />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
};
