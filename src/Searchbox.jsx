import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.css";

function SearchBox({ searchByCapital }) {
  let timer;

  const handleSearch = (evt) => {
    //TODO: add delay
    clearTimeout(timer);
    timer = setTimeout(() => {
      searchByCapital(evt.target.value);
      console.log("Called");
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
