import React, { useState, useContext } from "react";
import { BookContext } from "../Contexts/BookContext";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { dispatch } = useContext(BookContext);
  const handSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="book Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <button>Submit</button>
    </form>
  );
};

export default BookForm;
