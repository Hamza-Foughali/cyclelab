import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ bicycles, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <i className="bi bi-search">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={query}
          onChange={handleInputChange}
        />
      </i>
    </div>
  );
};

export default SearchBar;
