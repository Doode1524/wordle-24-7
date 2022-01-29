import React from "react";
import "./form-styles.css";

const Form = (props) => {
  return (
    <form
      className="word-form"
      id="word-form"
      autoComplete="off"
      onSubmit={props.handleSubmit}
    >
      <label htmlFor="word"></label>
      <input
        type="text"
        name="word"
        value={props.word[props.curRow]}
        onChange={props.handleChange}
      />
      <div className="form-btn-container">
        <button type="submit" className="form-btn">
          SUBMIT
        </button>
        <br />
        <button type="reset" className="form-btn" onClick={props.handleReset}>
          RESET
        </button>
      </div>
    </form>
  );
};

export default Form;
