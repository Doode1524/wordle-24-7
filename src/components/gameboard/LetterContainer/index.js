import React from "react";
import { LetterRow } from "../LetterRow";
import "./letter-container-styles.css";

export const LetterContainer = (props) => {
  return (
    <div className="board-container">
      <div className="board">
        <LetterRow id="row-1" word={props.word[0]}></LetterRow>
        <LetterRow id="row-2" word={props.word[1]}></LetterRow>
        <LetterRow id="row-3" word={props.word[2]}></LetterRow>
        <LetterRow id="row-4" word={props.word[3]}></LetterRow>
        <LetterRow id="row-5" word={props.word[4]}></LetterRow>
        <LetterRow id="row-6" word={props.word[5]}></LetterRow>
      </div>
    </div>
  );
};
