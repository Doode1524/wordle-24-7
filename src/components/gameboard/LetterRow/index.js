import React from "react";
import { LetterBox } from "../LetterBox";
import "./letter-row-styles.css";

export const LetterRow = () => {
  return (
    <div className="letter-row">
      <div className="row">
        <LetterBox>R</LetterBox>
        <LetterBox>E</LetterBox>
        <LetterBox>A</LetterBox>
        <LetterBox>C</LetterBox>
        <LetterBox>T</LetterBox>
      </div>
    </div>
  );
};
