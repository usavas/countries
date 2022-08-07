import React from "react";
import PropTypes from "prop-types";

CheckBox.propTypes = {
  isChecked: PropTypes.bool,
  toggle: PropTypes.func,
};

function CheckBox({ isChecked, toggle, title }) {
  return (
    <div className="form-check">
      <input
        id="isFTS"
        name={title}
        className="form-check-input"
        type="checkbox"
        value=""
        checked={isChecked}
        onChange={toggle}
      />
      <label className="form-check-label" htmlFor={title}>
        {title}
      </label>
    </div>
  );
}

export default CheckBox;
