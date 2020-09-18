import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./header.js";
import { Searchbox } from "./searchbox.js";
import { Book } from "./book.js";

function App() {
  const [bookData, setBookData] = useState([]);
  return (
    <div className="App">
      <Header />
      <Searchbox setBookData={setBookData} />
      {bookData.length===0 && <div>Please enter new search term</div>}
      <div className='Grid'>
      {bookData.map((book) => {
        return <Book isbn={book.isbn13 || book.isbn10} />;
      })}
      </div>
    </div>
  );
}

export default App;
