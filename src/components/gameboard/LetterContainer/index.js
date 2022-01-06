import React from "react";
import { LetterRow } from "../LetterRow";
import "./letter-container-styles.css";

export const LetterContainer = (props) => {
  return (
    <div className="board-container">
      <div className="board">
        <LetterRow></LetterRow>
        <LetterRow></LetterRow>
        <LetterRow></LetterRow>
        <LetterRow></LetterRow>
        <LetterRow></LetterRow>
        <LetterRow></LetterRow>
      </div>
    </div>
  );
};
