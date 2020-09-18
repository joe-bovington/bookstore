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
        <h4>Title: {book.title}</h4>
        <h6>Author: {book.authors}</h6>
      </div>
    </div>
  );
});
//like this
