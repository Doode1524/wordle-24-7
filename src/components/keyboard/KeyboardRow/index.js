import React from "react";
import { KeyboardBox } from "../KeyboardBox";
import "./keyboard-row-styles.css";

export const KeyboardRow = () => {
  return (
    <div className="keyboard-row-container">
      <div className="keyboard-row">
          <KeyboardBox>L</KeyboardBox>
          <KeyboardBox>L</KeyboardBox>
          <KeyboardBox>L</KeyboardBox>
          <KeyboardBox>L</KeyboardBox>
          <KeyboardBox>L</KeyboardBox>
          <KeyboardBox>L</KeyboardBox>
          <KeyboardBox>L</KeyboardBox>
          <KeyboardBox>L</KeyboardBox>
          <KeyboardBox>L</KeyboardBox>
          <KeyboardBox>L</KeyboardBox>
      </div>
    </div>
  );
};
