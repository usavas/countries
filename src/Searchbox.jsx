import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.css";

function SearchBox({ searchByCapital }) {
  return (
    <div className="col-sm-4 mb-4">
      <InputGroup>
        <input
          type="text"
          placeholder="Search By Capital..."
          className="form-control"
          onChange={(evt) => searchByCapital(evt.target.value)}
        ></input>
      </InputGroup>
    </div>
  );
}

export default SearchBox;
