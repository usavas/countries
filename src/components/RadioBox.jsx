import React from "react";
import PropTypes from "prop-types";

const RadioBox = ({ id, title, isChecked, onChangeFunc }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        checked={isChecked}
        type="radio"
        name={id}
        id={id}
        onChange={onChangeFunc}
      />
      <label className="form-check-label" htmlFor={id}>
        {title}
      </label>
    </div>
  );
};

RadioBox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  isChecked: PropTypes.bool,
  onChangeFunc: PropTypes.func,
};

export default RadioBox;
