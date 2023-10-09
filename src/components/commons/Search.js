import React, { useState } from "react";

function Search({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSearchClick = () => {
    onSearch(keyword);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(keyword);
    }
  };

  return (
    <div className="widget widget_search">
      <label htmlFor="search-form-top">
        <span className="screen-reader-text">Search for:</span>
      </label>
      <input
        type="search"
        id="search-form-top"
        className="search-field"
        placeholder="Search keyword"
        name="search"
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="search-submit"
        onClick={handleSearchClick}
      >
        <span className="screen-reader-text">Search</span>
      </button>
    </div>
  );
}

export default Search;
