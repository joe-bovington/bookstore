import React, { useState } from "react";

export function Searchbox({ setBookData }) {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearchVal(e.target.value)}
        value={searchVal}
        placeholder="Enter Book Title"
      />
      <button
        onClick={(e) => {
          fetch(
            "https://api.itbook.store/1.0/search/" + searchVal
          ).then((response) =>
            response.json().then((value) => setBookData(value.books))
          );
        }}
      >
        Search
      </button>
    </div>
  );
}
