import React from "react";
import PropTypes from "prop-types";

SearchBox.prototype = {
  searchByCapital: PropTypes.func,
};

function SearchBox({ searchByCapital, isFTS }) {
  let timer;

  const handleSearch = (evt) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const capital = evt.target.value;
      searchByCapital(capital);
    }, 1000);
  };
  return (
    <div className="col-sm-4 mb-4">
      <div className="input-group">
        <input
          type="text"
          placeholder={isFTS ? "Search Full Text" : "Search By Capital..."}
          className="form-control"
          onChange={handleSearch}
        ></input>
      </div>
    </div>
  );
}

export default SearchBox;
