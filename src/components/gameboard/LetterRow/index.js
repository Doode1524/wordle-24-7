import React from "react";
import { LetterBox } from "../LetterBox";
import "./letter-row-styles.css";

export const LetterRow = (props) => {

  return (
    <div className="letter-row">
      <div className="row">
        <LetterBox>{props.word && props.word[0]}</LetterBox>
        <LetterBox>{props.word && props.word[1]}</LetterBox>
        <LetterBox>{props.word && props.word[2]}</LetterBox>
        <LetterBox>{props.word && props.word[3]}</LetterBox>
        <LetterBox>{props.word && props.word[4]}</LetterBox>
      </div>
    </div>
  );
};
