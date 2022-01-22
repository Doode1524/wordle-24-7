import React from "react";
import { KeyboardRow } from "../KeyboardRow";
import "./keyboard-container-styles.css";

const KeyboardContainer = () => {
  return (
    <div className="keyboard-container">
      <div className="keyboard">
        <KeyboardRow></KeyboardRow>
        <KeyboardRow></KeyboardRow>
        <KeyboardRow></KeyboardRow>
      </div>
    </div>
  );
};

export default KeyboardContainer;
