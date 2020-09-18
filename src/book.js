import React, { useState, useEffect } from "react";
import "./book.css";

export const Book = React.memo(({ isbn }) => {
  const [book, setBook] = useState({});
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/books/" + isbn).then((response) =>
      response.json().then((value) => setBook(value))
    );
  }, [isbn, setBook]);
  return (
    <div className="book">
      <img src={book.image} className="frontCover" />
      <div className="bookInfo">
        <h1>Title: {book.title}</h1>
        <h2>Author: {book.authors}</h2>
      </div>
    </div>
  );
});
//like this
