import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="Navbar">
      <h1>HieuTau</h1>
      <p>Lengh {books.length}</p>
    </div>
  );
};

export default Navbar;
