import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import PropTypes from "prop-types";

SearchBox.prototype = {
  searchByCapital: PropTypes.func,
};

function SearchBox({ searchByCapital }) {
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
      <InputGroup>
        <input
          type="text"
          placeholder="Search By Capital..."
          className="form-control"
          onChange={handleSearch}
        ></input>
      </InputGroup>
    </div>
  );
}

export default SearchBox;
