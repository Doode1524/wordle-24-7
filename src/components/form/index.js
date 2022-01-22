import React from "react";
import "./form-styles.css";

const Form = (props) => {
  return (
    <form className="word-form" autoComplete="off" onSubmit={props.handleSubmit}>
      <label htmlFor="word"></label>
      <input
        type="text"
        name="word"
        value={props.word}
        onChange={props.handleChange}
      />
      <button type="submit" className="form-btn">
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
