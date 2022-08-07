import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ searchFunc, isFTS, caseSensitive }) => {
  let timer;

  const handleSearch = (evt) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const capital = evt.target.value;
      searchFunc(capital);
    }, 1000);
  };
  return (
    <div className="col-sm-4">
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
};

SearchBox.propTypes = {
  searchByCapital: PropTypes.func,
  isFTS: PropTypes.bool,
};

export default SearchBox;
