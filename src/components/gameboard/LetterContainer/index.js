import React from "react";
import { LetterRow } from "../LetterRow";
import "./letter-container-styles.css";

export const LetterContainer = (props) => {
  return (
    <div className="board-container">
      <div className="board">
        <LetterRow word={props.word[0]}></LetterRow>
        <LetterRow word={props.word[1]}></LetterRow>
        <LetterRow word={props.word[2]}></LetterRow>
        <LetterRow word={props.word[3]}></LetterRow>
        <LetterRow word={props.word[4]}></LetterRow>
        <LetterRow word={props.word[5]}></LetterRow>
      </div>
    </div>
  );
};
