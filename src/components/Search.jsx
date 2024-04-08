import React, { useState } from "react";

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          placeholder="Enter movie name"
          id="email_inline"
          type="search"
          className="validate"
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
        <form className="category-form" action="#">
          <p>
            <label>
              <input
                name="group1"
                type="radio"
                data-type="all"
                defaultChecked
                onClick={handleFilter}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="group1"
                type="radio"
                data-type="movie"
                onClick={handleFilter}
              />
              <span>Movies only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="group1"
                type="radio"
                data-type="series"
                onClick={handleFilter}
              />
              <span>Series only</span>
            </label>
          </p>
        </form>
      </div>
    </div>
  );
};

export { Search };
