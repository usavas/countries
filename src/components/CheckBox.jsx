import React from "react";
import PropTypes from "prop-types";

CheckBox.propTypes = {
  isChecked: PropTypes.bool,
  toggle: PropTypes.func,
};

function CheckBox({ isChecked, toggle }) {
  return (
    <div className="form-check">
      <input
        id="isFTS"
        className="form-check-input"
        type="checkbox"
        value=""
        checked={isChecked}
        onChange={toggle}
        onClick={toggle}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Full Text Search
      </label>
    </div>
  );
}

export default CheckBox;
