import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";
import BookDetails from "./BookDetail";

const Booklists = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          //   <li>{book.title}</li>;
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">no book</div>
  );
};

export default Booklists;
