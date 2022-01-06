import React from "react";
import "./letter-box-styles.css";

export const LetterBox = (props) => {
  return <div className="letter-box">{props.children}</div>;
};
