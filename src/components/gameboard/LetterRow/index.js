import React from "react";
import { LetterBox } from "../LetterBox";
import "./letter-row-styles.css";

export const LetterRow = (props) => {

  return (
    <div className="letter-row">
      <div className="row" id={props.id}>
        <LetterBox id="box-1">{props.word && props.word[0]}</LetterBox>
        <LetterBox id="box-2">{props.word && props.word[1]}</LetterBox>
        <LetterBox id="box-3">{props.word && props.word[2]}</LetterBox>
        <LetterBox id="box-4">{props.word && props.word[3]}</LetterBox>
        <LetterBox id="box-5">{props.word && props.word[4]}</LetterBox>
      </div>
    </div>
  );
};
